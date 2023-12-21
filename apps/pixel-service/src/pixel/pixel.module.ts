import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PixelModuleBase } from "./base/pixel.module.base";
import { PixelService } from "./pixel.service";
import { PixelController } from "./pixel.controller";
import { PixelResolver } from "./pixel.resolver";

@Module({
  imports: [PixelModuleBase, forwardRef(() => AuthModule)],
  controllers: [PixelController],
  providers: [PixelService, PixelResolver],
  exports: [PixelService],
})
export class PixelModule {}
