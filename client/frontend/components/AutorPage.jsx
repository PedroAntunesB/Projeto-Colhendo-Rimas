import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function AutorPage() {
  const [obras, setObras] = useState([]);
  const { autor } = useParams();
  useEffect(() => {
    async function carregarObras() {
      try {
        const response = await api.get(`/${autor}`);
        setObras(response.data);
      } catch (error) {
        console.error("Erro ao carregar obras:", error);
      }
    }

    carregarObras();
  }, [autor]);

  return (
    <main>
      <h1>{autor}</h1>

      <div className="list-container">
        {obras.map((obra, index) => (
          <div key={index} className="divContainer">
            <h3>Poesia: {obra.titulo}</h3>
            <button className="btAutor">
              <Link className="remove-link" to={`poesia/${obra.titulo}`}>
                Ler obra...
              </Link>
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
