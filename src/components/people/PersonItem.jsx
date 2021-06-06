import { useSelector, useDispatch } from "react-redux";
import { selectPersonByName } from "../../store/peopleSlice";
import { selectPerson } from "../../store/selectedPersonSlice";
export function PersonItem({ name }) {
  const { height, mass } = useSelector((state) =>
    selectPersonByName(state, name)
  );
  const dispatch = useDispatch();
  function handleSelectPerson() {
    dispatch(selectPerson({ name }));
  }
  return (
    <tr onClick={handleSelectPerson}>
      <td>{name}</td>
      <td>{height}</td>
      <td>{mass}</td>
    </tr>
  );
}
