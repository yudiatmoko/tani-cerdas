import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-wtext.svg";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer class="bg-primary-600 shadow mt-auto">
      <div class="w-full max-w-screen-xl mx-auto py-8 px-4 space-y-8">
        <div class="sm:flex sm:items-center sm:justify-between space-y-3">
          <div className="flex flex-col justify-start items-start gap-6">
            <Link
              to=""
              class="flex items-center sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src={Logo}
                class="h-[30px] brightness-0 invert"
                alt="Tani Cerdas Logo"
              />
            </Link>
            <h3 class="text-white text-xs font-normal font-['Roboto']">
              Jl. Alamat 1 No. 1, Desa, Kecamatan, Kota, Provinsi, Kode Pos
            </h3>
          </div>
          <div>
            <ul class="flex gap-4 text-sm font-medium text-white">
              <li>
                <Link
                  to="https://www.youtube.com/"
                  class="hover:text-primary-75"
                >
                  <YouTubeIcon />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.facebook.com/"
                  class="hover:text-primary-75"
                >
                  <FacebookOutlinedIcon />
                </Link>
              </li>
              <li>
                <Link to="https://www.x.com/" class="hover:text-primary-75">
                  <TwitterIcon />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.isntagram.com/"
                  class="hover:text-primary-75"
                >
                  <InstagramIcon />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/"
                  class="hover:text-primary-75"
                >
                  <LinkedInIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <span class="block text-sm text-white sm:text-center">
          © 2024{" "}
          <Link to="https://flowbite.com/" class="hover:underline">
            TaniCerdas™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
