export type UserProfile = {
  id: string;
  display_name: string;
  followers: { total: number };
  images: { url: string };
}

export type topArtist = {
  items: Array<{
    id: string;
    followers: { total: number };
    name: string;
    images: Array<{ url: string }>;
  }>
}

export type topTrack = {
  items: Array<{
    id: string;
    name: string;
    duration_ms: number;
    album: {
      id: string;
      name: string;
      images: Array<{ url: string }>;
    };
    artists: Array<{
      id: string;
      name: string;
    }>;
  }>;
};

export type recentTracks = {
  items: Array<{
    track: {
      album: { 
        name: string;
        images: Array<{ url: string }>;
      },
      artists: Array<{
        id: string;
        name: string;
      }>,
      duration_ms: number;
      id: string;
      name: string;
    }
  }>;
};