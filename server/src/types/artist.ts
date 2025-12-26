export type ArtistDetails = {
  id: string;
  name: string;
  popularity: number;
  followers: {
    total: number;
  };
  genres: string[];
  images: Array<{ url: string }>;
};