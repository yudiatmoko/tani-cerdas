import CustomButton from "./CustomButton";
import { useState, useEffect } from "react";
import { login } from "../../services/authApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const FormLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoading(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }, [navigate]);

  const doLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const loginData = {
        email: formData.email,
        password: formData.password,
      };
      const loginResponse = await login(loginData);
      toast.success(loginResponse.message);
      localStorage.setItem("token", loginResponse.token);
      localStorage.setItem("userId", loginResponse.user.id);

      setFormData({
        name: "",
        email: "",
      });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Login failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <form onSubmit={doLogin}>
        <InputForm
          children="Email"
          type="email"
          name="email"
          placeholder="Masukkan alamat email"
          value={formData.name}
          onChange={handleChange}
        />
        <InputForm
          children="Password"
          type={passwordVisible ? "text" : "password"}
          name="password"
          placeholder="Masukkan kata sandi"
          toggleVisibility={togglePasswordVisibility}
          isVisible={passwordVisible}
          value={formData.password}
          onChange={handleChange}
        />
        <CustomButton
          type="submit"
          classname="text-primary-600 flex justify-center items-center rounded-lg h-11 p-2.5 w-full my-4 bg-primary-200 hover:bg-primary-75"
        >
          {loading ? <Spinner /> : "Masuk"}
        </CustomButton>
      </form>
      <ToastContainer />
    </>
  );
};

const InputForm = (props) => {
  const {
    children,
    type,
    name,
    placeholder,
    toggleVisibility,
    isVisible,
    value,
    onChange,
  } = props;
  return (
    <div className="mb-3">
      <label
        htmlFor={name}
        className="block text-white text-sm font-bold font-['Roboto']"
      >
        {children}
      </label>
      <div className="relative">
        <input
          type={type}
          className="text-sm text-slate-800 w-full py-2 px-3 placeholder:opacity-80 border-solid border border-black rounded-md mt-1 font-['Roboto']"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />

        {name === "password" && (
          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute inset-y-0 right-3 flex items-center text-gray-600"
          >
            {isVisible ? (
              <VisibilityIcon fontSize="small" />
            ) : (
              <VisibilityOffIcon fontSize="small" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormLogin;
