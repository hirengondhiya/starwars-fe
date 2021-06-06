import { configureStore } from "@reduxjs/toolkit";
import peoplePageReducer from "./peoplePageSlice";

export const store = configureStore({
  reducer: {
    peoplePages: peoplePageReducer,
  },
});
