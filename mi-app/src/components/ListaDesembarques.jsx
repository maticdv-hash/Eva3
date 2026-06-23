import FilaDesembarque from "./FilaDesembarque";

function ListaDesembarques({ desembarques, prioritarios, togglePrioritario }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Especie</th>
          <th>Embarcación</th>
          <th>Fecha</th>
          <th>Kilos</th>
          <th>Estado</th>
          <th>Prioritario</th>
        </tr>
      </thead>

      <tbody>
        {desembarques.map((d) => (
          <FilaDesembarque
            key={d.id}
            data={d}
            prioritarios={prioritarios}
            togglePrioritario={togglePrioritario}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ListaDesembarques;
