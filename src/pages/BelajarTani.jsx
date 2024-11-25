import { Card } from "react-bootstrap";
import BannerImage from "/education-banner.png";
import CardEducation from "../components/elements/CardEducation";
import { getAllCourses } from "../services/educationApi";
import { useEffect, useState } from "react";
import Spinner from "../components/elements/Spinner";

export default function BelajarTani() {
  const [groupedCourses, setGroupedCourses] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllCourse();
  }, []);

  const fetchAllCourse = async () => {
    setLoading(true);
    try {
      const response = await getAllCourses();
      const data = response.reduce((acc, course) => {
        if (!acc[course.level]) {
          acc[course.level] = [];
        }
        acc[course.level].push(course);
        return acc;
      }, {});
      setGroupedCourses(data);
    } catch (error) {
      console.error(
        error.response?.data?.message || "Error fetching all courses"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <div
          className="bg-no-repeat lg:p-20 p-8 justify-center items-center flex"
          style={{
            height: "596px",
            backgroundImage: `url(${BannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Card className="flex px-5 py-20 bg-primary-400 rounded-3xl shadow-md flex-col justify-start items-center gap-6">
            <Card.Title className="text-center text-primary-50 text-3xl md:text-5xl font-bold font-['Roboto']">
              Improvisasi dan Inovasi
            </Card.Title>
            <Card.Text className="hidden lg:block text-center text-primary-75 text-2xl font-normal font-['Roboto']">
              Platform Tani Cerdas mendorong improvisasi dan inovasi di sektor
              pertanian dengan memberdayakan petani untuk menciptakan teknik
              baru, mengadopsi teknologi modern, serta mengembangkan peralatan
              cerdas yang mampu meningkatkan produktivitas secara berkelanjutan.
            </Card.Text>
          </Card>
        </div>
      </div>
      <div>
        {loading ? (
          <div className="flex justify-center min-h-screen items-center h-40">
            <Spinner />
          </div>
        ) : (
          Object.keys(groupedCourses).map((level) => (
            <div key={level}>
              <h2 className="text-center text-3xl font-bold font-['Roboto'] py-8 bg-primary-400 text-white">
                {level}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center bg-primary-50 w-full h-auto gap-12 lg:gap-20 p-12 lg:p-20">
                {groupedCourses[level].map((course) => (
                  <CardEducation
                    key={course.id}
                    id={course.id}
                    image={course.image}
                    title={course.title}
                    level={course.level}
                    modules={course.modulesNum}
                    duration={course.duration}
                    desc={course.desc}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
