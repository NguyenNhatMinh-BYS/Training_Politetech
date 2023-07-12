import { ContentApi } from "@/model/Auth.model";
import instance from "./api";
const Config = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const content = (data: ContentApi) => {
  console.log(data);

  return instance.get(
    `/content?page_size=${data.page_size}&page=${data.page}&user_id=c1c3255e-247a-4c39-96ab-b7f65903b7ba`
  );
};
export const putContent = (data: ContentApi, token: string) => {
  console.log(data);

  return instance.put(`/content`, data, Config(token));
};

export const delContent = (data: any, token: string) => {
  console.log({ data });

  return instance.delete(`/content`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { ids: data },
  });
};

export const postContent = (data: ContentApi, token: string) => {
  return instance.post(`/content`, data, Config(token));
};
