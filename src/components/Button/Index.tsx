import style from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
}

const Button = ({ children, variant = "primary", icon }: ButtonProps) => {
  const variantClass =
    variant === "secondary" ? style.buttonSecondary : style.buttonPrimary;

  return (
    <button className={`${variantClass} ${style.button}`} type="button">
      {icon}
      {children}
    </button>
  );
};

export default Button;
