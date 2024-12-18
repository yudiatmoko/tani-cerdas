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

export const updateAkunById = async () => {
    const id = localStorage.getItem("userId")

    if (!isTokenValid()) {
        console.warn("Token is invalid. Please log in again.");
        window.location.href = "/login";
        return;
      }
    try {
        const token = localStorage.getItem("token");
        const response = await axiosInstance.put(`/akun/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
}

export const getAkunById = async () => {
    const id = localStorage.getItem("userId");

    if (!id) {
        console.warn("User ID is missing.");
        window.location.href = "/login";  // Redirect jika id tidak ada
        return;
    }

    if (!isTokenValid()) {
        console.warn("Token is invalid. Please log in again.");
        window.location.href = "/login";    
        return;
    }

    try {
        const token = localStorage.getItem("token");
        if (!token) {
            console.warn("Token is missing.");
            window.location.href = "/login";  // Redirect jika token tidak ada
            return;
        }

        const response = await axiosInstance.get(`/akun/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;  // Kembalikan data yang diterima dari API
    } catch (error) {
        if (error.response) {
            // Server response error
            console.error("Error fetching data:", error.response.data);
        } else if (error.request) {
            // No response from server
            console.error("No response from server:", error.request);
        } else {
            // General error
            console.error("Error:", error.message);
        }
        throw error;
    }
};
