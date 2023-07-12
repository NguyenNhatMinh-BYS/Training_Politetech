import instance from "./api";
import { DataNotice, Notice, PostNotice } from "@/model/Auth.model";
const Config = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
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

  let x = "",
    y = "";
  if (data.search_by) {
    x = `search_by=${data.search_by}`;
  }
  if (data.search_value) {
    y = `search_value=${data.search_value}&`;
  }

  return instance.get(`/notice/${data.id}?${y}${x}`);
};

export const putNotice = (data: DataNotice, token: string) => {
  console.log(data);

  return instance.put(`/notice`, data, Config(token));
};

export const delNotice = (data: any, token: string) => {
  console.log({ data });

  return instance.delete(`/notice`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { ids: data },
  });
};

export const postNotice = (data: PostNotice, token: string) => {
  return instance.post(`/notice`, data, Config(token));
};
export const other = (url: string) => {
  return instance.get(`${url}`);
};
