import { configureStore } from "@reduxjs/toolkit";
import testReducer from "../features/SliceTest/Test";
import dataUserReducer from "../features/DataUserSlice/DataUserSlice.ts";
import { combineReducers } from "redux";
import { authReducer } from "../features/DataUserSlice/authSlice.ts";
const rootReducer = combineReducers({
  dataUser: dataUserReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
