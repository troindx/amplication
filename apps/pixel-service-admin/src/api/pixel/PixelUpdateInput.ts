import { MoodWhereUniqueInput } from "../mood/MoodWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PixelUpdateInput = {
  mood?: MoodWhereUniqueInput | null;
  note?: string | null;
  user?: UserWhereUniqueInput | null;
  value?: number | null;
};
