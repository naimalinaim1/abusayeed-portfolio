import { useEffect } from "react";
import GoTop from "../../components/GoTop";
import useTitle from "../../hooks/useTitle";
import AboutUsHero from "./section/AboutUsHero";

const AboutUs = () => {
  useEffect(() => {
    GoTop();
  }, []);
  useTitle({ title: "About Us" });

  return (
    <div className="my_container">
      <AboutUsHero />
    </div>
  );
};

export default AboutUs;
