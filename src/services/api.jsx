import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const isTokenValid = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return false;
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    return decodedToken.exp > currentTime;
  } catch (error) {
    console.error("Token decoding failed:", error);
    return false;
  }
};

// axiosInstance.interceptors.request.use((config) => {
//   if (!isTokenValid()) {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userId");
//     window.location.href = '/login';
//   } else {
//     const token = localStorage.getItem("token");
//     config.headers['Authorization'] = `Bearer ${token}`;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });
