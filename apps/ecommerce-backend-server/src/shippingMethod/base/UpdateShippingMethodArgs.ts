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
import { ShippingMethodWhereUniqueInput } from "./ShippingMethodWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ShippingMethodUpdateInput } from "./ShippingMethodUpdateInput";

@ArgsType()
class UpdateShippingMethodArgs {
  @ApiProperty({
    required: true,
    type: () => ShippingMethodWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ShippingMethodWhereUniqueInput)
  @Field(() => ShippingMethodWhereUniqueInput, { nullable: false })
  where!: ShippingMethodWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ShippingMethodUpdateInput,
  })
  @ValidateNested()
  @Type(() => ShippingMethodUpdateInput)
  @Field(() => ShippingMethodUpdateInput, { nullable: false })
  data!: ShippingMethodUpdateInput;
}

export { UpdateShippingMethodArgs as UpdateShippingMethodArgs };
