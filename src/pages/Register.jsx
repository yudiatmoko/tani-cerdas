import React from "react";
import Logo from "/logo-wtext.svg";
import AuthLayout from "../components/AuthLayout";
import FormRegister from "../components/elements/FormRegister";
import LoginBanner from "/login-banner.png";

const Register = () => {
  return (
    <div class="flex justify-center items-center min-h-screen min-w-full bg-primary-75 px-4 sm:px-8 lg:px-16">
      <div class="bg-primary-600 min-h-fit px-1 py-1 rounded-xl flex flex-col lg:flex-row justify-center items-center">
        <Banner />
        <AuthLayout type="register">
          <FormRegister />
        </AuthLayout>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="relative hidden lg:block">
      <img
        className="lg:h-[624px] rounded-lg"
        src={LoginBanner}
        alt="Pertanian"
      />
      <img src={Logo} alt="Logo" className="absolute top-4 left-2 p-2 h-12" />
    </div>
  );
};

export default Register;
