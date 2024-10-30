import React, { useState } from "react";
import Logo from "../assets/logo-wtext.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-[#dde1e6] justify-between items-center">
      <div className="max-w-screen-xl mx-auto p-4">
        {/* Desktop */}
        <div className="hidden justify-between md:flex md:flex-row md:items-center md:justify-between">
          <img className="w-[170px] h-[30px]" src={Logo} alt="Logo" />
          <div className="flex items-center gap-4">
            <NavBarMenu />
          </div>
          <LoginBtn />
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            <img className="w-[170px] h-[30px]" src={Logo} alt="Logo" />
            <button
              onClick={toggleMenu}
              className="p-2 text-brown-500 focus:outline-none"
            >
              <MenuIcon fontSize="large" />
            </button>
          </div>
          {isOpen && (
            <div className="flex flex-col items-center gap-2">
              <NavBarMenu />
              <LoginBtn />
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
      <MenuItem title={"Beranda"} path={`/beranda`} />
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
            isActive ? "bg-brown-100 text-white" : "text-[#21272a]"
          }`}
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

function LoginBtn() {
  const navigateTo = useNavigate();
  return (
    <button
      onClick={() => navigateTo("/login")}
      className="px-4 py-2 bg-brown-500 text-white font-medium rounded border-2 border-brown-500 hover:bg-brown-300"
    >
      Masuk
    </button>
  );
}
