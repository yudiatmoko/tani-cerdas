import User from "../../../../Qularisolmayo/tani-cerdas/src/assets/user.svg"
import Chatt from "/Users/Qularisolmayo/tani-cerdas/src/assets/dummy/img/chat.png"
import React, { useState } from "react";

export default function Chat() {
  // State untuk menyimpan pesan yang diketik
  const [message, setMessage] = useState("");

  // Fungsi untuk menghapus pesan
  const clearMessage = () => {
    setMessage(""); // Mengosongkan input
  };

  return (
    <div className="min-h-screen bg-[var(--Foundation-Brown-B50,#EFECEB)] flex flex-col items-center">
      <div className="">
        <div className="flex items-center w-[1170px] h-16 px-0 g-4 border-b border-black mt-8">
          <img
            className="w-[48px] h-[48px] flex-shrink mr-4 rounded-[8px]"
            src={Chatt}
            alt="Hero"
          />
          <p className="text-black font-inter text-[20px] font-normal leading-normal">
            Jumie Wong
          </p>
        </div>

        <div className="inline-flex flex-col gap-[18px] mt-[40px] w-full">
          {/* Pesan contoh */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-1 mb-[18px]">
              <img className="w-[32px] h-[32px] rounded-[8px] mr-1" src={Chatt} alt="Jumie Wong" />
              <p>Jumie Wong</p>
            </div>
            <div className="flex flex-col p-2 justify-center items-center rounded-[12px] bg-white w-[292px] h-[67px]">
              <p className="absolute">Halo... ada yang bisa saya bantu</p>
              <p className="text-black font-inter text-[10px] font-light leading-normal w-[27px] h-[12px] ml-[255px] mt-10">08.50</p>
            </div>
          </div>

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
          <div className="flex bg-white p-4 w-full items-center justify-between mt-[450px] rounded-[12px]">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ketik Disini..."
              className="w-full px-4 py-2 rounded-lg focus:outline-none"
            />
            <img
              className="w-[24px] h-[24px] cursor-pointer"
              src="/clear-icon.svg" // Ganti dengan ikon yang diinginkan
              alt="Clear icon"
              onClick={clearMessage} // Fungsi untuk mengosongkan pesan
            />
          </div>
        </div>
      </div>
    </div>
  );
}
