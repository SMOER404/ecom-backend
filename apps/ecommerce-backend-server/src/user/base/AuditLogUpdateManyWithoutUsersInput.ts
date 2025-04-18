/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AuditLogWhereUniqueInput } from "../../auditLog/base/AuditLogWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AuditLogUpdateManyWithoutUsersInput {
  @Field(() => [AuditLogWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AuditLogWhereUniqueInput],
  })
  connect?: Array<AuditLogWhereUniqueInput>;

  @Field(() => [AuditLogWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AuditLogWhereUniqueInput],
  })
  disconnect?: Array<AuditLogWhereUniqueInput>;

  @Field(() => [AuditLogWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AuditLogWhereUniqueInput],
  })
  set?: Array<AuditLogWhereUniqueInput>;
}

export { AuditLogUpdateManyWithoutUsersInput as AuditLogUpdateManyWithoutUsersInput };
