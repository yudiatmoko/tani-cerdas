import Button from "../components/elements/Button";
import konsultaniHero from '../assets/dummy/img/konsultani-hero.png';
import pakar from "../data/dummy/pakar";
import { Link } from "react-router-dom";
import DaftarPakar from "./DaftarPakar";

export default function KonsulTani() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row bg-primary-600 w-full h-auto mx-auto py-8 lg:py-20 justify-center items-center gap-4 lg:gap-20">
        <img
          src={konsultaniHero}
          alt="Sahabat Tani"
          width={570}
          height={626}
          className="m-8 lg:m-0 lg:mr-29 my-8 lg:ml-[135px]"
        />
        <div className="flex flex-col items-start lg:mr-[135px] my-[236.5px]">
          <div>
            <h1 className="text-white text-[48px] lg:text-[54px] font-bold font-['Roboto'] leading-[77px]">
              Akurat dan Tepat
            </h1>
            <p className="konsul-hero">
              dari pakar yang sudah dijamin berkualitas
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row bg-costum w-full h-auto mx-auto p-8 lg:p-20 justify-start items-center gap-8 lg:gap-16 rounded-tl-[40px] rounded-tr-[40px]">
        <div className="flex flex-col items-start gap-[7px] w-[570px] shrink-0 ml-[135px] my-[143.5px]">
          <div className="flex justify-center gap-4">
            <h1 className="text-black font-inter text-[48.2px] font-medium leading-[77.1px] tracking-[-0.53px]">
              ingin
            </h1>
            <h1 className="bg-[#496F27] text-white font-inter text-[48.2px] font-bold leading-[77.1px] tracking-[-0.53px]">
              memperdalam
            </h1>
          </div>
          <div className="flex justify-center gap-4">
            <h1 className="text-black font-inter text-[48.2px] font-medium leading-[77.1px] tracking-[-0.53px]">
              mengenai
            </h1>
            <h1 className="bg-[#496F27] text-white font-inter text-[48.2px] font-bold leading-[77.1px] tracking-[-0.53px]">
              pertanian?
            </h1>
          </div>
          <h1 className="text-black font-inter text-[48.2px] font-medium leading-[77.1px] tracking-[-0.53px]">
            Yuk pakai Pakar ahli kita
          </h1>
          <Button 
            classname="px-4 py-2 bg-brown-300 text-white font-medium text-lg rounded border-2 border-brown-300 hover:bg-brown-200"
          >
            <Link to="/daftar-pakar">Lihat Pakar</Link>
          </Button>
        </div>

        <div className="flex flex-wrap gap-[50px] justify-start w-full lg:w-[570px] ml-[135px] mr-[135px] my-[15px]">
          {pakar.map((pakar,index)=>(
            <div 
              className="flex flex-col gap-4 items-center w-full sm:w-1/4"
              key={index}
            >
              <img
                className="rounded-[8px]"
                width={200  }
                height={200}
                src={pakar.expertImage}
                alt=""
              />
              <div className="flex flex-col items-center">
                <h5 className="text-black text-center font-inter font-size: 12px font-style: normal font-weight: 700 line-height: 24px letter-spacing: -0.132px font-bold">
                  {pakar.expertName}
                </h5>
                <p className="text-black text-center font-inter font-size: 10px font-style: normal font-weight: 500; line-height: 16px letter-spacing: -0.11px">
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

