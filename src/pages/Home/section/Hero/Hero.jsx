import Button from "../../../../components/Button";
import myPic from "../../../../assets/image/myPic.jpg";
const Hero = () => {
  return (
    <section className="mt-16">
      <div className="my_container">
        <article className="text-center grid lg:grid-cols-2 gap-y-10 items-center">
          {/* text */}
          <div>
            <h1 className="text-[42px] leading-normal lg:text-left md:text-[3.65rem] md:leading-normal lg:text-[3rem] xl:text-[3.55rem] lg:leading-[64px] xl:leading-[80px]  font-bold">
              Hi, there
              <br />
              I am Abu Sayeed
              <br />
              Digital Marketers
            </h1>
            <p className="lg:text-left mt-10">
            <Button link="/contact-us/">Contact Us</Button>
            </p>
          </div>
          {/* image */}
          <div className="flex justify-center lg:justify-end">
            <img className="w-[340px] h-[340px] md:w-[400px] md:h-[400px] xl:h-[500px] xl:w-[500px] rounded-full" src={myPic} alt="" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
