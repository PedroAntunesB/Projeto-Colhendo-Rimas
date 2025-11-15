import { useEffect, useState } from "react";
import { api } from "../../../api/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../common/Loading";
export default function Autor() {
  const [obras, setObras] = useState([]);
  const { autor } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function carregarObras() {
      try {
        const response = await api.get(`/${autor}`);
        setObras(response.data);
      } catch (error) {
        console.error("Erro ao carregar obras:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarObras();
  }, [autor]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h1>{autor}</h1>
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
    </>
  );
}
