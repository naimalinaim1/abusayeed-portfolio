import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// main layout
import MainLayout from "../layout/MainLayout";
import ErrorPage from "./ErrorPage";
import Loader from "../components/Loader";

// pages (using lazy loading)
const Home = lazy(() => import("../pages/Home/Home"));
const Education = lazy(() => import("../pages/Education/Education"));
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs/ContactUs"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/education/",
        element: <Education />,
      },
      {
        path: "/about-us/",
        element: <AboutUs />,
      },
      {
        path: "/contact-us/",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
