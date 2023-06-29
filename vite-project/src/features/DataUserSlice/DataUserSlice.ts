import { createSlice, current } from "@reduxjs/toolkit";

import { dataUser } from "../../model/Auth.model";
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
      state = { ...action.payload };
    },
  },
});

export const { getDataUser } = DataUserSlice.actions;
export default DataUserSlice.reducer;
