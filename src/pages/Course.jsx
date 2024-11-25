import React, { useState, useEffect } from "react";
import SideBarCourse from "../components/elements/SideBarCourse";
import { useParams } from "react-router-dom";
import { getCoursesById } from "../services/educationApi";
import Spinner from "../components/elements/Spinner";

const Course = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState({});
  const [courseData, setCourseData] = useState({
    moduleName: "",
    submoduleName: "",
    content: "",
  });

  useEffect(() => {
    fetchCourseById(id);
  }, [id]);

  const fetchCourseById = async (id) => {
    setLoading(true);
    try {
      const response = await getCoursesById(id);
      setCourse(response);
    } catch (error) {
      console.error(
        error.response?.data?.message || "Error fetching course detail"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (course && course.courseModules && course.courseModules.length > 0) {
      const firstModule = course.courseModules[0];
      const firstSubmodule = firstModule.submodules[0];
      setCourseData({
        moduleName: firstModule.moduleTitle,
        submoduleName: firstSubmodule.title,
        content: firstSubmodule.content,
      });
    }
  }, [course]);

  return (
    <>
      {loading ? (
        <div className="flex min-h-screen justify-center items-center h-40">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row w-full justify-between items-center">
          <SideBarCourse setCourseData={setCourseData} course={course} />
          <div className="w-full min-h-screen max-h-full p-8 lg:p-10">
            <h1 className="text-center text-black text-2xl font-bold font-['Roboto'] leading-10">
              {courseData.moduleName}
            </h1>
            <h2 className="text-center text-black text-xl font-semibold font-['Roboto'] leading-10 mt-4">
              {courseData.submoduleName}
            </h2>
            <p className="text-justify text-black text-xl font-normal font-['Roboto'] mt-4">
              {courseData.content}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Course;
