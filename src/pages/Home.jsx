import HeroImage from "/hero-img.png";
import Button from "../components/elements/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Testimonials from "../data/dummy/testimonials";
import Products from "../data/dummy/products";
import { useState } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = Testimonials;
  const products = Products;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  if (currentIndex > testimonials.length - 3) {
    console.log(currentIndex);
    setCurrentIndex(0);
    console.log("hi");
  }
  return (
    <>
      <div>
        <div className="flex flex-col-reverse lg:flex-row bg-primary-600  w-full h-auto mx-auto py-8 lg:py-20 justify-center items-center gap-4 lg:gap-20">
          <div className="flex px-8 py-8 lg:px-16 justify-center items-start flex-col gap-12">
            <h1 className="text-white text-[48px] lg:text-[54px] font-bold font-['Roboto'] leading-[60px]">
              Optimalkan Pertanian <br /> Anda dengan Bimbingan <br />{" "}
              Profesional di Tani Cerdas
            </h1>
            <p className="font-bold text-lg text-white text-justify">
              Platform Tani Cerdas menyediakan bimbingan profesional untuk
              meningkatkan produktivitas petani melalui edukasi terkini dari
              pakar-pakarnya, sehingga dapat mengoptimalkan seluruh aspek usaha
              pertanian dan meningkatkanhasil panennya.
            </p>
            <Button classname="px-4 py-2 bg-brown-300 text-white font-medium text-lg rounded border-2 border-brown-300 hover:bg-brown-200">
              Selengkapnya
            </Button>
          </div>
          <img
            src={HeroImage}
            className="w-auto h-[462px] rounded-lg"
            alt="Hero Image"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col bg-primary-50 w-full h-auto mx-auto p-8 lg:p-20 justify-start items-center gap-8 lg:gap-16">
          <h1 className="text-center text-black text-5xl font-bold font-['Roboto'] leading-[46.20px]">
            Produk dan Layanan Kami
          </h1>
          <div className="flex flex-col md:flex-row gap-8">
            {products.map((product, index) => (
              <div
                className="max-w-sm w-full bg-primary-50 border border-primary-75"
                key={index}
              >
                <img
                  className="w-full h-auto object-cover"
                  src={product.image}
                  alt=""
                />
                <div className="flex px-4 pt-6 pb-4 gap-4 flex-col">
                  <h5 className="text-black text-xl font-bold font-['Roboto'] leading-snug">
                    {product.title}
                  </h5>
                  <p className="text-black text-base font-normal font-['Roboto'] leading-snug">
                    {product.description}
                  </p>
                  <Button classname="py-4 text-start text-black text-xl font-medium font-['Roboto'] hover:text-slate-600">
                    Selengkapnya <ArrowForwardIcon />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col bg-primary-75 w-full h-auto mx-auto p-8 lg:p-20 justify-start items-center gap-8 lg:gap-16">
          <div className="gap-2 flex-col flex">
            <h3 className="text-center text-primary-600 text-xl font-bold font-['Roboto'] uppercase leading-tight tracking-wide">
              Testimoni
            </h3>
            <h1 className="text-center text-brown-500 text-5xl font-bold font-['Roboto'] leading-[46.20px]">
              Pendapat Mereka tentang Tani Cerdas
            </h1>
          </div>
          <div className="inline-flex flex-row gap-4">
            <button onClick={handlePrev}>
              <KeyboardArrowLeftIcon />
            </button>
            <div className="flex flex-col md:flex-row md:gap-4 gap-8 items-center justify-center">
              {testimonials
                .slice(currentIndex, currentIndex + 2)
                .map((testimonial, index) => (
                  <div
                    className="p-6 min-h-80 w-full mx-auto bg-white justify-center items-center gap-4 flex flex-col text-center"
                    key={index}
                  >
                    <h3 className="text-lg font-normal font-['Roboto'] text-black">
                      {testimonial.desc}
                    </h3>

                    <img
                      className="rounded-full w-12 h-12 mt-4"
                      src={testimonial.userImage}
                      alt="User Profile"
                    />
                    <h2 className="text-black text-xl md:text-2xl font-bold font-['Roboto']">
                      {testimonial.userName} - {testimonial.userRole}
                    </h2>
                  </div>
                ))}
            </div>

            <button onClick={handleNext}>
              <KeyboardArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
