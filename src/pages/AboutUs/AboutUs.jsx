import useTitle from "../../hooks/useTitle";
import AboutUsHero from "./section/AboutUsHero";

const AboutUs = () => {
  useTitle({ title: "About Us" });

  return (
    <div className="my_container">
      <AboutUsHero />
    </div>
  );
};

export default AboutUs;
