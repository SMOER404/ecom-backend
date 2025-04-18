import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class MeResponse {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    email!: string;

    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    name!: string;

    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    role!: string;
}

export { MeResponse as MeResponse };