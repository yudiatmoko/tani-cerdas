        import { useLocation, useNavigate, useParams } from "react-router-dom";
        import Button from "../components/elements/Button";
        import jam from "../data/dummy/jam";
        import jamreguler from "../data/dummy/jamreguler";
        import { useEffect, useState } from "react";
        import { addBooking } from "../services/bookingapi"; // Fungsi addBooking untuk mengirimkan data booking ke API
        import { getAkunById } from "../services/akunapi";
        import foto from "../assets/dummy/img/pakar-satu.png"

        export default function Book() {
          const location = useLocation();
          const navigate = useNavigate();
          const pakar = location.state; // Retrieve pakar data from the state
          const userId = localStorage.getItem("userId"); // Ambil userId dari localStorage
          const pakarId = localStorage.getItem("pakarId");    
          const {id} = useParams()
          const [loading, setLoading] = useState(false);
          const [akun, setAkun] = useState({
              name: "Nama belum diisi",
              email: "Email belum diisi",
              city: "Belum diisi",
              job: "Belum diisi",
            });
          const [error, setError] = useState("");
          const [selectedTime, setSelectedTime] = useState(null); // State untuk waktu yang dipilih
          const [selectedDate, setSelectedDate] = useState(""); // State untuk tanggal yang dipilih

          if (!pakar) {
            return <div>No pakar data available!</div>; // In case no pakar data was passed
          }

          useEffect(() => {
            if (id) {
            fetchAkunById(id);  // Gunakan id yang datang dari URL
            } else {
              // Mengambil id dari localStorage jika id tidak ditemukan di URL
              const storedId = localStorage.getItem("pakarId");
              if (storedId) {
                fetchAkunById(storedId);
              }
            }
          }, [id]);

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
          // Fungsi untuk menangani perubahan tanggal
          const handleDateChange = (e) => {
            setSelectedDate(e.target.value);
          };

          // Fungsi untuk menangani pemilihan waktu
          const handleTimeSelection = (time) => {
            setSelectedTime(time);
          };

          // Fungsi untuk mengonfirmasi dan mengirim data booking
          const handleConfirmBooking = async () => {
            if (!selectedDate || !selectedTime) {
              alert("Silakan pilih tanggal dan waktu sebelum melanjutkan.");
              return;
            }

            const bookingData = {
              user_id: userId,
              pakar_id: pakarId, // Asumsikan pakar memiliki properti `expertId`
              date: selectedDate,
              time: selectedTime,
            };

            try {
              await addBooking(bookingData); // Kirim data ke API
              alert("Booking berhasil dibuat!");
              navigate(-1); // Kembali ke halaman sebelumnya
            } catch (error) {
              console.error("Terjadi kesalahan saat melakukan booking:", error);
              alert("Gagal melakukan booking. Silakan coba lagi.");
            }
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
                    src={foto}
                    alt={pakar.expertName}
                  />
                  <div>
                    <h5 className="text-lg font-bold">{pakar.name}</h5>
                    <p className="my-2 text-gray-600">{pakar.experiences}</p>
                  </div>
                </div>
                {/* Jam Reguler */}
                <p className="font-bold">Jam Reguler</p>
                {jamreguler.map((jamreguler, index) => (
                  <div className="flex justify-between items-center w-[270px]" key={index}>
                    <p>{jamreguler.hari}</p>
                    <p>{jamreguler.avail}</p>
                  </div>
                ))}
              </div>

              {/* Container Sebelah Kanan */}
              <div className="flex flex-col items-center lg:w-[390px] w-full p-4 bg-jadwal-book text-white rounded-md mr-[159px]">
                <p className="text-lg font-bold mb-4">Jadwalkan Booking Pakar</p>
                <div className="bg-white flex items-center justify-between p-3 w-full rounded-md">
                  <label htmlFor="tanggal" className="text-black">
                    Pilih tanggal
                  </label>
                  <input
                    type="date"
                    id="tanggal"
                    className="ml-auto p-2 text-black w-max h-max"
                    onChange={handleDateChange}
                  />
                </div>

                {/* Jam Tersedia */}
                <div className="flex flex-col items-center w-full">
                  <p className="my-8">Pilih jam yang tersedia</p>
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

                  <Button
                    classname="flex justify-center items-center p-[10px] w-[183px] h-[51px] g-[10px] rounded-[5px] bg-brown-500"
                    onClick={handleConfirmBooking} // Button Booking
                  >
                    Booking Sekarang
                  </Button>
                </div>
              </div>
            </div>
          );
        }
