import type { SpotifyImage } from "../utils/types.js";

export type ArtistDetails = {
  id: string;
  name: string;
  popularity: number;
  followers: { total: number };
  genres: string[];
  images: SpotifyImage[];
};