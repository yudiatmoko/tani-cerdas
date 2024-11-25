import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/elements/CustomButton";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import home from "../assets/home.svg";
import folder from "../assets/folders.svg";
import { getUserCourses } from "../services/educationApi";

export default function Account() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [courses, setCourses] = useState([]);
  const userId = localStorage.getItem("userId");

  const handleMenuClick = (index) => {
    setActiveIndex(index);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  useEffect(() => {
    fetchCourses(userId);
  }, []);

  const fetchCourses = async (id) => {
    try {
      const response = await getUserCourses(id);
      setCourses(response.data);
    } catch (error) {
      console.error(error);
    } finally {
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
              <img src={folder} alt="Menu 2" />
              <p className="flex-1 text-[var(--CoolGray-90,#21272A)] text-[16px] font-roboto font-medium leading-[100%]">
                Menu 2
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
        </div>

        {/* Account Details */}
        <div className="inline-flex p-12 flex-col items-start gap-12 rounded border border-gray-300 bg-white w-[712px] h-[606px]">
          {activeIndex === 0 && (
            <div className="flex flex-col flex-start gap-2 w-full">
              <h1 className="text-[42px] font-roboto font-bold leading-[1.1] text-gray-900">
                Detail Akun
              </h1>
              <div className="flex flex-col gap-4 w-[616px]">
                {/* Field: Nama Depan */}
                <div className="flex gap-4 w-full">
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="text-[var(--CoolGray-90,#21272A)] text-[14px] font-roboto font-normal leading-[140%]">
                      Nama Depan
                    </p>
                    <div className="flex h-12 px-4 py-3 items-center gap-2 w-[300px] border-b border-[var(--CoolGray-30,#C1C7CD)] bg-[var(--CoolGray-10,#F2F4F8)]">
                      <p className="flex-1 text-[var(--CoolGray-60,#697077)] text-[16px ] font-roboto font-normal leading-[140%]">
                        Budi
                      </p>
                    </div>
                  </div>

                  {/* Field: Nama Belakang */}
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="text-[var(--CoolGray-90,#21272A)] text-[14px] font-roboto font-normal leading-[140%]">
                      Nama Belakang
                    </p>
                    <div className="flex h-12 px-4 py-3 items-center gap-2 w-[300px] border-b border-[var(--CoolGray-30,#C1C7CD)] bg-[var(--CoolGray-10,#F2F4F8)]">
                      <p className="flex-1 text-[var(--CoolGray-60,#697077)] text-[16px] font-roboto font-normal leading-[140%]">
                        Santoso
                      </p>
                    </div>
                  </div>
                </div>

                {/* Field: Nama Pengguna */}
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-[var(--CoolGray-90,#21272A)] text-[14px] font-roboto font-normal leading-[140%]">
                    Nama Pengguna
                  </p>
                  <div className="flex h-12 px-4 py-3 items-center gap-2 w-full border-b border-[var(--CoolGray-30,#C1C7CD)] bg-[var(--CoolGray-10,#F2F4F8)]">
                    <p className="flex-1 text-[var(--CoolGray-60,#697077)] text-[16px] font-roboto font-normal leading-[140%]">
                      budisantoso
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
                      budi@gmail.com
                    </p>
                  </div>
                </div>

                {/* Field: Nomor Telepon */}
                <div className="flex flex-col gap-1 w-full">
                  <p className="text-[var(--CoolGray-90,#21272A)] text-[14px] font-roboto font-normal leading-[140%]">
                    Nomor Telepon
                  </p>
                  <div className="flex h-12 px-4 py-3 items-center gap-2 w-full border-b border-[var(--CoolGray-30,#C1C7CD)] bg-[var(--CoolGray-10,#F2F4F8)]">
                    <p className="flex-1 text-[var(--CoolGray-60,#697077)] text-[16px] font-roboto font-normal leading-[140%]">
                      089856781095
                    </p>
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
            <div className="flex flex-col flex-start gap-2 w-full">
              <h1 className="text-[42px] font-roboto font-bold leading-[1.1] text-gray-900">
                Menu 2
              </h1>
              <p className="text-[16px] font-roboto text-gray-700">
                Ini adalah konten untuk Menu 2. Anda dapat menambahkan lebih
                banyak informasi di sini.
              </p>
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
        </div>
      </div>
    </div>
  );
}
