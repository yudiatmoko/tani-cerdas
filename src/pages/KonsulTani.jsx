import Button from "../components/elements/Button";
import konsultaniHero from '../assets/dummy/img/konsultani-hero.png';
import pakar from "../data/dummy/pakar";
import { Link } from "react-router-dom";
import DaftarPakar from "./DaftarPakar";

export default function KonsulTani() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row bg-primary-600 w-full h-auto mx-auto py-8 lg:py-20 justify-center items-center gap-8 lg:gap-20">
        <img
          src={konsultaniHero}
          alt="Sahabat Tani"
          className="w-full lg:w-[570px] h-auto lg:h-[626px] object-contain lg:m-0 mx-8 my-8"
        />
        <div className="flex flex-col items-start lg:mr-[135px] my-12 lg:my-0">
          <div>
            <h1 className="text-white text-3xl lg:text-[54px] font-bold font-['Roboto'] leading-[48px] lg:leading-[77px]">
              Akurat dan Tepat
            </h1>
            <p className="text-white text-lg lg:text-xl">
              dari pakar yang sudah dijamin berkualitas
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row bg-costum w-full h-auto mx-auto p-8 lg:p-20 justify-start items-center gap-8 lg:gap-16 rounded-tl-[40px] rounded-tr-[40px]">
        
        {/* Text and Button Section */}
        <div className="flex flex-col items-start gap-4 w-full sm:w-[570px] lg:w-[570px] lg:shrink-0 mx-8 my-8 lg:ml-[135px]">
          <div className="flex justify-center gap-4">
            <h1 className="text-black text-4xl font-medium">
              ingin
            </h1>
            <h1 className="bg-[#496F27] text-white font-inter text-4xl font-bold">
              memperdalam
            </h1>
          </div>
          <div className="flex justify-center gap-4">
            <h1 className="text-black text-4xl font-medium">
              mengenai
            </h1>
            <h1 className="bg-[#496F27] text-white font-inter text-4xl font-bold">
              pertanian?
            </h1>
          </div>
          <h1 className="text-black text-4xl font-medium">
            Yuk pakai Pakar ahli kita
          </h1>
          <Button
            classname="px-6 py-3 bg-brown-300 text-white font-medium text-lg rounded border-2 border-brown-300 hover:bg-brown-200 w-full sm:w-auto"
          >
            <Link to="/daftar-pakar">Lihat Pakar</Link>
          </Button>
        </div>

        {/* Pakar Cards Section */}
        <div className="flex flex-wrap gap-8 justify-start w-full lg:w-[570px] mx-auto">
          {pakar.map((pakar, index) => (
            <div
              className="flex flex-col gap-4 items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              key={index}
            >
              <img
                className="rounded-[8px] w-full h-auto object-cover"
                src={pakar.expertImage}
                alt={pakar.expertName}
              />
              <div className="flex flex-col items-center">
                <h5 className="text-black text-center font-inter text-sm font-bold">
                  {pakar.expertName}
                </h5>
                <p className="text-black text-center font-inter text-xs font-medium">
                  {pakar.expertDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
