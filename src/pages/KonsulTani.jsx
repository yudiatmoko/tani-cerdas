import Button from "../components/elements/Button";
import konsultaniHero from '../assets/dummy/img/konsultani-hero.png';
import pakar from "../data/dummy/pakar";
import { Link } from "react-router-dom";

export default function KonsulTani() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row bg-primary-600 w-full h-auto mx-auto py-8 lg:py-20 justify-center items-center gap-4 lg:gap-20">
        <img
          src={konsultaniHero}
          alt="Sahabat Tani"
          className="w-full max-w-md lg:max-w-lg mx-8 lg:mx-0"
        />
        <div className="flex flex-col items-start px-8 lg:px-0 lg:mr-[135px] my-8 lg:my-0">
          <h1 className="text-white text-3xl lg:text-[54px] font-bold font-['Roboto'] leading-tight lg:leading-[77px]">
            Akurat dan Tepat
          </h1>
          <p className="text-white text-lg lg:text-xl mt-2">
            dari pakar yang sudah dijamin berkualitas
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row bg-custom w-full h-auto mx-auto p-8 lg:p-20 justify-start items-center gap-8 lg:gap-16 rounded-tl-[40px] rounded-tr-[40px]">
        <div className="flex flex-col items-start gap-4 w-full lg:w-[570px] px-4 lg:px-0">
          <div className="flex flex-wrap gap-2 lg:gap-4">
            <h1 className="text-black text-3xl lg:text-[48.2px] font-medium">
              ingin
            </h1>
            <h1 className="bg-[#496F27] text-white text-3xl lg:text-[48.2px] font-bold px-2">
              memperdalam
            </h1>
          </div>
          <div className="flex flex-wrap gap-2 lg:gap-4">
            <h1 className="text-black text-3xl lg:text-[48.2px] font-medium">
              mengenai
            </h1>
            <h1 className="bg-[#496F27] text-white text-3xl lg:text-[48.2px] font-bold px-2">
              pertanian?
            </h1>
          </div>
          <h1 className="text-black text-3xl lg:text-[48.2px] font-medium mt-2">
            Yuk pakai Pakar ahli kita
          </h1>
          <Button 
            classname="mt-4 px-4 py-2 bg-brown-300 text-white font-medium text-lg rounded border-2 border-brown-300 hover:bg-brown-200"
          >
            <Link to="/daftar-pakar">Lihat Pakar</Link>
          </Button>
        </div>

        <div className="flex flex-wrap gap-6 justify-start w-full lg:w-[570px] px-4 lg:px-0">
          {pakar.map((pakar, index) => (
            <div 
              className="flex flex-col gap-2 items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              key={index}
            >
              <img
                className="rounded-[8px] w-36 h-36 lg:w-48 lg:h-48 object-cover"
                src={pakar.expertImage}
                alt={pakar.expertName}
              />
              <div className="flex flex-col items-center text-center">
                <h5 className="text-black text-sm font-semibold">
                  {pakar.expertName}
                </h5>
                <p className="text-black text-xs font-medium">
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
