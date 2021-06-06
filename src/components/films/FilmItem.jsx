import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilmById } from "../../store/filmsSlice";
import { fetchFilmById } from "../../store/filmsSlice";
export function FilmItem({ id }) {
  const dispatch = useDispatch();
  const film = useSelector((state) => selectFilmById(state, id));
  useEffect(() => {
    dispatch(fetchFilmById({ id }));
  }, [dispatch, id]);

  if (film) {
    return (
      <>
        {film.requestStatus === "pending" && <span>Loading film info...</span>}
        {film.requestStatus === "rejected" && (
          <p>Error loading film: {film.errorMsg}</p>
        )}
        {film && film.title && <span>{film.title}</span>}
      </>
    );
  }
  return null;
}
