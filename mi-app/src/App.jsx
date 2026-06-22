import ListaDesembarques from "./components/ListaDesembarques";

function App() {
  const datos = [
    {
      id: 1,
      especie: "Jurel",
      embarcacion: "Don Lorenzo",
      fecha: "2026-06-15",
      kilos: 12450,
      estado: "procesado",
    },
  ];

  return (
    <div>
      <h1>Panel de Desembarques</h1>
      <ListaDesembarques desembarques={datos} />
    </div>
  );
}

export default App;