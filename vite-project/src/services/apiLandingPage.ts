import instance from "./api";
export const notice = () => {
  return instance.get("/notice");
};
export const other = (url: string) => {
  return instance.get(`${url}`);
};
