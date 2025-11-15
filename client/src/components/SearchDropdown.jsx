import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchDropdown() {
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState([]);

  const lista = [
    "DOS QUE SE FORAM",
    "O LIVRO DO CORAÇÃO",
    "CRUCIFICADO",
    "TRINDADE",
    "SE AS ÁGUAS ME CHAMAREM",
    "PARA ONDE FORAM AS BORBOLETAS",
    "ODE À MORTE",
    "UM ROSTO EMOLDURADO NA PAREDE",
    "OS CAVEIRAS E O ENGODO DA MORTE",
    "QUE BENDITOS SEJAM OS VERSOS!",
    "ÚLTIMOS CARRETEIROS",
    "ANTES DE NÓS",
    "AO APONTAR O DEDO",
    "QUANTO VALE A VIDA DE UM SOLDADO RASO?",
  ];

  const handleChange = (e) => {
    const value = e.target.value.toUpperCase();
    setInput(value);

    if (value.trim() === "") {
      setFiltered([]);
      return;
    }

    const results = lista.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(results);
  };

  return (
    <div style={{ position: "relative", width: "250px" }}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Pesquisar..."
        className="inputPesquisar"
      />

      <button
        className="btPesquisar"
        onClick={() => {
          if (!lista.includes(input.toUpperCase())) {
            alert("Poesia não encontrada!");
          }
        }}
      >
        <Link
          className="remove-link"
          to={lista.includes(input.toUpperCase()) ? `/pesquisar/${input}` : "#"}
        >
          🔍
        </Link>
      </button>

      {input.trim() !== "" && (
        <ul
          style={{
            listStyle: "none",
            position: "absolute",
            top: "40px",
            left: "0",
            width: "100%",
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "6px",
            padding: "5px 0",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            zIndex: 10,
          }}
        >
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setInput(item);
                  setFiltered([]);
                }}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee",
                }}
              >
                {item}
              </li>
            ))
          ) : (
            <li
              style={{
                padding: "8px",
                color: "#666",
                textAlign: "center",
              }}
            >
              Nenhum resultado encontrado
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
