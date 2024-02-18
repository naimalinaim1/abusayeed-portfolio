import useTitle from "../../hooks/useTitle";
import ContactUsHero from "./section/ContactUsHero";
import ContactUsMain from "./section/ContactUsMain";

const ContactUs = () => {
  useTitle({ title: "Contact Us" });

  return (
    <div>
      <ContactUsHero />
      <ContactUsMain />
    </div>
  );
};

export default ContactUs;
