import { PixelWhereUniqueInput } from "../pixel/PixelWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  pixels?: PixelWhereUniqueInput | null;
  roles: InputJsonValue;
  username: string;
};
