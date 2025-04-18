/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AuditLogUpdateManyWithoutUsersInput } from "./AuditLogUpdateManyWithoutUsersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { CartWhereUniqueInput } from "../../cart/base/CartWhereUniqueInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { ReturnRequestUpdateManyWithoutUsersInput } from "./ReturnRequestUpdateManyWithoutUsersInput";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";
import { EnumUserRole } from "./EnumUserRole";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { SupportTicketUpdateManyWithoutUsersInput } from "./SupportTicketUpdateManyWithoutUsersInput";
import { WishlistWhereUniqueInput } from "../../wishlist/base/WishlistWhereUniqueInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AuditLogUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AuditLogUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AuditLogUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  auditLogs?: AuditLogUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => CartWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CartWhereUniqueInput)
  @IsOptional()
  @Field(() => CartWhereUniqueInput, {
    nullable: true,
  })
  cart?: CartWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  googleId?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => NotificationUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => NotificationUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => NotificationUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  notifications?: NotificationUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  order?: OrderWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: () => ReturnRequestUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ReturnRequestUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ReturnRequestUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  returnRequests?: ReturnRequestUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ReviewUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ReviewUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ReviewUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  reviews?: ReviewUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    enum: EnumUserRole,
  })
  @IsEnum(EnumUserRole)
  @IsOptional()
  @Field(() => EnumUserRole, {
    nullable: true,
  })
  role?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => SupportTicketUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => SupportTicketUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => SupportTicketUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  supportTickets?: SupportTicketUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    required: false,
    type: () => WishlistWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WishlistWhereUniqueInput)
  @IsOptional()
  @Field(() => WishlistWhereUniqueInput, {
    nullable: true,
  })
  wishlist?: WishlistWhereUniqueInput | null;
}

export { UserUpdateInput as UserUpdateInput };
