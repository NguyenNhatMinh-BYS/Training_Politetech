import { ContentApi } from "@/model/Auth.model";
import instance from "./api";

export const content = (data: ContentApi) => {
  return instance.get(
    `/content?page_size=${data.page_size}&page=${data.page}&user_id=c1c3255e-247a-4c39-96ab-b7f65903b7ba`
  );
};
