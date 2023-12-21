import { Pixel } from "../pixel/Pixel";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  pixels?: Pixel | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
