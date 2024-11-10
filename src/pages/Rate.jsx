import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import navigasi
import Chatt from "../../src/assets/dummy/img/chat.png"; // Gambar Pakar
import User from "../../src/assets/user.svg"; // Gambar User

export default function Rate() {
  // Mengambil data pakar yang diteruskan dari halaman Chat
  const location = useLocation();
  const expert = location.state; // Mendapatkan data pakar dari state

  const [rating, setRating] = useState(0); // State untuk rating
  const [comment, setComment] = useState(""); // State untuk komentar
  const navigate = useNavigate(); // Hook untuk navigasi

  // Fungsi untuk menangani perubahan rating
  const handleRating = (newRating) => {
    setRating(newRating);
  };

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    
    if (rating === 0) {
      alert("Rating dan komentar harus diisi!");
      return;
    }

    // Lakukan sesuatu dengan rating dan komentar (misalnya simpan ke server)
    console.log("Rating:", rating);
    console.log("Komentar:", comment);
    
    // Navigasi kembali ke halaman Chat setelah submit
    navigate("/daftar-pakar", { state: expert });
  };

  if (!expert) {
    return <p>Data pakar tidak ditemukan.</p>; // Jika data pakar tidak ada
  }

  return (
    <div className="min-h-screen bg-[var(--Foundation-Brown-B50,#EFECEB)] flex flex-col items-center">
      <div className="w-full px-[135px] mt-8">
        {/* Header dengan foto pakar */}
        <div className="flex items-center w-[full] h-16 px-4 g-4 border-b border-black">
          <img
            className="w-[48px] h-[48px] flex-shrink mr-4 rounded-[8px]"
            src={expert.expertImage} // Menampilkan foto pakar
            alt="Expert"
          />
          <p className="text-black font-inter text-[20px] font-normal leading-normal">
            {expert.expertName} {/* Menampilkan nama pakar */}
          </p>
        </div>

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

          {/* Rating Section */}
          <div className="mt-8 w-full px-4 flex justify-center flex-col items-center">
            <h2 className="text-2xl font-semibold text-black">Tolong berikan ulasan berupa bintang</h2>
            <div className="flex items-center mt-4">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`cursor-pointer text-7xl ${index < rating ? "text-yellow-500" : "text-gray-300"}`}
                  onClick={() => handleRating(index + 1)} // Mengatur rating
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* Form untuk komentar */}
          <form onSubmit={handleSubmit}>
            {/* Submit Button */}
            <div className="mt-8 flex justify-center w-full px-4">
              <button
                onClick={() => navigate(-2)}
                className="bg-brown-300 text-white px-6 py-3 rounded-lg hover:bg-brown-200 transition-all"
              >
                Selesai
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
