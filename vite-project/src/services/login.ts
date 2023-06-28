import instance from "./api";
interface User {
  username: string;
  password: string;
}
const login = (user: User) => {
  return instance.post("/user/login", user);
};
export { login };
