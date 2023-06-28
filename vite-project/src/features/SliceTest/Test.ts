import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "value",
};
export const SliceTest = createSlice({
  name: "test",
  initialState,
  reducers: {
    getIdea: (state) => {
      console.log("1234");
    },
  },
});

export const { getIdea } = SliceTest.actions;
export default SliceTest.reducer;
