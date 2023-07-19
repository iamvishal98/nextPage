import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./Slice/AppSlice";
export const store = configureStore({
  reducer: {
    app: AppReducer,
  },
});
