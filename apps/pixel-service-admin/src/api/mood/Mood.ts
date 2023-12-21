import { Pixel } from "../pixel/Pixel";

export type Mood = {
  createdAt: Date;
  id: string;
  name: string;
  pixels?: Array<Pixel>;
  updatedAt: Date;
};
