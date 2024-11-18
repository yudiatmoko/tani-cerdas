import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/elements/Button";
import User from "../assets/user.svg"
import jam from "../data/dummy/jam";
import jamreguler from "../data/dummy/jamreguler";
import { useState } from "react";



export default function Book() {
  const location = useLocation();
  const navigate = useNavigate();
  const pakar = location.state; // Retrieve pakar data from the state
  const rating = 4;

  if (!pakar) {
    return <div>No pakar data available!</div>; // In case no pakar data was passed
  }

  const handleConfirmBooking = () => {
    sessionStorage.setItem("bookedPakar", JSON.stringify(pakar));
    navigate(-1); // Redirect back to the previous page
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time); // Set waktu yang dipilih
  };

  const [selectedTime, setSelectedTime] = useState(null);

  const [selectedDate, setSelectedDate] = useState(""); // State untuk tanggal yang dipilih

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value); // Menyimpan tanggal yang dipilih
  };

  return (
    <div
      className="background flex flex-col lg:flex-row p-4"
      style={{ fontFamily: "Roboto" }} /** Background */
    >
      {/* Container Sebelah Kiri */}
      <div className="flex-1 mr-0 lg:mr-10 mb-6 lg:mb-0">
        {/* Container Pakar */}
        <div className="flex items-start mb-8">
          <img
            className="rounded-[8px] mr-[27px]"
            width={83}
            height={111}
            src={pakar.expertImage}
            alt={pakar.expertName}
          />
          <div>
            <h5 className="text-lg font-bold">{pakar.expertName}</h5>
            <p className="my-2 text-gray-600">{pakar.expertDesc}</p>
            <div className="flex items-center space-x-2">
              <div className="bg-gray-100 px-3 py-1 rounded-md text-sm">
                {pakar.expertExp}
              </div>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) =>
                  i < rating ? (
                    <span key={i}>★</span>
                  ) : (
                    <span key={i} className="text-gray-300">
                      ★
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Tentang Pakar */}
        <p className="font-semibold">Tentang Pakar</p>
        <div className="text-justify mt-[19px] mb-10 w-[900px]">
          <p>
            Jumie Wong adalah seorang petani muda yang berhasil meraih kesuksesan di dunia
            pertanian dengan pengalaman lebih dari tiga tahun. Dengan kemampuan inovatifnya, Jumie
            mampu memadukan metode pertanian tradisional dengan teknologi modern, seperti irigasi
            pintar, sistem hidroponik, dan pemanfaatan aplikasi digital untuk mengelola lahan.
            Pendekatan ini memungkinkan Jumie untuk mengoptimalkan hasil panen, sehingga mampu
            meraih pendapatan hingga 10 juta rupiah per bulan. Ia terkenal dengan hasil pertanian
            berkualitas tinggi yang mampu bersaing di pasar. Hal ini membuatnya mendapatkan rating
            4 bintang, mencerminkan kepercayaan dari konsumen dan mitra bisnisnya.
          </p>
          <p>
            Selain berfokus pada usaha pertanian, Jumie Wong juga aktif membagikan pengetahuannya
            melalui berbagai workshop dan pelatihan, menginspirasi generasi muda untuk terjun ke
            dunia pertanian. Ia berkomitmen mempromosikan praktik pertanian berkelanjutan yang
            menjaga kelestarian lingkungan dan meningkatkan produktivitas lahan. Keberhasilannya
            menunjukkan bahwa pertanian bukan hanya pekerjaan tradisional, tetapi juga bisa menjadi
            peluang bisnis yang menjanjikan jika dikelola dengan strategi dan inovasi yang tepat.
            Jumie kini menjadi sosok panutan bagi banyak petani muda yang ingin mengikuti jejaknya
            dalam mengembangkan pertanian modern.
          </p>
        </div>

        <p className="font-bold">
          Jam Reguler
        </p>

        {jamreguler.map((jamreguler,index)=>(
          <div className="flex justify-between items-center w-[270px] "key={index}>
            <p className="">
              {jamreguler.hari}
            </p>
            <p className="">
              {jamreguler.avail}
            </p>
          </div>
        ))}

      </div>
      {/* Container Sebelah Kanan */}
      <div className="flex flex-col items-center lg:w-[390px] w-full p-4 bg-jadwal-book text-white rounded-md mr-[159px]">

        <p className="text-lg font-bold mb-4">
          Jadwalkan Booking Pakar
        </p>
        
        <div className="bg-white flex items-center justify-between p-3 w-full rounded-md">

        <label htmlFor="tanggal" className="text-black">Pilih tanggal</label>
          <input
            type="date"
            id="tanggal"
            className="ml-auto p-2 text-black w-max h-max"
          />

        </div>
        {/* Jam Tersedia */}
        <div className="flex flex-col items-center w-full">

          <p className="my-8">
            Pilih jam yang tersedia
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-7">

            {jam.map((jam, index) => (
              
              <div
                key={index}
                className="flex bg-white w-full h-[58px] rounded-md items-center justify-center"
              >
                <Button
                  classname={`w-full h-full rounded-[5px] ${
                    selectedTime === jam.mulai
                      ? "bg-gray-400 text-white" // Jika tombol dipilih, beri warna abu-abu
                      : "bg-white text-black"
                  }`}
                  onClick={() => handleTimeSelection(jam.mulai)} // Set waktu yang dipilih
                >
                  {jam.mulai} - {jam.selesai}
                </Button>

              </div>

            ))}

          </div>

          <Button classname="flex justify-center items-center p-[10px] w-[183px] h-[51px] g-[10px] rounded-[5px] bg-brown-500" onClick={handleConfirmBooking}/**Button Booking */>
            Booking Sekarang
          </Button>

        </div>
      </div>
    </div>
  );
}

