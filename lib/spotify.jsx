import queryString from 'query-string';

let isAuthorized = null;
let expireTime = 0;

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const token_endpoint = process.env.SPOTIFY_TOKEN_ENDPOINT;

const authorizationHeader = Buffer.from(
  `${client_id}:${client_secret}`
).toString('base64');

const isExpired = () => {
  expireTime ? Date.now() > expireTime : false;
};

const authenticate = async () => {
  const response = await fetch(token_endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${authorizationHeader}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: queryString.stringify({
      grant_type: 'client_credentials',
    }),
  });

  const token = await response.json();
  
  // saves inital token expiry time for reference at every api request
  const expires_in = Number.parseInt(token.expires_in, 10);
  expireTime = Date.now() + expires_in * 1000;
  
  isAuthorized = token.access_token;

  return isAuthorized;
};

const setAccessToken = async () => {
  isAuthorized && !isExpired() ? isAuthorized : await authenticate();
};

export const performRequestsFromParams = async (api_url) => {
  const accessToken = await setAccessToken();

  return fetch(api_url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const searchTracks = () => {
  const SEARCH_TRACKS = `https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V`;
  return performRequestsFromParams(SEARCH_TRACKS);
};

export const searchAllItems = (keywords) => {
  // let keyword = '';
  const SEARCH_ARTISTS = `https://api.spotify.com/v1/search?q=${keywords}&type=artist,track&limit=10`;
  return performRequestsFromParams(SEARCH_ARTISTS);
};
