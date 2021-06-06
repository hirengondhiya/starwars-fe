import { useSelector } from "react-redux";
import { selectPersonByName } from "../../store/peopleSlice";
import { FilmItem } from "../films/FilmItem";

export function PersonDetails({ name }) {
  const { birth_year, gender, films } = useSelector((state) =>
    selectPersonByName(state, name)
  );
  return (
    <div>
      <p>Name: {name}</p>
      <p>Birth Year: {birth_year}</p>
      <p>Gender: {gender}</p>
      {films && films.length > 0 && (
        <div>
          Films:{" "}
          {films.map((film, index) => (
            <div key={film}>
              <FilmItem id={film} />
              {index < films.length - 1 && ", "}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
