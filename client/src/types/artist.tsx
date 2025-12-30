export type TopArtist = {
  artist_id: string;
  artist_follower_total: number;
  artist_name: string;
  artist_images: string;
};

export type TopArtistSummary = TopArtist[];

export type ArtistSummary = {
  artist_id: string;
  artist_name: string;
  artist_popularity: number;
  artist_followers: number;
  artist_genres: string[];
  artist_image: string | null;
};