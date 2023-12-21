import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MoodService } from "./mood.service";
import { MoodControllerBase } from "./base/mood.controller.base";

@swagger.ApiTags("moods")
@common.Controller("moods")
export class MoodController extends MoodControllerBase {
  constructor(
    protected readonly service: MoodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
