import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const peopleAdapter = createEntityAdapter({
  selectId: (person) => person.name,
});

const peopleSlice = createSlice({
  name: "people",
  initialState: peopleAdapter.getInitialState(),
  reducers: {
    addPeople(state, action) {
      peopleAdapter.addMany(state, action.payload.people);
    },
  },
});

export const { addPerson, addPeople } = peopleSlice.actions;

export const { selectById: selectPersonByName } = peopleAdapter.getSelectors(
  (state) => {
    return state.people;
  }
);

export default peopleSlice.reducer;
