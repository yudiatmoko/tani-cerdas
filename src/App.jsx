import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" &&
        (location.pathname !== "/register" && <NavBar />)}
      <Outlet />
    </>
  );
}
