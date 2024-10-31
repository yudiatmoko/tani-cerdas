import React from "react";
import Logo from "../assets/logo-wtext.svg";
import AuthLayout from "../components/AuthLayout";
import FormLogin from "../components/elements/FormLogin";

const Login = () => {
  return (
    <div class="flex justify-center items-center min-h-screen min-w-full bg-primary-75 px-4 sm:px-8 lg:px-16">
      <div class="bg-primary-600 min-h-fit px-1 py-1 rounded-xl flex flex-col lg:flex-row justify-center items-center">
        <AuthLayout type="login">
          <FormLogin />
        </AuthLayout>
        <Banner />
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="relative hidden lg:block">
      <img
        className="lg:h-[560px] rounded-lg"
        src="https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Pertanian"
      />
      <img src={Logo} alt="Logo" className="absolute top-4 left-2 p-2 h-12" />
    </div>
  );
};

export default Login;
