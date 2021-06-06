import { PersonItem } from "./PersonItem";

export function PeopleTable({ peopleData }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
        </tr>
      </thead>
      <tbody>
        {peopleData.map(({ name, height, mass }) => (
          <PersonItem key={name} name={name} height={height} mass={mass} />
        ))}
      </tbody>
    </table>
  );
}
