import { useState, useEffect } from "react"; // Import useState and useEffect
import Button from "../components/elements/Button";
import konsultaniHero from '../assets/dummy/img/konsultani-hero.png';
import pakar from "../data/dummy/pakar";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

export default function DaftarPakar() {
  const currentYear = new Date().getFullYear(); // Get the current year
  const navigate = useNavigate(); // Initialize the navigate function

  const [bookedPakar, setBookedPakar] = useState(null); // Track which pakar has been booked

  useEffect(() => {
    // Check if there is a pakar stored in sessionStorage
    const storedPakar = sessionStorage.getItem('bookedPakar');
    if (storedPakar) {
      setBookedPakar(JSON.parse(storedPakar)); // If found, set it in state
    }
  }, []);

  const handleChatClick = (pakarData) => {
    navigate("/chat", {
      state: pakarData, // Pass the expert data to the Chat page
    });
  };

  const handleBookClick = (pakarData) => {
    setBookedPakar(pakarData); // Mark the pakar as booked
    navigate("/book", { state: pakarData }); // Redirect to the Book page with pakar data
  };

  return (
    <div className="min-h-screen justify-center items-center px-96">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 place-items-center place-content-center">
        {pakar.map((pakar, index) => {
          const experience = currentYear - pakar.startYear;
          const rating = 4;

          const isBooked = bookedPakar && bookedPakar.expertName === pakar.expertName; // Check if this pakar is booked

          return (
            <div className="bg-daftar-pakar service-item w-full" key={index}>
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
                  classname={`button-${isBooked ? "chat" : "book"} typhography-${isBooked ? "chat" : "book"}-button w-fit ms-40`} 
                  onClick={() => isBooked ? handleChatClick(pakar) : handleBookClick(pakar)} 
                >
                  {isBooked ? "Chat" : "Book"} {/* Change text based on booked status */}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
