import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const selectedPersonSlice = createSlice({
  name: "selectedPerson",
  initialState,
  reducers: {
    selectPerson: (state, action) => {
      return { ...action.payload };
    },
  },
});

export const { selectPerson } = selectedPersonSlice.actions;

export default selectedPersonSlice.reducer;
