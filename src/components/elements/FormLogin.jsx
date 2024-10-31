import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import Button from "./Button";

const FormLogin = () => {
  const doLogin = (event) => {};
  return (
    <form onSubmit={doLogin}>
      <InputForm
        children="Email"
        type="email"
        name="email"
        placeholder="Masukkan alamat email"
      />
      <InputForm
        children="Password"
        type="password"
        name="password"
        placeholder="Masukkan kata sandi"
      />
      <h2 className="text-right text-white hover:text-primary-75 text-sm font-['Roboto']">
        <Link to="/forget-password">Lupa Password?</Link>
      </h2>
      <Button
        type="submit"
        classname="text-primary-600 w-full my-6 bg-primary-200 hover:bg-primary-75"
      >
        Login
      </Button>
      <h2 className="text-center text-white text-sm font-['Roboto']">
        Masuk dengan
      </h2>
      <button className="w-full mt-2 mb-6 text-primary-200 hover:text-primary-75">
        <GoogleIcon fontSize="medium" />
      </button>
    </form>
  );
};

const InputForm = (props) => {
  const { children, type, name, placeholder } = props;
  return (
    <div className="mb-3">
      <label
        htmlFor={name}
        className="block text-white text-sm font-bold font-['Roboto']"
      >
        {children}
      </label>
      <input
        type={type}
        className="text-sm text-slate-800 w-full py-2 px-3 placeholder:opacity-80 border-solid border border-black rounded-md mt-1 font-['Roboto']"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default FormLogin;
