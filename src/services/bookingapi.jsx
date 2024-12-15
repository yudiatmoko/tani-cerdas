import { axiosInstance, isTokenValid } from "./api";

export const getBookingByUserId = async (id) => {
    if (!isTokenValid()) {
        console.warn("Token is invalid. Please log in again.");
        window.location.href = "/login";
        return;
      }
    try {
        const response = await axiosInstance.get(`/booking/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

export const deleteBookingById = async (id) => {
    try {
        const response = await axiosInstance.delete(`/booking/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data; // Mengembalikan data jika berhasil
    } catch (error) {
        console.error("Error deleting booking:", error);
        throw error;
    }
};

export const addBooking = async (bookingData) => {
    if (!isTokenValid()) {
        console.warn("Token is invalid. Please log in again.");
        window.location.href = "/login";
        return;
    }
    try {
        const token = localStorage.getItem("token");
        const response = await axiosInstance.post(`/booking`, bookingData,{
            headers:{
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data
    } catch (error) {
        console.error("Error posting data:", error);
        throw error;
    }
};
