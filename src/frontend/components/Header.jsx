import { Link } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const [pesquisa, setPesquisa] = useState("");
  const handleChange = (event) => {
    setPesquisa(event.target.value.toUpperCase());
  };
  return (
    <header>
      <button className="buttonAutores">
        <Link className="remove-link" to="/autores">
          📖 Autores
        </Link>
      </button>
      <button>
        <Link className="remove-link" to="/">
          Home
        </Link>
      </button>

      <input
        className="inputPesquisar"
        type="text"
        placeholder="Pesquisar Título..."
        value={pesquisa}
        onChange={handleChange}
      />
      <button className="btPesquisar">
        <Link className="remove-link" to={`/pesquisar/${pesquisa}`}>
          🔍
        </Link>
      </button>
    </header>
  );
}
