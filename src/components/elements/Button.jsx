const Button = (props) => {
    const {
      classname = "bg-primary-200",
      children = "Button",
      onClick = () => {},
      type = "button",
    } = props;
    return (
      <button
        className={`h-10 px-6 font-semibold rounded-md ${classname}`}
        type={type}
        onClick={() => onClick()}
      >
        {children}
      </button>
    );
  };
  
  export default Button;