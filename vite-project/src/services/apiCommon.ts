import instance from "./api";
export const upLoadImg = (img: any) => {
  

  return instance.post(`/assets`, img);
};
