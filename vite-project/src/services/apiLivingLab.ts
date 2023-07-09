import { livingLabeApi } from "@/model/Auth.model";
import instance from "./api";
export const livingLab = (data: livingLabeApi) => {
  let x = "",
    y = "";
  if (data.search_value) x = `search_value=${data.search_value}&`;
  if (data.page_size) y = `page_size=${data.page_size}&`;
  return instance.get(
    `/living-lab?${y}&page=${data.page}&${x}search_by=${data.search_by}&user_id=c1c3255e-247a-4c39-96ab-b7f65903b7ba`
  );
};
export const livingLabDetail = (data: livingLabeApi) => {
  console.log(data);

  return instance.get(
    `/living-lab/${data.id}?search_by=${data.search_by}&search_value=${data.search_value}`
  );
};
