import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../api/api";
import Loading from "../common/Loading";
export default function Danca() {
  const { danca } = useParams();
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState({});
  useEffect(() => {
    async function carregarDanca() {
      try {
        const response = await api.get(`danca/${danca}`);
        setValues(response.data);
      } catch (error) {
        console.log("Deu um erro", error);
      } finally {
        setLoading(false);
      }
    }

    carregarDanca();
  });

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <h1>{danca}</h1>
      <div className="divContainer">
        <h2>Origem: </h2>
        {values.origem}
      </div>
      <div className="divContainer">
        <h2>Informações sobre a dança: </h2>
        {values.informacao}
      </div>
    </>
  );
}
