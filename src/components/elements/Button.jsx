const Button = (props) => {
    const {
      classname = "h-10 font-semibold bg-primary-200",
      children = "Button",
      onClick = () => {},
      type = "button",
    } = props;
    return (
      <button className={`${classname}`} type={type} onClick={onClick}>
        {children}
      </button>
    );
  };
  
  export default Button;
  