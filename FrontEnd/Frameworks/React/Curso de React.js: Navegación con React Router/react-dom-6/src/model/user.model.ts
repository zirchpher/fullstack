import { ROLES } from "./roles.enum";

export interface User {
  username: string;
  role: ROLES;
}
