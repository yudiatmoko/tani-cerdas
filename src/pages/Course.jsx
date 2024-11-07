import React, { useState, useEffect } from "react";
import SideBarCourse from "../components/elements/SideBarCourse";
import { useParams } from "react-router-dom";
import courses from "../data/dummy/courses";

const Course = () => {
  const { id } = useParams();
  const detail = courses.find((course) => course.id === Number(id));

  const [courseData, setCourseData] = useState({
    moduleName: "",
    submoduleName: "",
    content: "",
  });

  useEffect(() => {
    if (detail && detail.courseModules.length > 0) {
      const firstModule = detail.courseModules[0];
      const firstSubmodule = firstModule.submodules[0];
      setCourseData({
        moduleName: firstModule.moduleTitle,
        submoduleName: firstSubmodule.title,
        content: firstSubmodule.content,
      });
    }
  }, [detail]);

  return (
    <div className="flex flex-col lg:flex-row w-full justify-between items-center">
      <SideBarCourse setCourseData={setCourseData} course={detail} />
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
  );
};

export default Course;
