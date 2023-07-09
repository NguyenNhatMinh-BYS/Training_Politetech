import { campaigngApi } from "@/model/Auth.model";
import instance from "./api";
export const campaign = (data: campaigngApi) => {
  return instance.get(
    `/campaign?search_by=title&search_value=${data.search_value}&page_size=${data.page_size}&page=${data.page}`
  );
};
export const campaignDetail = (data: campaigngApi) => {
  return instance.get(`/campaign/${data.id}`);
};
