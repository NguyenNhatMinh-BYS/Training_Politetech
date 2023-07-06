import instance from "./api";
import { Notice } from "@/model/Auth.model";
export const notice = (data: Notice) => {
  let x = "",
    y = "";
  if (data.search_value) x = `search_value=${data.search_value}&`;
  if (data.page_size) y = `page_size=${data.page_size}&`;
  return instance.get(
    `/notice?${x}${y}page=${data.page}&user_id=867a7ae9-7783-4876-a8b6-11448b35770e&search_by=${data.search_by}`
  );
};
export const noticeDetail = (data: Notice) => {
  console.log(data);

  return instance.get(
    `/notice/${data.id}?search_value=${data.search_value}&search_by=${data.search_by}`
  );
};
export const other = (url: string) => {
  return instance.get(`${url}`);
};
