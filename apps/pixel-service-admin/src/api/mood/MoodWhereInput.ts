import { StringFilter } from "../../util/StringFilter";
import { PixelListRelationFilter } from "../pixel/PixelListRelationFilter";

export type MoodWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  pixels?: PixelListRelationFilter;
};
