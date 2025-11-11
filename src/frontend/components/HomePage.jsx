export function HomePage() {
  return (
    <>
      <main>
        <h1>Bem vindo ao site Colhendo Rimas</h1>
        <div className="container">
          <div className="div-sobre">
            <h2>Sobre o site: </h2>
            <p>
              Este espaço foi criado para valorizar e compartilhar a poesia
              gaúcha, preservando a tradição e a arte do nosso povo. Aqui, você
              encontra poemas que retratam a cultura, os costumes e a alma do
              Rio Grande, reunidos de forma acessível para todos que desejam
              conhecer ou relembrar a riqueza do tradicionalismo gaúcho. Nosso
              objetivo é facilitar a buscar por essas poesias e manter viva a
              essência da nossa identidade cultural.
            </p>
          </div>
          <img src="src\images\imgSobre.jpg" alt="img-sobre" />
        </div>

        <div className="container">
          <div className="div-sobre">
            <h2>A alma da cultura Gaúcha </h2>
            <p>
              Nos pampas nasceu o gaúcho, moldado pelo vento e pelo cavalo,
              herdeiro da coragem indígena e da força dos colonizadores. Entre o
              fogo de chão e a roda de chimarrão, floresceu uma tradição que
              canta em milongas, dança nos fandangos e vive na poesia do campo.
              A cultura gaúcha é raiz e é céu aberto: um abraço de
              hospitalidade, um verso que atravessa gerações, a memória de um
              povo que nunca esquece sua querência.
            </p>
          </div>
          <img src="src\images\imgPaixão.jpg" alt="img-sobre" />
        </div>
      </main>
    </>
  );
}
