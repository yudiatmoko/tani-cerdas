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
