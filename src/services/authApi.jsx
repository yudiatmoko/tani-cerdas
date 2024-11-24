import { axiosInstance } from "./api";

export const login = async (loginData) => {
  try {
    const response = await axiosInstance.post("/login", loginData);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const register = async (register) => {
  try {
    const response = await axiosInstance.post("/register", register);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

// export const register = async (registerData) => {
//     if (!isTokenValid()) {
//       console.warn("Token is invalid. Please log in again.");
//       window.location.href = '/login';
//       return;
//     }
  
//     try {
//       const response = await axiosInstance.post("/register", registerData);
//       return response.data;
//     } catch (error) {
//       console.error("Error posting data:", error);
//       throw error;
//     }
//   };
