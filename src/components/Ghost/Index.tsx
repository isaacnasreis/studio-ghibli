import style from "./Ghost.module.css";

interface GhostProps {
  img: string;
  initialAnimation: string;
}

const Ghost = ({ img, initialAnimation }: GhostProps) => {
  return (
    <div className={style.ghost}>
      <img
        className={style.ghostImg + " " + style[initialAnimation]}
        src={img}
        alt="Ghost"
      />
    </div>
  );
};

export default Ghost;
