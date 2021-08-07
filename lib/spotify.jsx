import queryString from "query-string";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
console.log("basic", basic)

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

const SEARCH_TRACKS = `https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V`;

export const search_tracks = async () => {
  const { access_token } = await getAccessToken();
  console.log("access_token", access_token)
  return fetch(SEARCH_TRACKS, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
