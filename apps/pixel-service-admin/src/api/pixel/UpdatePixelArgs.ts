import { PixelWhereUniqueInput } from "./PixelWhereUniqueInput";
import { PixelUpdateInput } from "./PixelUpdateInput";

export type UpdatePixelArgs = {
  where: PixelWhereUniqueInput;
  data: PixelUpdateInput;
};
