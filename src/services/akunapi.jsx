import { axiosInstance, isTokenValid } from "./api";

export const getAllAkun = async () => {
    try {
        const response = await axiosInstance.get("/akun");
        return response.data;
    } catch (error) {
        console.error("Error fetching data", error);
        throw error;
    }
}

export const getAkunByRole = async (role_id) => {
    
    if (!isTokenValid()) {
        console.warn("Token is invalid. Please log in again.");
        window.location.href = "/login";
        return;
      }
    try {
        const token = localStorage.getItem("token");
        const response = await axiosInstance.get(`/akun/role/${role_id}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}