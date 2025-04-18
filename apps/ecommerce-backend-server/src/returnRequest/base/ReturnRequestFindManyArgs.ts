/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReturnRequestWhereInput } from "./ReturnRequestWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ReturnRequestOrderByInput } from "./ReturnRequestOrderByInput";

@ArgsType()
class ReturnRequestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ReturnRequestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ReturnRequestWhereInput, { nullable: true })
  @Type(() => ReturnRequestWhereInput)
  where?: ReturnRequestWhereInput;

  @ApiProperty({
    required: false,
    type: [ReturnRequestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ReturnRequestOrderByInput], { nullable: true })
  @Type(() => ReturnRequestOrderByInput)
  orderBy?: Array<ReturnRequestOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ReturnRequestFindManyArgs as ReturnRequestFindManyArgs };
