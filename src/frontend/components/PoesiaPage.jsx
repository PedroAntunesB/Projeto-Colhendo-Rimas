import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { useParams } from "react-router-dom";
import { DowloaderClass } from "../utils/Dowloader";
export function PoesiaPage() {
  const [obra, setObra] = useState({
    titulo: "",
    autor: "",
    conteudo: "",
  });
  const { poesia } = useParams();
  useEffect(() => {
    async function carregarObras() {
      try {
        const response = await api.get(`/poesia/${poesia}`);
        setObra(response.data);
      } catch (error) {
        console.error("Erro ao carregar obra:", error);
      }
    }

    carregarObras();
  }, [obra]);
  return (
    <div className="conteudoPoesia">
      <div className="container">
        <h2>{obra.titulo}</h2>
        <h3>{obra.autor}</h3>
        <p>{obra.conteudo}</p>
        <button
          className="download-btn"
          onClick={() => {
            const dowloader = new DowloaderClass(obra);
            dowloader.textDowload();
          }}
        >
          Botão para download
        </button>
      </div>
    </div>
  );
}
