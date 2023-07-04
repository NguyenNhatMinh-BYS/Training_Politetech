import { createSlice } from "@reduxjs/toolkit";

import { dataUser } from "model/Auth.model";
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
export const dataUserSlice = createSlice({
  name: "dataUser",
  initialState,
  reducers: {
    getDataUser: (state, action) => {
      state = { ...action.payload };
    },
  },
});

export const { getDataUser } = dataUserSlice.actions;
export default dataUserSlice.reducer;
