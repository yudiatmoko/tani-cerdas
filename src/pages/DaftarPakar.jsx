import { useState, useEffect } from "react"; 
import Button from "../components/elements/Button";
import { useNavigate } from "react-router-dom";
import { getAkunByRole } from "../services/akunapi";

export default function DaftarPakar() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const [pakarList, setPakarList] = useState([]);
  const [bookedPakar, setBookedPakar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAkunByRole();
  }, []);

  const fetchAkunByRole = async () => {
    setLoading(true);
    try {
      const response = await getAkunByRole(2);
      console.log("Fetched data:", response); // Debug respons
      if (Array.isArray(response)) {
        setPakarList(response);
      } else if (response?.data) {
        setPakarList(response.data); // Jika respons berisi objek dengan array di dalamnya
      } else {
        console.warn("Unexpected response format:", response);
        setPakarList([]);
      }
    } catch (error) {
      console.error("Error fetching akun by role:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChatClick = (pakarData) => {
    navigate("/chat", { state: pakarData });
  };

  const handleBookClick = (pakarData) => {
    setBookedPakar(pakarData);
    navigate("/book", { state: pakarData });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!Array.isArray(pakarList) || pakarList.length === 0) {
    return <p>Tidak ada data pakar ditemukan</p>;
  }

  return (
    <div className="min-h-screen justify-center items-center px-96">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 place-items-center place-content-center">
        {pakarList.map((pakar, index) => {
          const experiences = currentYear - pakar.startYear;
          const rating = pakar.rating || 4;

          const isBooked = bookedPakar && bookedPakar.name === pakar.name;

          return (
            <div className="bg-daftar-pakar service-item w-full" key={index}>
              <img
                className="rounded-[8px]"
                width={176}
                height={235}
                src={pakar.expertImage || "/default-image.png"}
                alt={pakar.name}
              />
              <div className="flex flex-col justify-start w-full gap-4">
                <h5 className="typhography-nama">{pakar.name}</h5>
                <p className="text-black text-left font-inter text-[10px] font-medium leading-4 tracking-tight">
                  {pakar.expertDesc}
                </p>
                <div className="flex items-center space-x-2">
                  <div className="flex-center-padding">{experiences} years</div>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      i < rating ? <span key={i}>★</span> : <span key={i} className="text-gray-300">★</span>
                    ))}
                  </div>
                </div>
                <Button
                  classname={`button-${isBooked ? "chat" : "book"} typhography-${isBooked ? "chat" : "book"}-button w-fit ms-40`} 
                  onClick={() => isBooked ? handleChatClick(pakar) : handleBookClick(pakar)}
                >
                  {isBooked ? "Chat" : "Book"}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
