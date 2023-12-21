import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PixelService } from "./pixel.service";
import { PixelControllerBase } from "./base/pixel.controller.base";

@swagger.ApiTags("pixels")
@common.Controller("pixels")
export class PixelController extends PixelControllerBase {
  constructor(
    protected readonly service: PixelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
