import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Account from "./pages/Account.jsx";
import Login from "./pages/Login.jsx";
import KonsulTani from "./pages/KonsulTani.jsx";
import BelajarTani from "./pages/BelajarTani.jsx";
import SahabatTani from "./pages/SahabatTani.jsx";
import About from "./pages/About.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/beranda",
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
