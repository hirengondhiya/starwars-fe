import { configureStore } from "@reduxjs/toolkit";
import peoplePageReducer from "./peoplePageSlice";
import peopleReducer from "./peopleSlice";

export const store = configureStore({
  reducer: {
    peoplePages: peoplePageReducer,
    people: peopleReducer,
  },
});
