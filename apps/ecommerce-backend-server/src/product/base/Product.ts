/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Brand } from "../../brand/base/Brand";

import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsDate,
  IsString,
  MaxLength,
  IsBoolean,
  IsNumber,
  Min,
  Max,
} from "class-validator";

import { Type } from "class-transformer";
import { CartItem } from "../../cartItem/base/CartItem";
import { Category } from "../../category/base/Category";
import { EnumProductColors } from "./EnumProductColors";
import { EnumProductImages } from "./EnumProductImages";
import { OrderItem } from "../../orderItem/base/OrderItem";
import { Review } from "../../review/base/Review";
import { EnumProductSizes } from "./EnumProductSizes";
import { Wishlist } from "../../wishlist/base/Wishlist";

@ObjectType()
class Product {
  @ApiProperty({
    required: false,
    type: () => Brand,
  })
  @ValidateNested()
  @Type(() => Brand)
  @IsOptional()
  brand?: Brand | null;

  @ApiProperty({
    required: false,
    type: () => CartItem,
  })
  @ValidateNested()
  @Type(() => CartItem)
  @IsOptional()
  cartItem?: CartItem | null;

  @ApiProperty({
    required: false,
    type: () => Category,
  })
  @ValidateNested()
  @Type(() => Category)
  @IsOptional()
  category?: Category | null;

  @ApiProperty({
    required: false,
    enum: EnumProductColors,
    isArray: true,
  })
  @IsEnum(EnumProductColors, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumProductColors], {
    nullable: true,
  })
  colors?: Array<"Option1">;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

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
  description!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    enum: EnumProductImages,
    isArray: true,
  })
  @IsEnum(EnumProductImages, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumProductImages], {
    nullable: true,
  })
  images?: Array<"Option1">;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  inStock!: boolean | null;

  @ApiProperty({
    required: false,
    type: () => OrderItem,
  })
  @ValidateNested()
  @Type(() => OrderItem)
  @IsOptional()
  orderItem?: OrderItem | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price!: number | null;

  @ApiProperty({
    required: false,
    type: () => [Review],
  })
  @ValidateNested()
  @Type(() => Review)
  @IsOptional()
  reviews?: Array<Review>;

  @ApiProperty({
    required: false,
    enum: EnumProductSizes,
    isArray: true,
  })
  @IsEnum(EnumProductSizes, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumProductSizes], {
    nullable: true,
  })
  sizes?: Array<"Option1">;

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
  title!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Wishlist],
  })
  @ValidateNested()
  @Type(() => Wishlist)
  @IsOptional()
  wishlists?: Array<Wishlist>;
}

export { Product as Product };
