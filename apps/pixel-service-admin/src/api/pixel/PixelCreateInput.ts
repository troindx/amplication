import { MoodWhereUniqueInput } from "../mood/MoodWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PixelCreateInput = {
  mood?: MoodWhereUniqueInput | null;
  note?: string | null;
  user?: UserWhereUniqueInput | null;
  value?: number | null;
};
