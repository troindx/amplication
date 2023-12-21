import { PixelWhereInput } from "./PixelWhereInput";
import { PixelOrderByInput } from "./PixelOrderByInput";

export type PixelFindManyArgs = {
  where?: PixelWhereInput;
  orderBy?: Array<PixelOrderByInput>;
  skip?: number;
  take?: number;
};
