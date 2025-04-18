import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/rootLayout";
import Contact from "./pages/landing/components/contact";
import LandingPage from "./pages";
import About from "./pages/aboutPage/about";
import GetInvolved from "./pages/getInvolvedPage/getInvolved";
import Events from "./pages/eventsPage/events";
import BackToTopButton from "./components/BackToTop";
import Loader from "./components/loader";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  
  const sections = ["about", "events", "getInvolved", "contact"]; // Example section IDs

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "aboutUs",
          element: <About />,
        },
        {
          path: "events",
          element: <Events />,
        },
        {
          path: "getInvolved",
          element: <GetInvolved />,
        },
        // {
        //   path: "contact",
        //   element: <Contact />,
        // },
        // Add other routes here as needed
      ],
    },
  ]);

  return (
    <>
      {loading ? <Loader /> : <RouterProvider router={router} />}
      <BackToTopButton />
    </>
  );
}

export default App;
