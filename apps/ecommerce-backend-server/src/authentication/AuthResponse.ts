import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class AuthResponse {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    accessToken!: string;
}

export { AuthResponse as AuthResponse };