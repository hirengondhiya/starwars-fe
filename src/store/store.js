import { configureStore } from "@reduxjs/toolkit";
import peoplePageReducer from "./peoplePageSlice";
import peopleReducer from "./peopleSlice";
import selectedPersonReducer from "./selectedPersonSlice";
import filmsReducer from "./filmsSlice";

export const store = configureStore({
  reducer: {
    peoplePages: peoplePageReducer,
    people: peopleReducer,
    selectedPerson: selectedPersonReducer,
    films: filmsReducer,
  },
});
