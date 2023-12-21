import { StringFilter } from "../../util/StringFilter";
import { MoodWhereUniqueInput } from "../mood/MoodWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PixelWhereInput = {
  id?: StringFilter;
  mood?: MoodWhereUniqueInput;
  note?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  value?: IntNullableFilter;
};
