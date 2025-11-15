import { useEffect, useState } from "react";
import { api } from "../../../api/api";
import { Link } from "react-router-dom";
import Loading from "../common/Loading";
export default function Autores() {
  const [autores, setAutores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarAutores() {
      try {
        const response = await api.get("/autores");
        let autoresArr = [...new Set(response.data)];
        setAutores(autoresArr);
      } catch (error) {
        console.error("Erro ao carregar autores:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarAutores();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
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
    </>
  );
}
