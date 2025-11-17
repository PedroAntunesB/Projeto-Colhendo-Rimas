import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import Loading from "../common/Loading";
import { Link } from "react-router-dom";
export default function DancasTradicionais() {
  const [dancas, setDancas] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function carregarDancas() {
      try {
        const response = await api.get(`/dancas/listar`);
        setDancas(response.data);
      } catch (error) {
        console.error("Erro ao carregar obras:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarDancas();
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {dancas.map((danca, index) => (
        <div key={index} className="divContainer">
          <h2>{danca}</h2>

          <button className="btAutor">
            <Link to={`/dancas-tradicionais/${danca}`} className="remove-link">
              Ver sobre...
            </Link>
          </button>
        </div>
      ))}
    </>
  );
}
