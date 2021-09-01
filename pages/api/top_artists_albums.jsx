import { getTopArtists } from "../../lib/spotify";

export default async function handler(_, res) {
  try {
    const response = await getTopArtists();
    const data = await response.json();

    const albums = data.tracks.items.slice(0, 20).map((album) => ({
      id: album.track.id,
      name: album.track.album.name,
      image: album.track.album.images[2].url || album.track.album.images,
      artist_name: album.track.artists.map((artist) => artist.name),
      spotify_url: album.track.external_urls.spotify,
    }));

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=86400, stale-while-revalidate=43200"
    );

    return res.status(200).json({ albums });
  } catch (error) {
    console.error("No artists found at this time", error);
  }
}
