import Button from "../../../../components/Button";
import MainTitle from "../../../../components/MainTitle";
import SubTitle from "../../../../components/SubTitle";

const WhyNeedDigitalMarketer = () => {
  return (
    <section className="my-20 md:my-52 ">
      <div className="my_container">
        {/* title */}
        <div className="text-center">
          <MainTitle>Do You Know</MainTitle>
          <SubTitle>
            <span className="block md:w-[85%] lg:w-[65%] mx-auto">
              Digital marketing is vital for global reach, cost-effectiveness,
              targeted advertising, and measurable results.
            </span>
          </SubTitle>
        </div>
        <div className="mt-24 px-14 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
            {/* item */}
            <div className="shadow-lg md:shadow-xl text-center px-7 py-7 lg:px-12 lg:py-14 ">
              <h2 className="text-5xl md:text-6xl font-bold primary-color">
                54%
              </h2>
              <p className="text-lg font-medium mt-5">
                of consumers want to see more video content from their brands.
              </p>
            </div>
            {/* item */}
            <div className="shadow-lg md:shadow-xl text-center px-7 py-7 lg:px-12 lg:py-14 ">
              <h2 className="text-5xl md:text-6xl font-bold primary-color">
                65%
              </h2>
              <p className="text-lg font-medium mt-5">
                of marketers are satisfied with their digital marketing.
              </p>
            </div>
            {/* item */}
            <div className="shadow-lg md:shadow-xl text-center px-7 py-7 lg:px-12 lg:py-14 ">
              <h2 className="text-5xl md:text-6xl font-bold primary-color">
                95%
              </h2>
              <p className="text-lg font-medium mt-5">
                of viewers retain a message when they watch it in a ads or
                video.
              </p>
            </div>
          </div>
          {/* button */}
          <div className="mt-16 text-center">
            <Button link="/contact-us/">Hire Me</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNeedDigitalMarketer;
