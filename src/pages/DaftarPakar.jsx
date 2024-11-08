import Button from "../components/elements/Button";
import konsultaniHero from '../assets/dummy/img/konsultani-hero.png';
import pakar from "../data/dummy/pakar";
import { Link } from "react-router-dom";

export default function DaftarPakar() {
  const currentYear = new Date().getFullYear(); // Mengambil tahun sekarang

  return (
    <div className="min-h-screen justify-center items-center px-96">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 place-items-center place-content-center">
      {pakar.map((pakar, index) => {
        const experience = currentYear - pakar.startYear;
        const rating = 4;

        return (
          <div 
            className="bg-daftar-pakar service-item w-full"
            key={index}
          >
            <img
              className="rounded-[8px]"
              width={176}
              height={235}
              src={pakar.expertImage}
              alt={pakar.expertName}
            />
            <div className="flex flex-col justify-start w-full gap-4">
              <h5 className="typhography-nama">
                {pakar.expertName}
              </h5>
              <p className="text-black text-left font-inter text-[10px] font-medium leading-4 tracking-tight">
                {pakar.expertDesc}
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex-center-padding">
                  {pakar.expertExp}
                </div>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    i < rating ? <span key={i}>★</span> : <span key={i} className="text-gray-300">★</span>
                  ))}
                </div>
              </div>
              <Button 
                classname="button-chat typhography-chat-button w-fit ms-40"
              >
              <Link to="/daftar-pakar">Chat</Link>
              </Button>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}