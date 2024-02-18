import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1A2233] border-t-8 border-[var(--secondary-color)]">
        <div className="my_container text-center md:text-left">
          {/* footer link */}
          <div className="py-36 pb-16 md:pb-36">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-0 lg:grid-cols-4 text-gray-300">
              {/* logo and social link */}
              <aside>
                <p className="text-4xl font-bold">Abu Sayeed inc.</p>
                <p className="text-lg my-5 text-gray-300">
                  I am a digital marketer. I try my best to promote the product,
                  service or brand to the target audience using digital
                  channels, platforms and technologies
                </p>
              </aside>
              {/* services link */}
              <nav className="space-y-6 lg:pl-16">
                <header className="text-2xl font-bold text-white mb-8">
                  Services
                </header>
                <p>
                  <a className="text-xl cursor-pointer inline-block hover:text-white">
                    Create a Facebook Page
                  </a>
                </p>
                <p>
                  <a className="text-xl cursor-pointer inline-block hover:text-white">
                    Optimize Your Page
                  </a>
                </p>
                <p>
                  <a className="text-xl cursor-pointer inline-block hover:text-white">
                    Promote Your Page
                  </a>
                </p>
                <p>
                  <a className="text-xl cursor-pointer inline-block hover:text-white">
                    Utilize Facebook Groups
                  </a>
                </p>
              </nav>
              {/* More */}
              <nav className="space-y-6 lg:pl-20">
                <header className="text-2xl font-bold text-white mb-8">
                  More
                </header>
                <p>
                  <Link
                    to="/education/"
                    className="text-xl cursor-pointer inline-block hover:text-white"
                  >
                    Education
                  </Link>
                </p>
                <p>
                  <Link
                    to="/about-us/"
                    className="text-xl cursor-pointer inline-block hover:text-white"
                  >
                    About Us
                  </Link>
                </p>
                <p>
                  <Link
                    to="/contact-us/"
                    className="text-xl cursor-pointer inline-block hover:text-white"
                  >
                    Contact Us
                  </Link>
                </p>
              </nav>
              {/* Contact us */}
              <nav className="space-y-6">
                <header className="text-2xl font-bold text-white mb-8">
                  Contact Us
                </header>
                <p>
                  <a className="text-xl cursor-pointer inline-block">
                    Phone: <span className="text-lg">+88 01888013705</span>
                  </a>
                </p>
                <p>
                  <a className="text-xl cursor-pointer inline-block ">
                    Email:{" "}
                    <span className="text-lg">paramanik0999@gmail.com</span>
                  </a>
                </p>
                <p>
                  <a className="text-xl cursor-pointer inline-block">
                    Address:{" "}
                    <span className="text-lg">
                      Zirabo, Ashulia, Dhaka, Bangladesh.
                    </span>
                  </a>
                </p>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
