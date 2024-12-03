export interface VinylRecord {
  id: string;
  title: string;
  coverImage: string;
  artist: string;
  releaseYear: number;
  genre: string;
  recordLabel: string;
  format: string;
  trackList: string[];
  price: number;
  stock: number;
}
