const ContactUsMain = () => {
  return (
    <div className="my_container py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-12">
        {/* phone */}
        <div className="shadow-xl py-10 px-6">
          <h3 className="text-3xl font-bold text-[var(--primary-color)]">
            Phone
          </h3>
          <p className="text-lg mt-4">+88 01888-013705</p>
        </div>
        {/* whatsapp */}
        <div className="shadow-xl py-10 px-6">
          <h3 className="text-3xl font-bold text-[var(--primary-color)]">
            Whatsapp
          </h3>
          <p className="text-lg mt-4">+88 01888-013705</p>
        </div>
        {/* facebook */}
        <div className="shadow-xl py-10 px-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-3xl font-bold text-[var(--primary-color)]">
              Facebook
            </h3>
            <p className="text-lg mt-4">Click Here</p>
          </a>
        </div>
        {/* twitter */}
        <div className="shadow-xl py-10 px-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-3xl font-bold text-[var(--primary-color)]">
              Twitter
            </h3>
            <p className="text-lg mt-4">Click Here</p>
          </a>
        </div>
        {/* email */}
        <div className="shadow-xl py-10 px-6">
          <h3 className="text-3xl font-bold text-[var(--primary-color)]">
            Email
          </h3>
          <p className="text-lg mt-4">paramanik0999@gmail.com </p>
        </div>
        {/* address */}
        <div className="shadow-xl py-10 px-6">
          <h3 className="text-3xl font-bold text-[var(--primary-color)]">
            Address
          </h3>
          <p className="text-lg mt-4">Durgapur, Zirabo, Ashulia, Dhaka</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsMain;
