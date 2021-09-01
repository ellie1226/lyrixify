import queryString from "query-string";

let isAuthorized = null;
let expireTime = 0;

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const token_endpoint = process.env.SPOTIFY_TOKEN_ENDPOINT;

const authorizationHeader = Buffer.from(
  `${client_id}:${client_secret}`
).toString("base64");

const isExpired = () => {
  return Date.now() > expireTime;
};

const authenticate = async () => {
  const response = await fetch(token_endpoint, {
    method: "POST",
    headers: {
      Authorization: `Basic ${authorizationHeader}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: queryString.stringify({
      grant_type: "client_credentials",
    }),
  });

  const token = await response.json();

  // Saves inital token expiry time for reference at every api request
  const expires_in = Number.parseInt(token.expires_in, 10);
  expireTime = Date.now() + expires_in * 1000;

  isAuthorized = token.access_token;
  console.log("Inside of function", isAuthorized, expireTime);

  return isAuthorized;
};

const setAccessToken = async () => {
  return isAuthorized && !isExpired() ? isAuthorized : await authenticate();
};

export const performRequestsFromParams = async (sourceUrl) => {
  const accessToken = await setAccessToken();
  console.log("retrieved access token", accessToken, isExpired());

  return fetch(sourceUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

// TODO: Add error handling middleware

// API Endpoints
export const searchTracks = () => {
  const SEARCH_TRACKS = `https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V`;

  return performRequestsFromParams(SEARCH_TRACKS);
};

export const searchArtists = (keywords) => {
  // let keyword = "";
  const SEARCH_ARTISTS = `https://api.spotify.com/v1/search?q=${keywords}&type=artist,track&limit=10`;

  return performRequestsFromParams(SEARCH_ARTISTS);
};

export const getTopArtists = () => {
  const GET_TOP_ARTISTS = `https://api.spotify.com/v1/playlists/33Re55lSgkd5XzB6YMhFZA`;

  return performRequestsFromParams(GET_TOP_ARTISTS);
};

export const getTopTracks = () => {
  const GET_TOP_TRACKS = `https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M`;

  return performRequestsFromParams(GET_TOP_TRACKS);
};
