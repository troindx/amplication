import { Mood } from "../mood/Mood";
import { User } from "../user/User";

export type Pixel = {
  createdAt: Date;
  id: string;
  mood?: Mood | null;
  note: string | null;
  updatedAt: Date;
  user?: User | null;
  value: number | null;
};
