import { useEffect, useState } from "react";
import ListaDesembarques from "./components/ListaDesembarques";

function App() {
  const [desembarques, setDesembarques] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Panel de Desembarques</h1>

      <ListaDesembarques desembarques={desembarques} />
    </div>
  );
}

export default App;