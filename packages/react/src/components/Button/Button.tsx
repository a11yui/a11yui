type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button className="ui-button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
