import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class RegisterInput {
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
    password!: string;

    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    name!: string;
}

export { RegisterInput as RegisterInput };