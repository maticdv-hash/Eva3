import { useEffect, useState } from "react";
import ListaDesembarques from "./components/ListaDesembarques";

function App() {
  const [desembarques, setDesembarques] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtro, setFiltro] = useState("");
  const [textoBusqueda, setTextoBusqueda] = useState("");

  const [prioritarios, setPrioritarios] = useState(() => {
    const guardados = localStorage.getItem("prioritarios");
    return guardados ? JSON.parse(guardados) : [];
  });

  const API_URL = import.meta.env.VITE_API_URL;

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

  useEffect(() => {
    localStorage.setItem("prioritarios", JSON.stringify(prioritarios));
  }, [prioritarios]);

  const togglePrioritario = (id) => {
    if (prioritarios.includes(id)) {
      setPrioritarios(prioritarios.filter((p) => p !== id));
    } else {
      setPrioritarios([...prioritarios, id]);
    }
  };

  const texto = filtro.toLowerCase().trim();

  const desembarquesFiltrados =
    texto === ""
      ? desembarques
      : texto.length < 2
      ? []
      : desembarques.filter((d) =>
          d.especie.toLowerCase().includes(texto) ||
          d.estado.toLowerCase().includes(texto)
        );

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1>Panel de Desembarques</h1>

      <div className="buscador">
        <input
          type="text"
          placeholder="Filtrar por especie o estado"
          value={textoBusqueda}
          onChange={(e) => setTextoBusqueda(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setFiltro(textoBusqueda);
            }
          }}
        />
      </div>

      {filtro !== "" && texto.length < 2 && (
        <p>Ingrese al menos 2 caracteres</p>
      )}

      {filtro !== "" && texto.length >= 2 && desembarquesFiltrados.length === 0 && (
        <p>No se encontraron resultados</p>
      )}

      {desembarquesFiltrados.length > 0 && (
        <ListaDesembarques
          desembarques={desembarquesFiltrados}
          prioritarios={prioritarios}
          togglePrioritario={togglePrioritario}
        />
      )}
    </div>
  );
}

export default App;