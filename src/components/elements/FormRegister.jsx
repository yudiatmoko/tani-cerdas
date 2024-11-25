import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { login, register } from "../../services/authApi";
import Spinner from "./Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role_id: "",
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

  const doRegister = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      setLoading(false);
      return;
    }

    const dataToSend = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      ...(formData.role_id && { role_id: formData.role_id }),
    };

    try {
      const response = await register(dataToSend);
      toast.success(response.message);

      const loginData = {
        email: formData.email,
        password: formData.password,
      };
      const loginResponse = await login(loginData);
      localStorage.setItem("token", loginResponse.token);
      localStorage.setItem("userId", loginResponse.user.id);

      setFormData({
        name: "",
        email: "",
        password: "",
        role_id: "",
      });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Register failed. Please try again.";
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
      <form onSubmit={doRegister}>
        <InputForm
          children="Nama Lengkap"
          type="text"
          name="name"
          placeholder="Masukkan nama lengkap"
          value={formData.name}
          onChange={handleChange}
        />
        <InputForm
          children="Email"
          type="email"
          name="email"
          placeholder="Masukkan alamat email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="mb-3">
          <label
            htmlFor="roleSelect"
            className="block text-white text-sm font-bold font-['Roboto']"
          >
            Peran
          </label>
          <select
            id="roleSelect"
            name="role_id"
            className="text-sm text-slate-800 w-full py-2 px-3 placeholder:opacity-80 border-solid border border-black rounded-md mt-1 font-['Roboto']"
            value={formData.role_id}
            onChange={handleChange}
          >
            <option value="">---</option>
            <option value="2">Pakar</option>
            <option value="3">Umum</option>
          </select>
        </div>
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
        <InputForm
          children="Confirm Password"
          type={confirmPasswordVisible ? "text" : "password"}
          name="confirmPassword"
          placeholder="Konfirmasi kata sandi"
          toggleVisibility={toggleConfirmPasswordVisibility}
          isVisible={confirmPasswordVisible}
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <CustomButton
          type="submit"
          classname="text-primary-600 flex justify-center items-center rounded-lg h-11 p-2.5 w-full my-4 bg-primary-200 hover:bg-primary-75"
        >
          {loading ? <Spinner /> : "Daftar"}
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

        {(name === "password" || name === "confirmPassword") && (
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

export default FormRegister;
