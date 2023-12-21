import { MoodWhereInput } from "./MoodWhereInput";
import { MoodOrderByInput } from "./MoodOrderByInput";

export type MoodFindManyArgs = {
  where?: MoodWhereInput;
  orderBy?: Array<MoodOrderByInput>;
  skip?: number;
  take?: number;
};
