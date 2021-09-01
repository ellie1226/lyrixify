import { getTopTracks } from "../../lib/spotify";

export default async function handler(_, res) {
  try {
    const response = await getTopTracks();
    const data = await response.json();

    const tracks = data.tracks.items.slice(0, 20).map((artist) => ({
      id: artist.track.id,
      name: artist.track.name,
      image: artist.track.album.images[2].url,
      artist_name: artist.track.artists.map((artist) => artist.name),
      preview: artist.track.preview_url,
      spotify_url: artist.track.external_urls.spotify,
    }));

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=86400, stale-while-revalidate=43200"
    );

    return res.status(200).json({ tracks });
  } catch (error) {
    console.error("No tracks available at this time", error);
  }
}
