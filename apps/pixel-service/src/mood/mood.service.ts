import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MoodServiceBase } from "./base/mood.service.base";

@Injectable()
export class MoodService extends MoodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
