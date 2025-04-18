import { UserCreateNestedManyWithoutCartsInput } from "./UserCreateNestedManyWithoutCartsInput";

export type CartCreateInput = {
  users?: UserCreateNestedManyWithoutCartsInput;
};
