export type dataUser = {
  created_at?: string;
  email: string;
  full_name: string;
  id: string;
  phone_number: string;
  role: string;
  token?: string;
  updated_at: string;
  username: string;
};
export type User = {
  username: string;
  password: string;
};
export interface FormValueRegister {
  full_name: string;
  username: string;
  password: string;
  confirmPassword: string;
  phone_number: string;
  email: string;
}
export type DataNotice = {
  index?: number;
  author?: string;
  content?: string;
  created_at?: string;
  id?: string;
  title?: string;
  updated_at?: string;
  user_id?: string;
  previous?: string;
  next?: string;
};
export interface Notice {
  id?: string;
  page_size?: string;
  page?: string;
  user_id?: string;
  search_value?: string;
  search_by?: string;
}
