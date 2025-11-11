import { AutoresPage } from "./components/AutoresPage";
import { AutorPage } from "./components/AutorPage";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PoesiaPage } from "./components/PoesiaPage";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/autores" element={<AutoresPage />} />
        <Route path="/dancas-tradicionais" element={<h1>Em breve...</h1>} />
        <Route path="/autor/:autor" element={<AutorPage />} />
        <Route path="/autor/:autor/poesia/:poesia" element={<PoesiaPage />} />
        <Route path="/pesquisar/:poesia" element={<PoesiaPage />} />
      </Routes>
    </BrowserRouter>
  );
}
