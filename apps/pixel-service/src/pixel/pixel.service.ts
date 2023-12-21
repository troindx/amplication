import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PixelServiceBase } from "./base/pixel.service.base";

@Injectable()
export class PixelService extends PixelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
