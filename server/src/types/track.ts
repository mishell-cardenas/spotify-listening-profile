import type { SpotifyImage } from "../utils/types.js";

export type TrackDetails = {
  id: string;
  name: string;
  popularity: number;
  duration_ms: number;
  artists: Array<{
    id: string;
    name: string;
  }>;
  album: {
    id: string;
    name: string;
    release_date: string;
    total_tracks: number;
    images: SpotifyImage[];
  };
};