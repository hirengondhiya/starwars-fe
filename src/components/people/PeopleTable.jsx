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
        {peopleData.map((name) => (
          <PersonItem key={name} name={name} />
        ))}
      </tbody>
    </table>
  );
}
