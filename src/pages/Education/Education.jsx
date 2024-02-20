import { useEffect } from "react";
import useTitle from "../../hooks/useTitle";
import EducationHero from "./section/EducationHero";
import EducationInfo from "./section/EducationInfo";
import GoTop from "../../components/GoTop";

const Education = () => {
  useEffect(() => {
    GoTop();
  }, []);

  useTitle({ title: "Education" });
  return (
    <div>
      <EducationHero />
      <EducationInfo />
    </div>
  );
};

export default Education;
