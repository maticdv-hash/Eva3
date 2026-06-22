function FilaDesembarque({ data }) {
  return (
    <tr>
      <td>{data.especie}</td>
      <td>{data.embarcacion}</td>
      <td>{data.fecha}</td>
      <td>{data.kilos}</td>
      <td>{data.estado}</td>
    </tr>
  );
}

export default FilaDesembarque;