import style from "./App.module.css";
import NavBar from "./components/NavBar/Index";

function App() {
  return (
    <>
      <NavBar />
      <section className={style.principal} id="center">
        <div className={style.content}>
          <h2 className={style.titleSecondary}>Hayao Miyazaki</h2>
          <h3 className={style.title}>A Viagem de Chihiro</h3>
          <p className={style.textPrimary}>
            Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que
            a desobedecem são transformados em animais.
          </p>
          <div className={style.buttons}>
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
