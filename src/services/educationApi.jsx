import { axiosInstance, isTokenValid } from "./api";

export const getAllCourses = async () => {
  try {
    const response = await axiosInstance.get("/education");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getCoursesById = async (id) => {
  if (!isTokenValid()) {
    console.warn("Token is invalid. Please log in again.");
    window.location.href = "/login";
    return;
  }
  try {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.get(`/education/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const addUserCourses = async (userCourseData) => {
  if (!isTokenValid()) {
    console.warn("Token is invalid. Please log in again.");
    window.location.href = "/login";
    return;
  }
  try {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.post(`/user-courses`, userCourseData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const updateUserCourses = async (userCourseData, id) => {
  if (!isTokenValid()) {
    console.warn("Token is invalid. Please log in again.");
    window.location.href = "/login";
    return;
  }
  try {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.put(
      `/user-courses/${id}`,
      userCourseData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

export const getUserCourses = async (id) => {
  if (!isTokenValid()) {
    console.warn("Token is invalid. Please log in again.");
    window.location.href = "/login";
    return;
  }
  try {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.get(`/user-courses/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
