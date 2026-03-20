import style from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  secundary?: boolean;
  icon?: React.ReactNode;
}

const Button = ({ children, primary, secundary, icon }: ButtonProps) => {
  if (primary) {
    return (
      <button
        className={`${style.buttonPrimary} ${style.button}`}
        type="button"
      >
        {icon}
        {children}
      </button>
    );
  }

  if (secundary) {
    return (
      <button
        className={`${style.buttonSecundary} ${style.button}`}
        type="button"
      >
        {icon}
        {children}
      </button>
    );
  }
};

export default Button;
