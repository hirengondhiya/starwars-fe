import { useSelector } from "react-redux";
import { selectPersonByName } from "../../store/peopleSlice";
export function PersonItem({ name }) {
  const { height, mass } = useSelector((state) =>
    selectPersonByName(state, name)
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{height}</td>
      <td>{mass}</td>
    </tr>
  );
}
