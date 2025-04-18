import { User } from "../user/User";

export type Cart = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  users?: Array<User>;
};
