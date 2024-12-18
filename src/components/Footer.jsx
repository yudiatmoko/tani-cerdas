import React from "react";
import { Link } from "react-router-dom";
import Logo from "/logo-wtext.svg";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="bg-primary-600 shadow mt-auto">
      <div className="w-full mx-auto px-8 py-8 lg:px-16 space-y-8">
        <div className="sm:flex sm:items-center sm:justify-between space-y-8">
          <div className="flex flex-col justify-start items-start gap-6">
            <Link to="" className="flex items-center">
              <img
                src={Logo}
                className="h-[30px] brightness-0 invert"
                alt="Tani Cerdas Logo"
              />
            </Link>
            <h3 className="text-white text-xs font-normal font-['Roboto']">
              Jl. Alamat 1 No. 1, Desa, Kecamatan, Kota, Provinsi, Kode Pos
            </h3>
          </div>
          <div>
            <ul className="flex gap-4 text-sm font-medium text-white">
              <li>
                <Link
                  to="https://www.youtube.com/"
                  className="hover:text-primary-75"
                >
                  <YouTubeIcon />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.facebook.com/"
                  className="hover:text-primary-75"
                >
                  <FacebookOutlinedIcon />
                </Link>
              </li>
              <li>
                <Link to="https://www.x.com/" className="hover:text-primary-75">
                  <TwitterIcon />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.isntagram.com/"
                  className="hover:text-primary-75"
                >
                  <InstagramIcon />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/"
                  className="hover:text-primary-75"
                >
                  <LinkedInIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <span className="block text-sm text-white sm:text-center">
          © 2024{" "}
          <Link to="https://flowbite.com/" className="hover:underline">
            TaniCerdas™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
