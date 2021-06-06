export function PersonItem({ name, height, mass }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{height}</td>
      <td>{mass}</td>
    </tr>
  );
}
