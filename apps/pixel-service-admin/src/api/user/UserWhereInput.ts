import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PixelWhereUniqueInput } from "../pixel/PixelWhereUniqueInput";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  pixels?: PixelWhereUniqueInput;
  username?: StringFilter;
};
