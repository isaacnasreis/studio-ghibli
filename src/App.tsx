import style from "./App.module.css";
import GhostFrente from "./assets/ilustracao-frente.png";
import GhostPerfil from "./assets/ilustracao-perfil.png";
import Play from "./assets/Play.svg";
import Button from "./components/Button/Index";
import Ghost from "./components/Ghost/Index";
import NavBar from "./components/NavBar/Index";

function App() {
  return (
    <>
      <NavBar />
      <section className={style.principal} id="center">
        <div className={style.contentLeft}>
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
        <div className={style.contentRight}>
          <Ghost img={GhostFrente} initialAnimation="up" />
          <Ghost img={GhostPerfil} initialAnimation="down" />
        </div>
      </section>
    </>
  );
}

export default App;
