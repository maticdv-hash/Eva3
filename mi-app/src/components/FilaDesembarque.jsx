function FilaDesembarque({ data, prioritarios, togglePrioritario }) {
  return (
    <tr>
      <td>{data.especie}</td>
      <td>{data.embarcacion}</td>
      <td>{data.fecha}</td>
      <td>{data.kilos}</td>
      <td>{data.estado}</td>

      <td>
        <button onClick={() => togglePrioritario(data.id)}>
          {prioritarios.includes(data.id) ? "⭐" : "☆"}
        </button>
      </td>
    </tr>
  );
}

export default FilaDesembarque;