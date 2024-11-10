import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate untuk navigasi
import User from "../../src/assets/user.svg";
import Chatt from "../../src/assets/dummy/img/chat.png";
import Frame from "../../src/assets/Frame.svg";

export default function Chat() {
  // Mengambil data pakar yang diteruskan dari halaman DaftarPakar
  const location = useLocation();
  const expert = location.state; // Expert data yang diteruskan

  // State untuk menyimpan pesan yang diketik
  const [message, setMessage] = useState("");
  
  // Gunakan useNavigate untuk melakukan navigasi
  const navigate = useNavigate();

  // Fungsi untuk menghapus pesan dan mengarahkan ke halaman Rate
  const clearMessage = () => {
    setMessage(""); // Mengosongkan input
    // Arahkan pengguna ke halaman Rate setelah mengirim pesan
    navigate("/rate", { state: expert }); // Mengirim data pakar ke halaman Rate
  };

  if (!expert) {
    return <p>Data pakar tidak ditemukan.</p>; // Jika data pakar tidak ada
  }

  return (
    <div className="min-h-screen bg-[var(--Foundation-Brown-B50,#EFECEB)] flex flex-col items-center">
      <div className="w-full px-[135px] mt-8">
        {/* Header dengan foto pakar */}
        <div className="flex items-center w-[full] h-16 g-4 border-b border-black">
          <img
            className="w-[48px] h-[48px] flex-shrink mr-4 rounded-[8px]"
            src={expert.expertImage} // Menampilkan foto pakar yang dipilih
            alt="Hero"
          />
          <p className="text-black font-inter text-[20px] font-normal leading-normal">
            {expert.expertName} {/* Menampilkan nama pakar */}
          </p>
        </div>

        {/* Chat messages */}
        <div className="inline-flex flex-col gap-[18px] mt-[40px] w-full">
          {/* Pesan pakar */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-1 mb-[18px]">
              <img className="w-[32px] h-[32px] rounded-[8px] mr-1" src={expert.expertImage} alt="Jumie Wong" />
              <p>{expert.expertName}</p>
            </div>
            <div className="flex flex-col p-2 justify-center items-center rounded-[12px] bg-white w-[292px] h-[67px]">
              <p className="absolute">Halo... ada yang bisa saya bantu?</p>
              <p className="text-black font-inter text-[10px] font-light leading-normal w-[27px] h-[12px] ml-[255px] mt-10">08.50</p>
            </div>
          </div>

          {/* Pesan dari pengguna */}
          <div className="flex flex-col items-end gap-4 w-full">
            <div className="flex items-center gap-1 mb-[18px]">
              <img className="w-[32px] h-[32px] rounded-[8px] mr-1 bg-black" src={User} alt="Ronie" />
              <p>Ronie</p>
            </div>
            <div className="flex flex-col p-2 justify-center items-center rounded-[12px] bg-white w-[292px] h-[67px]">
              <p className="absolute">Tolong bantu penyakit tanaman saya</p>
              <p className="text-black font-inter text-[10px] font-light leading-normal w-[27px] h-[12px] ml-[255px] mt-10">08.50</p>
            </div>
          </div>

          {/* Input message box */}
          <div className="flex bg-white p-4 w-full items-center justify-between mt-[450px] rounded-[12px] mb-[58px]">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ketik Disini..."
              className="w-full px-4 py-2 rounded-lg focus:outline-none"
            />
            <img
              className="w-[24px] h-[24px] cursor-pointer"
              src={Frame}
              alt="Clear icon"
              onClick={clearMessage} // Fungsi untuk mengosongkan pesan dan mengarahkan ke Rate
            />
          </div>
        </div>
      </div>
    </div>
  );
}
