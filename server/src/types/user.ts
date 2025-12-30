import type { SpotifyImage } from "../utils/types.js";

export type UserProfile = {
  id: string;
  display_name: string;
  followers: { total: number };
  images: SpotifyImage[];
}

export type TopArtist = {
  items: Array<{
    id: string;
    followers: { total: number };
    name: string;
    images: SpotifyImage[];
  }>;
  total?: number;
  limit?: number;
  offset?: number;
  next?: string | null;
  previous?: string | null;
};

export type TopTrack = {
  items: Array<{
    id: string;
    name: string;
    duration_ms: number;
    album: {
      id: string;
      name: string;
      images: SpotifyImage[];
    };
    artists: Array<{
      id: string;
      name: string;
    }>;
  }>;
  total?: number;
  limit?: number;
  offset?: number;
  next?: string | null;
  previous?: string | null;
};

export type RecentTracks = {
  items: Array<{
    played_at: string;
    track: {
      id: string;
      name: string;
      duration_ms: number;
      album: {
        name: string;
        images: SpotifyImage[];
      };
      artists: Array<{
        id: string;
        name: string;
      }>;
    };
  }>;
  next?: string | null;
  limit?: number;
};