import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MoodModuleBase } from "./base/mood.module.base";
import { MoodService } from "./mood.service";
import { MoodController } from "./mood.controller";
import { MoodResolver } from "./mood.resolver";

@Module({
  imports: [MoodModuleBase, forwardRef(() => AuthModule)],
  controllers: [MoodController],
  providers: [MoodService, MoodResolver],
  exports: [MoodService],
})
export class MoodModule {}
