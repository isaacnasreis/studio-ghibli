import IconeFace from "../../assets/link-facebook.svg";
import IconeGoogle from "../../assets/link-google.svg";
import IconeInsta from "../../assets/link-instagram.svg";
import IconeTwitter from "../../assets/link-twitter.svg";
import Logo from "../../assets/logo.png";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <h1 className={style.navbarLogo}>
        <img src={Logo} alt="Logo Studio Ghibli" />
      </h1>

      <ul className={style.navbarList}>
        <li>
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IconeGoogle} alt="Google" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IconeFace} alt="Facebook" />
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IconeTwitter} alt="Twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IconeInsta} alt="Instagram" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
