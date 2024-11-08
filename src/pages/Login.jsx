import React from "react";
import Logo from "/logo-wtext.svg";
import AuthLayout from "../components/AuthLayout";
import FormLogin from "../components/elements/FormLogin";
import LoginBanner from "/login-banner.png"

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
        src={LoginBanner}
        alt="Pertanian"
      />
      <img src={Logo} alt="Logo" className="absolute top-4 left-2 p-2 h-12" />
    </div>
  );
};

export default Login;
