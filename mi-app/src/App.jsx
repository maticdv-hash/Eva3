import { useEffect, useState } from "react";
import ListaDesembarques from "./components/ListaDesembarques";

function App() {
  const [desembarques, setDesembarques] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtro, setFiltro] = useState("");

  const API_URL = "http://localhost:3001/desembarques";

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const res = await fetch(API_URL);

        if (!res.ok) {
          throw new Error("Error al obtener datos");
        }

        const data = await res.json();
        setDesembarques(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    obtenerDatos();
  }, []);

      const texto = filtro.toLowerCase().trim();
      const desembarquesFiltrados =
        texto === ""
          ? desembarques
          : desembarques.filter((d) =>
              d.especie.toLowerCase().includes(texto) ||
              d.estado.toLowerCase().includes(texto)
        );

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Panel de Desembarques</h1>

      <input
        type="text"
        placeholder="Filtrar por especie o estado"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      {desembarquesFiltrados.length === 0 && (
        <p>No se encontraron resultados</p>
      )}

      {desembarquesFiltrados.length > 0 && (
        <ListaDesembarques desembarques={desembarquesFiltrados} />
      )}

    </div>
  );
}

export default App;