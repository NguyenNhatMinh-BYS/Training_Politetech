import instance from "./api";
import { User } from "../model/Auth.model";

const login = (user: User) => {
  return instance.post("/user/login", user);
};
export { login };
