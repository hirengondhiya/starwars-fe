import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addPeople } from "./peopleSlice";
import swapiApi from "../api/swapiApi";

export const fetchPeoplePageById = createAsyncThunk(
  "peoplePage/fetchPeoplePageById",
  async (params, { dispatch }) => {
    const resp = await swapiApi.get("people", { params });
    dispatch(addPeople({ people: resp.data.results }));
    const page = {
      ...params,
      ...resp.data,
      results: [...resp.data.results.map(({ name }) => name)],
    };
    return page;
  },
  {
    condition: (arg, { getState }) => {
      const page = getState().peoplePages.find(({ page }) => page === arg.page);
      // cancel api request if page is in store or is being fetched
      return !(
        page &&
        (page.requestStatus === "fulfilled" || page.requestStatus === "pending")
      );
    },
  }
);

const initialState = [];

export const peoplePageSlice = createSlice({
  name: "peoplePage",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPeoplePageById.pending]: (state, action) => {
      state.push({
        ...action.meta.arg,
        requestStatus: action.meta.requestStatus,
      });
    },
    [fetchPeoplePageById.fulfilled]: (state, action) => {
      const index = state.findIndex(
        ({ page }) => action.meta.arg.page === page
      );
      if (index > -1) {
        state[index] = {
          ...action.payload,
          requestStatus: action.meta.requestStatus,
        };
      }
    },
    [fetchPeoplePageById.rejected]: (state, action) => {
      const index = state.findIndex(
        ({ page }) => action.meta.arg.page === page
      );
      if (index > -1) {
        state[index] = {
          ...action.meta.arg,
          requestStatus: action.meta.requestStatus,
          errorMsg: action.error.message,
        };
      }
    },
  },
});

export default peoplePageSlice.reducer;
