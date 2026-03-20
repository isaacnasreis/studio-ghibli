import style from "./App.module.css";
import Play from "./assets/Play.svg";
import Button from "./components/Button/Index";
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
            <Button primary icon={<img src={Play} alt="play" />}>
              Assista Agora
            </Button>
            <Button secundary>Assista o Trailer</Button>
          </div>
        </div>
        <div>Fantasmas</div>
      </section>
    </>
  );
}

export default App;
