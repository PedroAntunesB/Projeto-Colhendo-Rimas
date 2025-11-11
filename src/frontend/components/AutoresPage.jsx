import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { Link } from "react-router-dom";

export function AutoresPage() {
  const [autores, setAutores] = useState([]);

  useEffect(() => {
    async function carregarAutores() {
      try {
        const response = await api.get("/autores");
        let autoresArr = [...new Set(response.data)];
        setAutores(autoresArr);
      } catch (error) {
        console.error("Erro ao carregar autores:", error);
      }
    }

    carregarAutores();
  }, []);

  return (
    <main>
      <div className="list-container">
        <h1>Nossos Principais Autores</h1>
        {autores.map((autor, index) => (
          <div key={index} className="divContainer">
            <h3>Autor(a): {autor}</h3>
            <button className="btAutor">
              <Link className="remove-link" to={`/autor/${autor}`}>
                Ver obras...
              </Link>
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
