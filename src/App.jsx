import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";

import "./App.css";
import RootLayout from "./layouts/rootLayout";
import Contact from "./pages/landing/components/contact";
import Events from "./pages/landing/components/events";
import LandingPage from "./pages";
import About from "./pages/aboutPage/about";
import GetInvolved from "./pages/getInvolvedPage/getInvolved";

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
          path: "getInvolved",
          element: <GetInvolved />, 
        },
        {
          path: "contact",
          element: <Contact />,
        },

          // {
        //   path: "membership",
        //   element: <Membership />,
        // },
        // {
        //   path: "volunteer",
        //   element: <Volunteer />,
        // },
    
        // {
        //   path: "sponsorship",
        //   element: <Sponsor />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
