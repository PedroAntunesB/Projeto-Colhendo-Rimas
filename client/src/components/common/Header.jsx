import { Link } from "react-router-dom";
import SearchDropdown from "./SearchDropdown";

export function Header() {
  return (
    <header>
      <button>
        <Link className="remove-link" to="/">
          Home
        </Link>
      </button>
      <button className="buttonAutores">
        <Link className="remove-link" to="/autores">
          Autores
        </Link>
      </button>
      <button>
        <Link className="remove-link" to="/dancas-tradicionais">
          Danças Tradicionais
        </Link>
      </button>

      <SearchDropdown />
    </header>
  );
}
