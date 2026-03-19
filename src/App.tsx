import NavBar from "./components/NavBar/Index";

function App() {
  return (
    <>
      <NavBar />
      <section id="center">
        <div>
          <h2>Hayao Miyazaki</h2>
          <h3>A Viagem de Chihiro</h3>
          <p>
            Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que
            a desobedecem são transformados em animais.
          </p>
          <div>
            <button>Assista Agora</button>
            <button>Assista o Trailer</button>
          </div>
        </div>
        <div>Fantasmas</div>
      </section>
    </>
  );
}

export default App;
