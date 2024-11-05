import { Card } from "react-bootstrap";
import BannerImage from "/education-banner.png";
import CardEducation from "../components/elements/CardEducation";
import Courses from "../data/dummy/courses";

export default function BelajarTani() {
  const groupedCourses = Courses.reduce((acc, course) => {
    if (!acc[course.level]) {
      acc[course.level] = [];
    }
    acc[course.level].push(course);
    return acc;
  }, {});

  return (
    <>
      <div>
        <div
          className="bg-no-repeat p-20 justify-center items-center flex"
          style={{
            height: "596px",
            backgroundImage: `url(${BannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Card className="px-4 py-14 bg-primary-400 rounded-3xl shadow-md flex-col justify-start items-center gap-6 inline-flex">
            <Card.Title className="text-center text-primary-50 text-5xl font-bold font-['Roboto']">
              Improvisasi dan Inovasi
            </Card.Title>
            <Card.Text className="hidden lg:block text-center text-primary-75 text-2xl font-normal font-['Roboto']">
              Platform Tani Cerdas mendorong improvisasi dan inovasi di sektor
              pertanian dengan memberdayakan petani untuk menciptakan teknik
              baru, mengadopsi teknologi modern, serta mengembangkan peralatan
              cerdas yang mampu meningkatkan produktivitas secara berkelanjutan.
              Tani Cerdas berperan sebagai mitra bagi petani dalam menghadapi
              tantangan pertanian modern, membantu mereka untuk tumbuh dan
              beradaptasi dalam dunia pertanian yang terus berkembang.
            </Card.Text>
          </Card>
        </div>
      </div>
      <div>
        {Object.keys(groupedCourses).map((level) => (
          <div key={level}>
            <h2 className="text-center text-3xl font-bold font-['Roboto'] py-8 bg-white">
              {level}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center bg-primary-50 w-full h-auto gap-12 lg:gap-24 p-8 lg:p-20">
              {groupedCourses[level].map((course, index) => (
                <CardEducation
                  key={index}
                  image={course.image}
                  title={course.title}
                  level={course.level}
                  modules={course.modules}
                  duration={course.duration}
                  desc={course.desc}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
