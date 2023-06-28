import { createSlice, current } from "@reduxjs/toolkit";
import { log } from "console";
interface dataUser {
  created_at: string;
  email: string;
  full_name: string;
  id: string;
  phone_number: string;
  role: string;
  token: string;
  updated_at: string;
  username: string;
}
let initialState: dataUser = {
  created_at: "",
  email: "",
  full_name: "",
  id: "",
  phone_number: "",
  role: "",
  token: "",
  updated_at: "",
  username: "",
};
export const DataUserSlice = createSlice({
  name: "dataUser",
  initialState,
  reducers: {
    getDataUser: (state, action) => {
      let test = { ...action.payload };
      state = { ...action.payload };
      console.log(test);
    },
  },
});

export const { getDataUser } = DataUserSlice.actions;
export default DataUserSlice.reducer;
