import GoogleIcon from "@mui/icons-material/Google";
import Button from "./Button";

const FormRegister = () => {
  const doRegister = (event) => {};
  return (
    <form onSubmit={doRegister}>
      <InputForm
        children="Nama Lengkap"
        type="text"
        name="name"
        placeholder="Masukkan nama lengkap"
      />
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
      <InputForm
        children="Confirm Password"
        type="password"
        name="confirm-password"
        placeholder="Konfirmasi kata sandi"
      />
      <Button
        type="submit"
        classname="text-primary-600 rounded-lg h-11 p-2.5 w-full my-6 bg-primary-200 hover:bg-primary-75"
      >
        Daftar
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

export default FormRegister;
