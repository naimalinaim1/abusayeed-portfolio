import { useEffect } from "react";
import GoTop from "../../components/GoTop";
import useTitle from "../../hooks/useTitle";
import ContactUsHero from "./section/ContactUsHero";
import ContactUsMain from "./section/ContactUsMain";

const ContactUs = () => {
  useEffect(() => {
    GoTop();
  }, []);
  
  useTitle({ title: "Contact Us" });

  return (
    <div>
      <ContactUsHero />
      <ContactUsMain />
    </div>
  );
};

export default ContactUs;
