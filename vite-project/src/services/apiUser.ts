import instance from "./api";
import { User } from "model/Auth.model";
import { FormValueRegister } from "model/Auth.model";

const Login = (user: User) => {
  return instance.post("/user/login", user);
};
const Register = (user: FormValueRegister) => {
  return instance.post("/user/register", user);
};
export { Login, Register };
