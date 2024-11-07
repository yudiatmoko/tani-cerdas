import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Account from "./pages/Account.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import KonsulTani from "./pages/KonsulTani.jsx";
import BelajarTani from "./pages/BelajarTani.jsx";
import SahabatTani from "./pages/SahabatTani.jsx";
import About from "./pages/About.jsx";
import EducationDetail from "./pages/EducationDetail.jsx";
import Course from "./pages/Course.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/konsul-tani",
        element: <KonsulTani />,
      },
      {
        path: "/belajar-tani",
        element: <BelajarTani />,
      },
      {
        path: "/sahabat-tani",
        element: <SahabatTani />,
      },
      {
        path: "/tentang-kami",
        element: <About />,
      },
      {
        path: "/akun",
        element: <Account />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/belajar-tani/:id",
        element: <EducationDetail />,
      },
      {
        path: "/belajar-tani/:id/modules",
        element: <Course />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
