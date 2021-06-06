import { useSelector } from "react-redux";
import { selectPersonByName } from "../../store/peopleSlice";

export function PersonDetails({ name }) {
  const { birth_year, gender } = useSelector((state) =>
    selectPersonByName(state, name)
  );
  return (
    <div>
      <p>Name: {name}</p>
      <p>Birth Year: {birth_year}</p>
      <p>Gender: {gender}</p>
    </div>
  );
}
