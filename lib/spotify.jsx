import queryString from "query-string";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
let accessToken = null;

console.log("Basic authorization string created", basic)

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: queryString.stringify({
      grant_type: "client_credentials",
    }),
  });
  return response.json();
};

const setAccessToken = async () => {
  if (accessToken) {
    return accessToken;
  } else {
    const { access_token } = await getAccessToken();
    accessToken = access_token;
    return accessToken;
  }
}

// TODO: create a getRefreshToken if the token has expired. This can be handled in the performRequestFromParams handler
// const getRefreshToken = () => {}


// TODO: add a check to check if there is an error response for token expiration
export const performRequestFromParams = async (endpoint) => {
  accessToken = await setAccessToken();
  console.log("Access_token retrieved!!", accessToken)

  return fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const searchTracks = () => {
  const SEARCH_TRACKS = `https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V`;
  return performRequestFromParams(SEARCH_TRACKS)
};

export const searchByArtists = () => {
  const SEARCH_ARTISTS = `https://api.spotify.com/v1/search?q=snoh&type=artist&limit=5`;
  return performRequestFromParams(SEARCH_ARTISTS)
};