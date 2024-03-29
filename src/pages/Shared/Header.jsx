import { Link } from "react-router-dom";
import ActiveLink from "../../components/ActiveLink";

const Header = () => {
  const headerLink = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/education/">Education</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/about-us/">About Us</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/contact-us/">Contact Us</ActiveLink>
      </li>
    </>
  );

  return (
    <header className="my_container navbar py-4 px-0 my-6">
      <div className="navbar-start w-full lg:w-80">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="space-y-5 font-bold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {headerLink}
          </ul>
        </div>
        <Link to="/">
          <h2 className="primary-color font-bold text-2xl">Abu Sayeed</h2>
        </Link>
      </div>
      <div className="navbar-end lg:w-full hidden lg:flex px-0">
        <ul className="flex gap-10 font-bold">{headerLink}</ul>
      </div>
    </header>
  );
};

export default Header;
