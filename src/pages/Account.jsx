import React, { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import CustomButton from "../components/elements/CustomButton";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import BuildIcon from "@mui/icons-material/Build";
import home from "../assets/home.svg";
import folder from "../assets/folders.svg";
import { getUserCourses } from "../services/educationApi";
import { getAkunById, updateAkunById } from "../services/akunapi";
import { getBookingByUserId } from "../services/bookingapi";

export default function Account() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [courses, setCourses] = useState([]);
  const userId = localStorage.getItem("userId");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [akun, setAkun] = useState({
    name: "Nama belum diisi",
    email: "Email belum diisi",
    city: "Belum diisi",
    job: "Belum diisi",
  });
  const [booking, setBooking] = useState([]);
  const [error, setError] = useState("");
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Bulan dimulai dari 0
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  

  const handleMenuClick = (index) => {
    setActiveIndex(index);
  };

  const handleChatClick = (pakarId) => {
    // Simpan ID Pakar di localStorage jika diperlukan
    localStorage.setItem("pakarId", pakarId);
    
    // Arahkan ke halaman chat, passing pakarId sebagai bagian dari URL
    navigate("/chat");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  const handleSave = async () => {
    try {
      const updatedAkun = {
        name: akun.name,
        email: akun.email,
        city: akun.city,
        job: akun.job,
        institute: akun.institute,
        experience: akun.experience,
        image_url: akun.image_url,
      };
      await updateAkunById(id, updatedAkun); // Mengupdate akun berdasarkan id
      alert("Data berhasil disimpan!");
    } catch (error) {
      console.error("Error updating akun:", error);
      setError("Failed to update account. Please try again later.");
    }
  };

  useEffect(() => {
    fetchCourses(userId);
    if (id) {
      fetchAkunById(id);  // Gunakan id yang datang dari URL
    } else {
      // Mengambil id dari localStorage jika id tidak ditemukan di URL
      const storedId = localStorage.getItem("userId");
      if (storedId) {
        fetchAkunById(storedId);
      }
    }
    fetchBookingById(userId)
    
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

  

  const fetchCourses = async (id) => {
    try {
      const response = await getUserCourses(id);
      setCourses(response.data);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const fetchBookingById = async (id) => {
    try {
      const response = await getBookingByUserId(id);
      console.log("Booking Response:", response);  // Cek format data yang diterima
      const formattedBookings = response.data.map((booking) => ({
        ...booking,
        date: formatDate(booking.date),
      }));
      setBooking(formattedBookings);
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };

  console.log("Rendering Account component");
  return (
    <div className="min-h-screen bg-[var(--Foundation-Brown-B50,#EFECEB)] grid justify-center">
      <div className="grid grid-cols-[256px_auto] gap-8 mt-8">
        {/* Sidebar Menu */}
        <div className="flex flex-col items-center w-[256px] h-[606px] p-6 gap-0 bg-[var(--Default-White,#FFF)]">
          <div className="w-full">
            <button
              className={`flex px-3 items-center gap-2 w-full p-2 text-left ${
                activeIndex === 0 ? "bg-[var(--CoolGray-10,#F7F9FA)]" : ""
              }`}
              onClick={() => handleMenuClick(0)}
            >
              <img src={home} alt="Detail Akun" />
              <p className="flex-1 text-[var(--CoolGray-90,#21272A)] text-[16px] font-roboto font-medium leading-[100%]">
                Detail Akun
              </p>
            </button>
          </div>

          <div className="w-full">
            <button
              className={`flex px-3 items-center gap-2 w-full p-2 text-left ${
                activeIndex === 1 ? "bg-[var(--CoolGray-10,#F7F9FA)]" : ""
              }`}
              onClick={() => handleMenuClick(1)}
            >
              <ClassOutlinedIcon />
              <p className="flex-1 text-[var(--CoolGray-90,#21272A)] text-[16px] font-roboto font-medium leading-[100%]">
                Riwayat Booking
              </p>
            </button>
          </div>

          <div className="w-full">
            <button
              className={`flex px-3 items-center gap-2 w-full p-2 text-left ${
                activeIndex === 2 ? "bg-[var(--CoolGray-10,#F7F9FA)]" : ""
              }`}
              onClick={() => handleMenuClick(2)}
            >
              <ClassOutlinedIcon />
              <p className="flex-1 text-[var(--CoolGray-90,#21272A)] text-[16px] font-roboto font-medium leading-[100%]">
                Riwayat Course
              </p>
            </button>
          </div>

          <div className="w-full">
            <button
              className={`flex px-3 items-center gap-2 w-full p-2 text-left ${
                activeIndex === 2 ? "bg-[var(--CoolGray-10,#F7F9FA)]" : ""
              }`}
              onClick={() => handleMenuClick(3)}
            >
              <BuildIcon />
              <p className="flex-1 text-[var(--CoolGray-90,#21272A)] text-[16px] font-roboto font-medium leading-[100%]">
                Update Akun
              </p>
            </button>
          </div>
        </div>

        {/* Account Details */}
        <div className="inline-flex p-12 flex-col items-start gap-12 rounded border border-gray-300 bg-white w-[712px] h-max">
            {activeIndex === 0 && (
              <div className="flex flex-col flex-start gap-2 w-full">
                <h1 className="text-[42px] font-roboto font-bold leading-[1.1] text-gray-900">
                  Detail Akun
                </h1>
                <div className="flex flex-col gap-4 w-[616px]">
                  
                  {/* Field: Nama Pengguna */}
                  <div className="flex flex-col gap-1 w-full">
                    <p className="text-[var(--CoolGray-90,#21272A)] text-[14px] font-roboto font-normal leading-[140%]">
                      Nama Pengguna
                    </p>
                    <div className="flex h-12 px-4 py-3 items-center gap-2 w-full border-b border-[var(--CoolGray-30,#C1C7CD)] bg-[var(--CoolGray-10,#F2F4F8)]">
                      <p className="flex-1 text-[var(--CoolGray-60,#697077)] text-[16px] font-roboto font-normal leading-[140%]">
                        {akun.name}
                      </p>
                    </div>
                  </div>

                  {/* Field: Alamat Email */}
                  <div className="flex flex-col gap-1 w-full">
                    <p className="text-[var(--CoolGray-90,#21272A)] text-[14px] font-roboto font-normal leading-[140%]">
                      Alamat Email
                    </p>
                    <div className="flex h-12 px-4 py-3 items-center gap-2 w-full border-b border-[var(--CoolGray-30,#C1C7CD)] bg-[var(--CoolGray-10,#F2F4F8)]">
                      <p className="flex-1 text-[var(--CoolGray-60,#697077)] text-[16px] font-roboto font-normal leading-[140%]">
                        {akun.email}
                      </p>
                    </div>
                  </div>

                  {/* Field: Kota */}
                  <div className="flex flex-col gap-1 w-full">
                    <p className="text-[var(--CoolGray-90,#21272A)] text-[14px] font-roboto font-normal leading-[140%]">
                      Kota
                    </p>
                    <div className="flex h-12 px-4 py-3 items-center gap-2 w-full border-b border-[var(--CoolGray-30,#C1C7CD)] bg-[var(--CoolGray-10,#F2F4F8)]">
                      <p className="flex-1 text-[var(--CoolGray-60,#697077)] text-[16px] font-roboto font-normal leading-[140%]">
                        {akun.city || "Belum diisi"}
                      </p>
                    </div>
                  </div>

                  {/* Field: Pekerjaan */}
                  <div className="flex flex-col gap-1 w-full">
                    <p className="text-[var(--CoolGray-90,#21272A)] text-[14px] font-roboto font-normal leading-[140%]">
                      Pekerjaan
                    </p>
                    <div className="flex h-12 px-4 py-3 items-center gap-2 w-full border-b border-[var(--CoolGray-30,#C1C7CD)] bg-[var(--CoolGray-10,#F2F4F8)]">
                      <p className="flex-1 text-[var(--CoolGray-60,#697077)] text-[16px] font-roboto font-normal leading-[140%]">
                        {akun.job}
                      </p>
                    </div>
                  </div>

                  {/* Field: Institute */}
                  <div className="flex flex-col gap-1 w-full">
                    <p className="text-[var(--CoolGray-90,#21272A)] text-[14px] font-roboto font-normal leading-[140%]">
                      Institute
                    </p>
                    <div className="flex h-12 px-4 py-3 items-center gap-2 w-full border-b border-[var(--CoolGray-30,#C1C7CD)] bg-[var(--CoolGray-10,#F2F4F8)]">
                      <p className="flex-1 text-[var(--CoolGray-60,#697077)] text-[16px] font-roboto font-normal leading-[140%]">
                        {akun.institute || "Belum diisi"}
                      </p>
                    </div>
                  </div>

                  {/* Field: Experiences */}
                  <div className="flex flex-col gap-1 w-full">
                    <p className="text-[var(--CoolGray-90,#21272A)] text-[14px] font-roboto font-normal leading-[140%]">
                      Pengalaman
                    </p>
                    <div className="flex h-12 px-4 py-3 items-center gap-2 w-full border-b border-[var(--CoolGray-30,#C1C7CD)] bg-[var(--CoolGray-10,#F2F4F8)]">
                      <p className="flex-1 text-[var(--CoolGray-60,#697077)] text-[16px] font-roboto font-normal leading-[140%]">
                        {akun.experience ? `${akun.experience} tahun` : "Belum diisi"}
                      </p>
                    </div>
                  </div>

                  {/* Field: Image URL */}
                  <div className="flex flex-col gap-1 w-full">
                    <p className="text-[var(--CoolGray-90,#21272A)] text-[14px] font-roboto font-normal leading-[140%]">
                      Gambar Profil
                    </p>
                    <div className="flex h-12 px-4 py-3 items-center gap-2 w-full border-b border-[var(--CoolGray-30,#C1C7CD)] bg-[var(--CoolGray-10,#F2F4F8)]">
                      {akun.image_url ? (
                        <img
                          src={`your_image_url_base_path/${akun.image_url}`}  // Ganti dengan path gambar yang sesuai
                          alt="Profile"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <p className="flex-1 text-[var(--CoolGray-60,#697077)] text-[16px] font-roboto font-normal leading-[140%]">
                          Gambar belum tersedia
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Logout Button */}
                  <div className="flex justify-end items-center gap-4 w-full">
                    <CustomButton
                      classname="px-4 py-2 bg-brown-300 text-white font-medium text-lg rounded border-2 border-brown-300 hover:bg-brown-200"
                      onClick={handleLogout}
                    >
                      Keluar
                    </CustomButton>
                  </div>
                </div>
              </div>
            )}


          {activeIndex === 1 && (
            <div className="flex flex-col flex-start gap-4 w-full">
              <h1 className="text-[42px] font-roboto font-bold leading-[1.1] text-gray-900">
                Riwayat Booking
              </h1>
              {/* Menampilkan Riwayat Booking */}
              <div className="flex flex-col gap-2">
              <div className="flex bg-gray-200 p-2 rounded-t-lg">
              <div className="flex-1 font-medium text-gray-700 text-center">ID Pakar</div>
              <div className="flex-1 font-medium text-gray-700 text-center">Nama Pakar</div>
              <div className="flex-1 font-medium text-gray-700 text-center">Tanggal</div>
              <div className="flex-1 font-medium text-gray-700 text-center">Waktu</div>
              <div className="flex-1 font-medium text-gray-700 text-center">Chat</div>
              </div>
                {booking.map((booking, index) => (
                  
                  <div
                    key={index}
                    className="flex justify-between items-center text-center bg-gray-100 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
                  >
                    {/* Data Booking */}
                    <div className="flex-1 text-gray-600">{booking.id}</div>
                    <div className="flex-1 text-gray-600">{booking.pakar_name}</div>
                    <div className="flex-1 text-gray-600">{booking.date}</div>
                    <div className="flex-1 text-gray-600">{booking.time}</div>
                    <div className="flex-1">
                      <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400"
                        onClick={() => handleChatClick(booking.id)}
                      >
                        Chat
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeIndex === 2 && (
            <div className="flex flex-col flex-start gap-4 w-full">
              <h1 className="text-[42px] font-roboto font-bold leading-[1.1] text-gray-900">
                Riwayat Course
              </h1>
              <ul className="pl-5 text-lg mt-4 list-none">
                {courses.map((course) => (
                  <li
                    key={course.id}
                    className="bg-gray-100 p-4 rounded-lg shadow-md mb-2 transition-transform transform hover:scale-105 cursor-pointer"
                    onClick={() =>
                      navigate(`/belajar-tani/${course.course_id}`)
                    }
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">
                        {course.course_title}
                      </span>
                      <span
                        className={`text-sm ${
                          course.is_complete ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {course.is_complete ? "(Selesai)" : "(Belum Selesai)"}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeIndex === 3 && (
            <div className="flex flex-col flex-start gap-2 w-full">
              <h1 className="text-[42px] font-roboto font-bold leading-[1.1] text-gray-900">
                Pengaturan Akun
              </h1>
              <div className="flex flex-col gap-4 w-[616px]">
                {/* Field: Nama Pengguna */}
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-[var(--CoolGray-90,#21272A)] text-[14px] font-roboto font-normal leading-[140%]">
                    Nama Pengguna
                  </p>
                  <div className="flex h-12 px-4 py-3 items-center gap-2 w-full border-b border-[var(--CoolGray-30,#C1C7CD)] bg-[var(--CoolGray-10,#F2F4F8)]">
                    <input
                      type="text"
                      value={akun.name}
                      onChange={(e) => setAkun({ ...akun, name: e.target.value })}
                      className="flex-1 text-[var(--CoolGray-60,#697077)] text-[16px] font-roboto font-normal leading-[140%] bg-transparent border-none outline-none"
                    />
                  </div>
                </div>

                {/* Field: Alamat Email */}
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-[var(--CoolGray-90,#21272A)] text-[14px] font-roboto font-normal leading-[140%]">
                    Alamat Email
                  </p>
                  <div className="flex h-12 px-4 py-3 items-center gap-2 w-full border-b border-[var(--CoolGray-30,#C1C7CD)] bg-[var(--CoolGray-10,#F2F4F8)]">
                    <input
                      type="email"
                      value={akun.email}
                      onChange={(e) => setAkun({ ...akun, email: e.target.value })}
                      className="flex-1 text-[var(--CoolGray-60,#697077)] text-[16px] font-roboto font-normal leading-[140%] bg-transparent border-none outline-none"
                    />
                  </div>
                </div>

                {/* Field: City */}
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-[var(--CoolGray-90,#21272A)] text-[14px] font-roboto font-normal leading-[140%]">
                    Kota
                  </p>
                  <div className="flex h-12 px-4 py-3 items-center gap-2 w-full border-b border-[var(--CoolGray-30,#C1C7CD)] bg-[var(--CoolGray-10,#F2F4F8)]">
                    <input
                      type="text"
                      value={akun.city || ""}
                      onChange={(e) => setAkun({ ...akun, city: e.target.value })}
                      className="flex-1 text-[var(--CoolGray-60,#697077)] text-[16px] font-roboto font-normal leading-[140%] bg-transparent border-none outline-none"
                    />
                  </div>
                </div>

                {/* Field: Job */}
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-[var(--CoolGray-90,#21272A)] text-[14px] font-roboto font-normal leading-[140%]">
                    Pekerjaan
                  </p>
                  <div className="flex h-12 px-4 py-3 items-center gap-2 w-full border-b border-[var(--CoolGray-30,#C1C7CD)] bg-[var(--CoolGray-10,#F2F4F8)]">
                    <input
                      type="text"
                      value={akun.job || ""}
                      onChange={(e) => setAkun({ ...akun, job: e.target.value })}
                      className="flex-1 text-[var(--CoolGray-60,#697077)] text-[16px] font-roboto font-normal leading-[140%] bg-transparent border-none outline-none"
                    />
                  </div>
                </div>

                {/* Field: Institute */}
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-[var(--CoolGray-90,#21272A)] text-[14px] font-roboto font-normal leading-[140%]">
                    Institute
                  </p>
                  <div className="flex h-12 px-4 py-3 items-center gap-2 w-full border-b border-[var(--CoolGray-30,#C1C7CD)] bg-[var(--CoolGray-10,#F2F4F8)]">
                    <input
                      type="text"
                      value={akun.institute || ""}
                      onChange={(e) => setAkun({ ...akun, institute: e.target.value })}
                      className="flex-1 text-[var(--CoolGray-60,#697077)] text-[16px] font-roboto font-normal leading-[140%] bg-transparent border-none outline-none"
                    />
                  </div>
                </div>

                {/* Field: Experiences */}
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-[var(--CoolGray-90,#21272A)] text-[14px] font-roboto font-normal leading-[140%]">
                    Pengalaman
                  </p>
                  <div className="flex h-12 px-4 py-3 items-center gap-2 w-full border-b border-[var(--CoolGray-30,#C1C7CD)] bg-[var(--CoolGray-10,#F2F4F8)]">
                    <input
                      type="number"
                      value={akun.experience || ""}
                      onChange={(e) => setAkun({ ...akun, experience: e.target.value })}
                      className="flex-1 text-[var(--CoolGray-60,#697077)] text-[16px] font-roboto font-normal leading-[140%] bg-transparent border-none outline-none"
                      placeholder="Tahun pengalaman"
                    />
                  </div>
                </div>

                {/* Field: Image URL */}
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-[var(--CoolGray-90,#21272A)] text-[14px] font-roboto font-normal leading-[140%]">
                    Gambar Profil
                  </p>
                  <div className="flex h-12 px-4 py-3 items-center gap-2 w-full border-b border-[var(--CoolGray-30,#C1C7CD)] bg-[var(--CoolGray-10,#F2F4F8)]">
                    <input
                      type="file"
                      onChange={(e) => setAkun({ ...akun, image_url: e.target.files[0] })}
                      className="flex-1 text-[var(--CoolGray-60,#697077)] text-[16px] font-roboto font-normal leading-[140%] bg-transparent border-none outline-none"
                    />
                  </div>
                </div>

                {/* Save Changes Button */}
                <div className="flex justify-end items-center gap-4 w-full">
                  <CustomButton
                    classname="px-4 py-2 bg-brown-300 text-white font-medium text-lg rounded border-2 border-brown-300 hover:bg-brown-200"
                    onClick={handleSave} // Ganti handleLogout dengan handleSave
                  >
                    Simpan Perubahan
                  </CustomButton>
                </div>
              </div>
            </div>
          )}


        </div>
      </div>
    </div>
  );
}