import { Injectable } from "@nestjs/common";
import { LoginInput } from "./LoginInput";
import { AuthResponse } from "./AuthResponse";
import { MeResponse } from "./MeResponse";
import { RegisterInput } from "./RegisterInput";

@Injectable()
export class AuthenticationService {
  constructor() {}
  async Login(args: LoginInput): Promise<AuthResponse> {
    throw new Error("Not implemented");
  }
  async Me(args: MeResponse): Promise<MeResponse> {
    throw new Error("Not implemented");
  }
  async Register(args: RegisterInput): Promise<AuthResponse> {
    throw new Error("Not implemented");
  }
}
