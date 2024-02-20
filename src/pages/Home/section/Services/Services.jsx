import MainTitle from "../../../../components/MainTitle";

import img1 from "../../../../assets/services-icon/1.png";
import img2 from "../../../../assets/services-icon/2.png";
import img3 from "../../../../assets/services-icon/3.png";
import img4 from "../../../../assets/services-icon/4.png";
import Service from "./Service";
import SubTitle from "../../../../components/SubTitle";
import Button from "../../../../components/Button";

const Services = () => {
  const services = [
    {
      id: 1,
      img: img3,
      title: "Promote Your Business Page",
      description:
        "promoting your Facebook Page for your business through paid advertising can provide several advantages and help you achieve specific marketing goals. ",
    },
    {
      id: 2,
      img: img1,
      title: "Create Facebook Page & Email",
      description:
        "Opening a Facebook Page for your business can offer various benefits and opportunities, contributing to your brand's online presence and overall success.",
    },
    {
      id: 3,
      img: img2,
      title: "Optimize & Analyze  Your Business Page",
      description:
        "A well-optimized Page can significantly enhance your online presence, increase engagement, and help you achieve your goals on the platform",
    },
    {
      id: 4,
      img: img4,
      title: "Google & Youtube Ads.",
      description:
        "Google and Youtube are two of the largest online platforms with billions of users. Running ads on these platforms can significantly increase your brand's visibility and reach a vast audience.",
    },
  ];

  return (
    <section className="mt-24 md:mt-52">
      <div className="my_container">
        {/* service title */}
        <div className="text-center">
          <MainTitle>Our Services</MainTitle>
          <SubTitle>
            Crafting professional videos for discerning professionals.
          </SubTitle>
          <div className="mt-8">
            <Button link="/contact-us/">Contact Us</Button>
          </div>
        </div>
        {/* service items */}
        <div className="grid md:grid-cols-2  mt-20 gap-x-6 gap-y-24">
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
