import { configureStore } from "@reduxjs/toolkit";
import peoplePageReducer from "./peoplePageSlice";
import peopleReducer from "./peopleSlice";
import selectedPersonReducer from "./selectedPersonSlice";

export const store = configureStore({
  reducer: {
    peoplePages: peoplePageReducer,
    people: peopleReducer,
    selectedPerson: selectedPersonReducer,
  },
});
