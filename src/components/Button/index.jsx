import "./button.style.css";

const Button = ({ children, ...rest }) => {
  return (
    <button {...rest} className="btn">
      {children}
    </button>
  );
};

export default Button;
