import useTitle from "../../hooks/useTitle";
import EducationHero from "./section/EducationHero";
import EducationInfo from "./section/EducationInfo";

const Education = () => {
  useTitle({ title: "Education" });
  return (
    <div>
      <EducationHero />
      <EducationInfo />
    </div>
  );
};

export default Education;
