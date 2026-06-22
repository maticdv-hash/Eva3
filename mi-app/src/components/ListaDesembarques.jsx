import FilaDesembarque from "./FilaDesembarque";

function ListaDesembarques({ desembarques }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Especie</th>
          <th>Embarcación</th>
          <th>Fecha</th>
          <th>Kilos</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {desembarques.map((d) => (
          <FilaDesembarque key={d.id} data={d} />
        ))}
      </tbody>
    </table>
  );
}

export default ListaDesembarques;
