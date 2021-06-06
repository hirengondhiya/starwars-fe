import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import swapiApi from "../api/swapiApi";

const filmsAdapter = createEntityAdapter({
  selectId: (film) => film.id,
});
export const { selectById: selectFilmById } = filmsAdapter.getSelectors(
  (state) => {
    return state.films;
  }
);

export const fetchFilmById = createAsyncThunk(
  "films/fetchFilmById",
  async (params) => {
    const resp = await swapiApi.get(`films/${params.id}`);
    const film = { ...params, ...resp.data };
    return film;
  },
  {
    condition: (arg, { getState }) => {
      const film = selectFilmById(getState(), arg.id);
      // cancel api request if film is in store or is being fetched
      return !(
        film &&
        (film.requestStatus === "fulfilled" || film.requestStatus === "pending")
      );
    },
  }
);
const filmsSlice = createSlice({
  name: "films",
  initialState: filmsAdapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [fetchFilmById.pending]: (state, action) => {
      filmsAdapter.upsertOne(state, {
        ...action.meta.arg,
        requestStatus: action.meta.requestStatus,
      });
    },
    [fetchFilmById.fulfilled]: (state, action) => {
      filmsAdapter.upsertOne(state, {
        ...action.payload,
        requestStatus: action.meta.requestStatus,
      });
    },
    [fetchFilmById.rejected]: (state, action) => {
      filmsAdapter.upsertOne(state, {
        ...action.meta.arg,
        requestStatus: action.meta.requestStatus,
        errorMsg: action.error.message,
      });
    },
  },
});

export default filmsSlice.reducer;
