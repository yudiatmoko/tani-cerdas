import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomButton from "../components/elements/CustomButton";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Button } from "@mui/material";
import courses from "../data/dummy/courses";

const EducationDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleNavigate = () => {
    navigate(`/belajar-tani/${id}/modules`);
  };
  const handleYoutubeClick = (url) => {
    window.open(url, "_blank");
  };
  const detail = courses.find((course) => course.id === Number(id));

  return (
    <div className="flex flex-col min-h-screen w-full justify-start gap-8 md:gap-12 items-stretch py-8 px-8 lg:py-14 lg:px-40 bg-primary-50">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12">
        <img
          className="w-full lg:w-[470px] h-auto lg:h-[312px] border border-black rounded-md object-cover"
          src={detail.image}
          alt="Detail"
        />
        <div className="flex flex-col items-start space-y-4 md:space-y-8">
          <h2 className="text-black text-xl md:text-3xl font-bold font-['Roboto']">
            {detail.title}
          </h2>
          <p className="text-pretty lg:me-52 text-black text-base md:text-lg font-normal font-['Roboto'] leading-6 md:leading-8">
            {detail.desc}
          </p>
          <CustomButton
            onClick={() => handleYoutubeClick(detail.videoUrl)}
            classname="px-4 py-2 bg-primary-500 text-white font-medium text-base md:text-lg rounded border border-primary-500 hover:bg-primary-200"
          >
            Tonton Video
          </CustomButton>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 md:gap-8">
        <h3 className="text-black w-full text-start text-lg md:text-xl font-bold font-['Roboto']">
          Materi Pembelajaran
        </h3>
        <p className="text-justify line-clamp-6 text-black text-base md:text-lg font-normal font-['Roboto'] leading-6 md:leading-8">
          {detail.courseModules &&
            detail.courseModules[0].submodules &&
            detail.courseModules[0].submodules[0].content}
        </p>
        <Button
          onClick={handleNavigate}
          variant="outlined"
          size="large"
          className="border-black rounded-md hover:bg-transparent capitalize text-center text-black text-sm md:text-lg font-medium font-['Roboto'] hover:text-primary-200 hover:border-primary-200"
        >
          Baca Selengkapnya
        </Button>
      </div>
      <div className="flex flex-col items-start gap-4 md:gap-8">
        <h3 className="text-black w-full text-start text-lg md:text-xl font-bold font-['Roboto']">
          Kontributor
        </h3>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-stretch">
          <img
            className="w-44 h-[235px] border border-black rounded-md object-cover"
            src={detail.contributors.imageUrl}
            alt="Kontributor"
          />
          <div className="flex flex-col justify-center items-stretch gap-2">
            <h4 className="text-black text-base md:text-lg font-bold font-['Roboto']">
              {detail.contributors.name}
            </h4>
            <h5 className="text-black text-sm md:text-lg font-normal font-['Roboto']">
              {detail.contributors.position} di{" "}
              {detail.contributors.institution}
            </h5>
            <p className="flex flex-row gap-2 items-center text-black text-sm md:text-lg font-normal font-['Roboto']">
              <WorkHistoryIcon /> {detail.contributors.experience}
            </p>
            <p className="flex flex-row gap-2 items-center text-black text-sm md:text-lg font-normal font-['Roboto']">
              <StarRateIcon /> {detail.contributors.rating} / 5.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDetail;