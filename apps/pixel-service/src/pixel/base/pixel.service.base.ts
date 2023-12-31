/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Pixel, // @ts-ignore
  Mood, // @ts-ignore
  User,
} from "@prisma/client";

export class PixelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PixelCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.PixelCountArgs>
  ): Promise<number> {
    return this.prisma.pixel.count(args);
  }

  async pixels<T extends Prisma.PixelFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PixelFindManyArgs>
  ): Promise<Pixel[]> {
    return this.prisma.pixel.findMany(args);
  }
  async pixel<T extends Prisma.PixelFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PixelFindUniqueArgs>
  ): Promise<Pixel | null> {
    return this.prisma.pixel.findUnique(args);
  }
  async createPixel<T extends Prisma.PixelCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PixelCreateArgs>
  ): Promise<Pixel> {
    return this.prisma.pixel.create<T>(args);
  }
  async updatePixel<T extends Prisma.PixelUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PixelUpdateArgs>
  ): Promise<Pixel> {
    return this.prisma.pixel.update<T>(args);
  }
  async deletePixel<T extends Prisma.PixelDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PixelDeleteArgs>
  ): Promise<Pixel> {
    return this.prisma.pixel.delete(args);
  }

  async getMood(parentId: string): Promise<Mood | null> {
    return this.prisma.pixel
      .findUnique({
        where: { id: parentId },
      })
      .mood();
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.pixel
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
