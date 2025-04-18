import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthenticationService } from "./authentication.service";
import { LoginInput } from "./LoginInput";
import { AuthResponse } from "./AuthResponse";
import { MeResponse } from "./MeResponse";
import { RegisterInput } from "./RegisterInput";

@swagger.ApiTags("authentications")
@common.Controller("authentications")
export class AuthenticationController {
  constructor(protected readonly service: AuthenticationService) {}

  @common.Post("/auth/login")
  @swagger.ApiOkResponse({
    type: AuthResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Login(
    @common.Body()
    body: LoginInput
  ): Promise<AuthResponse> {
        return this.service.Login(body);
      }

  @common.Get("/auth/me")
  @swagger.ApiOkResponse({
    type: MeResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Me(
    @common.Body()
    body: MeResponse
  ): Promise<MeResponse> {
        return this.service.Me(body);
      }

  @common.Post("/auth/register")
  @swagger.ApiOkResponse({
    type: AuthResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Register(
    @common.Body()
    body: RegisterInput
  ): Promise<AuthResponse> {
        return this.service.Register(body);
      }
}
