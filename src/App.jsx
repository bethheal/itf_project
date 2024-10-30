import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import RootLayout from "./layouts/rootLayout";
import Contact from "./pages/landing/components/contact";
import Sponsor from "./pages/landing/components/sponsor";
import Volunteer from "./pages/landing/components/volunteer";
import Membership from "./pages/landing/components/member";
import Events from "./pages/landing/components/events";
import About from "./pages/landing/components/about";
import LandingPage from "./pages";

function App() {
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
          path: "membership",
          element: <Membership />,
        },
        {
          path: "volunteer",
          element: <Volunteer />,
        },

        {
          path: "sponsorship",
          element: <Sponsor />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
