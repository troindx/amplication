import { PixelCreateNestedManyWithoutMoodsInput } from "./PixelCreateNestedManyWithoutMoodsInput";

export type MoodCreateInput = {
  name: string;
  pixels?: PixelCreateNestedManyWithoutMoodsInput;
};
