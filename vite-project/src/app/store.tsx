import { configureStore } from "@reduxjs/toolkit";

import dataUserReducer from "features/DataUserSlice/dataUserSlice.ts";
import { combineReducers } from "redux";
import { authReducer } from "features/DataUserSlice/authSlice.ts";
const rootReducer = combineReducers({
  dataUser: dataUserReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
