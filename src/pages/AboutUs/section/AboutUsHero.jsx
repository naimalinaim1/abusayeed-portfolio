import { Link } from "react-router-dom";
import image from "../../../assets/image/myPic.jpg";

const AboutUsHero = () => {
  return (
    <>
      <div className="bg-gray-100 p-8 mb-28">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <img
              src={image}
              alt="About Us"
              className="rounded-full h-32 w-32 object-cover"
            />
          </div>

          <h2 className="text-3xl font-semibold mb-4">
            About{" "}
            <span className="text-[var(--primary-color)]">Abu Sayeed Inc.</span>
          </h2>

          <p className="text-gray-700 mb-6">
            <p className="text-gray-700 mb-6">
              Hello, I{"'"}m Abu Sayeed, the founder of Abu Sayeed Inc. I
              established this digital marketing company in 2024 with a passion
              for helping businesses thrive in the online landscape. With a keen
              understanding of the ever-evolving digital landscape,{" "}
              <strong>Abu Sayeed Inc</strong> provides cutting-edge digital
              marketing solutions that drive results.
            </p>
          </p>

          <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-700 mb-6">
            At <strong>Abu Sayeed Inc.</strong>, our mission is to empower
            businesses with strategic and data-driven digital marketing
            strategies. We believe in creating customized plans that not only
            increase online visibility but also engage and convert the target
            audience.
          </p>

          <h3 className="text-xl font-semibold mb-4">What Sets Us Apart</h3>
          <p className="text-gray-700 mb-6">
            What sets us apart is our commitment to staying ahead of the digital
            curve. From SEO and social media marketing to content creation and
            analytics, we offer a comprehensive suite of services tailored to
            meet the unique needs of each client. We are not just marketers; we
            are partners in your online success.
          </p>

          <h3 className="text-xl font-semibold mb-4">Core Values</h3>
          <p className="text-gray-700 mb-6">
            Our core values revolve around transparency, creativity, and
            results. We believe in open communication, innovative solutions, and
            delivering measurable outcomes for our clients. Your success is our
            success.
          </p>

          <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
          <p className="text-gray-700 mb-6">
            We adopt a data-driven approach to digital marketing. Our strategies
            are based on in-depth market research, analytics, and a deep
            understanding of your target audience. By staying updated on
            industry trends, we ensure that your brand remains relevant and
            competitive in the online space.
          </p>

          <p className="text-gray-700">
            Thank you for considering <strong>Abu Sayeed Inc.</strong>. We look
            forward to partnering with you on your digital journey, driving
            growth, and achieving online excellence together.
          </p>

          <p className="text-gray-700 mt-4">
            Feel free to{" "}
            <Link to="/contact-us/" className="text-blue-500 font-semibold">
              contact us
            </Link>{" "}
            for a consultation or to learn more about how we can elevate your
            digital presence.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUsHero;
