import { AutoresPage } from "./components/autor/AutoresPage";
import { AutorPage } from "./components/autor/AutorPage";
import { Header } from "./components/common/Header";
import { HomePage } from "./components/home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PoesiaPage } from "./components/poesia/PoesiaPage";
import { DancasTradicionaisPage } from "./components/dancas-tradicionais/DancasTradicionaisPage";
import DancaPage from "./components/dancas-tradicionais/DancaPage";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/autores" element={<AutoresPage />} />
        <Route
          path="/dancas-tradicionais"
          element={<DancasTradicionaisPage />}
        />
        <Route path="/dancas-tradicionais/:danca" element={<DancaPage />} />
        <Route path="/autor/:autor" element={<AutorPage />} />
        <Route path="/autor/:autor/poesia/:poesia" element={<PoesiaPage />} />
        <Route path="/pesquisar/:poesia" element={<PoesiaPage />} />
      </Routes>
      <footer>
        <h4>Colhendo Rimas Feito por: Pedro H. Antunes</h4>
        <a
          style={{ color: "whitesmoke" }}
          href="https://github.com/PedroAntunesB/"
        >
          Meu GitHub
        </a>
      </footer>
    </BrowserRouter>
  );
}
