import Hero from "./section/Hero/Hero";
import Services from "./section/Services/Services";
import GetStarted from "./section/GetStarted/GetStarted";
import WhyNeedDigitalMarketer from "./section/WhyNeedDigitalMarketer/WhyNeedDigitalMarketer";
import { useEffect } from "react";
import GoTop from "../../components/GoTop";

const Home = () => {
  useEffect(() => {
    GoTop();
  }, []);

  return (
    <div>
      <Hero />
      <Services />
      <GetStarted />
      <WhyNeedDigitalMarketer />
    </div>
  );
};

export default Home;
