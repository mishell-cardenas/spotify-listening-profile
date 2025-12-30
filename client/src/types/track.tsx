export type TopTrack = {
  track_id: string;
  track_name: string;
  track_duration: number;
  album_id: string;
  album_name: string;
  album_image: string | null;
  artist_name: string;
};

export type TopTrackSummary = TopTrack[];

export type RecentTracks = {
  track_id: string;
  track_name: string;
  track_duration: number;
  album_name: string;
  album_image: string | null;
  artist_name: string;
};

export type RecentTrackSummary = RecentTracks[];

export type TrackSummary = {
  track_id: string;
  track_name: string;
  track_popularity: number;
  track_duration: number;
  artist_names: string;
  album_id: string;
  album_name: string;
  album_image: string | null;
}