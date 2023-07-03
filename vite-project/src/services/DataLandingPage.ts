import instance from "./api";
export const notice = () => {
  return instance.get(
    "/notice?search_value=title&page_size=3&user_id=867a7ae9-7783-4876-a8b6-11448b35770e"
  );
};
export const other = (url: string) => {
  return instance.get(`${url}`);
};
