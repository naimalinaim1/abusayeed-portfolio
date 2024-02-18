import Hero from "./section/Hero/Hero";
import Services from "./section/Services/Services";
import TrustBar from "./section/TrustBar/TrustBar";
import GetStarted from "./section/GetStarted/GetStarted";
import WhyNeedDigitalMarketer from "./section/WhyNeedDigitalMarketer/WhyNeedDigitalMarketer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <TrustBar />
      <GetStarted />
      <WhyNeedDigitalMarketer />
    </div>
  );
};

export default Home;
