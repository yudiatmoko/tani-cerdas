import React, { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom"; // Import useNavigate untuk navigasi
import User from "../../src/assets/user.svg";
import Chatt from "../../src/assets/dummy/img/chat.png";
import Frame from "../../src/assets/Frame.svg";
import { getAkunById } from "../services/akunapi"; // Pastikan fungsi ini mengembalikan data pakar berdasarkan ID
import foto from "../assets/dummy/img/pakar-satu.png"

export default function Chat() {
  // Ambil pakarId dari localStorage
  const pakarId = localStorage.getItem("pakarId");
  const userId = localStorage.getItem("userId");

  // State untuk menyimpan data pakar dan pesan
  const [expert, setExpert] = useState(null); // Data pakar
  const [message, setMessage] = useState(""); // Pesan yang diketik
  const [loading, setLoading] = useState(false); // State untuk loading
  const [error, setError] = useState(""); // State untuk error
  const [akun, setAkun] = useState({
      name: "Nama belum diisi",
      email: "Email belum diisi",
      city: "Belum diisi",
      job: "Belum diisi",
    });
  const { id } = useParams();

  const navigate = useNavigate();

  // Mengambil data pakar berdasarkan pakarId
  useEffect(() => {
    if (id) {
      fetchAkunById(id);  // Gunakan id yang datang dari URL
    } else {
      // Mengambil id dari localStorage jika id tidak ditemukan di URL
      const storedId = localStorage.getItem("userId");
      if (storedId) {
        fetchAkunById(storedId);
      }
    }
    
    if (pakarId) {
      const fetchPakar = async () => {
        setLoading(true);
        setError(""); // Reset error sebelum fetch
        try {
          const response = await getAkunById(pakarId); // Ambil data pakar berdasarkan pakarId
          console.log("Fetched data:", response); // Debug respons
          const pakarData = response.data;

          // Set data pakar
          setExpert({
            name: pakarData.name,
            email: pakarData.email,
            city: pakarData.city,
            job: pakarData.job,
            expertImage: pakarData.image_url, // Gantilah sesuai dengan field yang ada di response
            expertName: pakarData.name, // Gantilah sesuai dengan field yang ada di response
          });
        } catch (error) {
          console.error("Error fetching pakar data:", error);
          setError("Failed to fetch pakar details. Please try again later.");
        } finally {
          setLoading(false);
        }
      };

      fetchPakar(); // Panggil fungsi untuk mengambil data pakar
    }
  }, [pakarId]);

  const fetchAkunById = async (id) => {
      setLoading(true);
      setError("");  // Reset error sebelum fetch
      try {
        const response = await getAkunById(id);
        console.log("Fetched data:", response); // Debug respons
        
        // Pastikan mengakses 'data' dari respons
      const akunData = response.data;
  
      // Set state akun dengan data yang sesuai
      setAkun({
        name: akunData.name || "Nama belum diisi",
        email: akunData.email || "Email belum diisi",
        city: akunData.city || "Belum diisi",
        job: akunData.job || "Belum diisi",
      });  
      } catch (error) {
        console.error("Error fetching akun by id:", error);
        setError("Failed to fetch account details. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

  // Fungsi untuk menghapus pesan dan mengarahkan ke halaman Rate
  const clearMessage = () => {
    setMessage(""); // Mengosongkan input
    // Arahkan pengguna ke halaman Rate setelah mengirim pesan
    navigate("/rate", { state: expert }); // Mengirim data pakar ke halaman Rate
  };

  if (loading) {
    return <p>Loading...</p>; // Menampilkan loading jika data sedang diambil
  }

  if (error) {
    return <p>{error}</p>; // Menampilkan error jika terjadi masalah saat mengambil data
  }

  if (!expert) {
    return <p>Data pakar tidak ditemukan.</p>; // Jika data pakar tidak ditemukan
  }

  return (
    <div className="min-h-screen bg-[var(--Foundation-Brown-B50,#EFECEB)] flex flex-col items-center">
      <div className="w-full px-[135px] mt-8">
        {/* Header dengan foto pakar */}
        <div className="flex items-center w-[full] h-16 g-4 border-b border-black">
          <img
            className="w-[48px] h-[48px] flex-shrink mr-4 rounded-[8px]"
            src={foto} // Menampilkan foto pakar yang dipilih
            alt="Hero"
          />
          <p className="text-black font-inter text-[20px] font-normal leading-normal">
            pakar2 {/* Menampilkan nama pakar */}
          </p>
        </div>

        {/* Chat messages */}
        <div className="inline-flex flex-col gap-[18px] mt-[40px] w-full">
          {/* Pesan pakar */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-1 mb-[18px]">
              <img className="w-[32px] h-[32px] rounded-[8px] mr-1" src={foto} alt="Jumie Wong" />
              <p>Pakar 2</p>
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
              <p>{akun.name}</p>
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
