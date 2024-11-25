import React, { useState, useEffect } from "react";
import Logo from "/logo-wtext.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import CustomButton from "./elements/CustomButton";

export default function NavBar() {
  const navigateTo = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginButton, setShowLoginButton] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (token && userId) {
      setShowLoginButton(false);
    } else {
      setShowLoginButton(true);
    }
  }, []);

  return (
    <nav className="bg-white border-b border-[#dde1e6] justify-between items-center">
      <div className="px-8 py-4 lg:px-16 w-full h-auto mx-auto">
        <div className="hidden justify-between lg:flex lg:flex-row lg:items-center lg:justify-between">
          <img className="w-[170px] h-[30px]" src={Logo} alt="Logo" />
          <div className="flex items-center gap-4">
            <NavBarMenu />
          </div>
          {showLoginButton && (
            <CustomButton
              onClick={() => navigateTo("/login")}
              classname="px-4 py-2 bg-brown-500 text-white font-medium rounded border-2 border-brown-500 hover:bg-brown-300"
            >
              Masuk
            </CustomButton>
          )}
          {!showLoginButton && (
            <div className="px-4 py-2 bg-white text-white font-medium rounded border-2 border-white hover:bg-white">
              {""}
            </div>
          )}
        </div>
        <div className="lg:hidden">
          <div className="flex justify-between items-center">
            <img className="w-[170px] h-[30px]" src={Logo} alt="Logo" />
            <button
              onClick={toggleMenu}
              className="text-brown-500 focus:outline-none"
            >
              <MenuIcon fontSize="large" />
            </button>
          </div>
          {isOpen && (
            <div className="flex flex-col items-center gap-2">
              <NavBarMenu />
              {showLoginButton && (
                <CustomButton
                  onClick={() => navigateTo("/login")}
                  classname="px-4 py-2 bg-brown-500 text-white font-medium rounded border-2 border-brown-500 hover:bg-brown-300"
                >
                  Masuk
                </CustomButton>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

function NavBarMenu() {
  return (
    <>
      <MenuItem title={"Beranda"} path={`/`} />
      <MenuItem title={"KonsulTani"} path={`/konsul-tani`} />
      <MenuItem title={"BelajarTani"} path={`/belajar-tani`} />
      <MenuItem title={"SahabatTani"} path={`/sahabat-tani`} />
      <MenuItem title={"Tentang Kami"} path={`/tentang-kami`} />
      <MenuItem title={"Akun"} path={`/akun`} />
    </>
  );
}

function MenuItem({ title, path }) {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <div className="px-2 py-3 justify-center items-center gap-2 flex">
      <a href={path}>
        <div
          className={`h-10 px-2 py-3 rounded-[5px] inline-flex items-center gap-2 ${
            isActive ? "bg-brown-100 text-white" : "text-black"
          } }`}
        >
          <span
            className={`text-base font-medium font-['Roboto'] leading-none ${
              isActive ? "text-white" : ""
            }`}
          >
            {title}
          </span>
        </div>
      </a>
    </div>
  );
}
