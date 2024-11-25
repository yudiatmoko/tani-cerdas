import React, { useState } from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import TestimonialModal from "./TestimonialModal";
import { updateUserCourses } from "../../services/educationApi";

const SideBarCourse = (props) => {
  const { setCourseData, course } = props;
  const [isOpen, setIsOpen] = useState(true);
  const [openModule, setOpenModule] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseId, setCourseId] = useState(null);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleDropdown = (moduleIndex) => {
    setOpenModule(openModule === moduleIndex ? null : moduleIndex);
  };

  const handleClickSubmodule = (module, submoduleTitle, content) => {
    setCourseData({
      moduleName: module.moduleTitle,
      submoduleName: submoduleTitle,
      content,
    });
  };

  const handleFinishCourse = () => {
    setCourseId(course.id);
    setIsModalOpen(true);
  };

  const handleSubmitTestimonial = async (testimonial) => {
    const userCourseData = {
      is_complete: 1,
      testimonials: testimonial,
    };
    try {
      const response = await updateUserCourses(userCourseData, courseId);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`lg:min-h-screen lg:max-h-full h-fit w-full lg:max-w-fit px-8 py-10 lg:px-16 justify-start items-start ${
        isOpen ? "bg-primary-75" : ""
      }`}
    >
      {isOpen && (
        <div className="flex flex-col justify-start items-stretch">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-start text-black text-3xl font-bold font-['Roboto'] leading-10">
              Daftar Modul
            </h2>
            <div
              className="p-2 bg-primary-200 rounded-full text-black hover:cursor-pointer hover:bg-primary-100"
              onClick={handleToggleSidebar}
            >
              <KeyboardDoubleArrowLeftIcon fontSize="large" />
            </div>
          </div>
          <ul className="flex flex-col gap-4 text-black justify-center items-center mt-8">
            {course.courseModules &&
            Array.isArray(course.courseModules) &&
            course.courseModules.length > 0 ? (
              course.courseModules.map((module) => (
                <li key={module.moduleId} className="w-full">
                  <button
                    className="flex flex-row justify-between w-full items-start hover:text-slate-700"
                    onClick={() => handleToggleDropdown(module.moduleId)}
                  >
                    <h3 className="text-start text-lg font-bold font-['Roboto'] pe-1">
                      {module.moduleTitle}
                    </h3>
                    {openModule === module.moduleId ? (
                      <ArrowDropUpIcon fontSize="small" />
                    ) : (
                      <ArrowDropDownIcon fontSize="small" />
                    )}
                  </button>
                  {openModule === module.moduleId && (
                    <ul className="flex ps-2 text-black gap-2 flex-col justify-center items-start mt-2 list-inside list-disc">
                      {module.submodules.map((submodule) => (
                        <li
                          key={submodule.submoduleId}
                          onClick={() =>
                            handleClickSubmodule(
                              module,
                              submodule.title,
                              submodule.content
                            )
                          }
                          className="hover:text-slate-700 cursor-pointer"
                        >
                          {submodule.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))
            ) : (
              <li className="w-full text-center">No modules available</li>
            )}
          </ul>
          <div className="mt-8">
            <button
              onClick={handleFinishCourse}
              className="w-full bg-primary-200 rounded-full text-white py-2 hover:bg-primary-300"
            >
              Selesai
            </button>
          </div>
        </div>
      )}
      {!isOpen && (
        <div
          className="max-h-fit max-w-fit p-2 bg-primary-200 rounded-full text-black hover:cursor-pointer hover:bg-primary-100"
          onClick={handleToggleSidebar}
        >
          <KeyboardDoubleArrowRightIcon fontSize="large" />
        </div>
      )}
      <TestimonialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitTestimonial}
        courseId={courseId}
      />
    </div>
  );
};

export default SideBarCourse;
