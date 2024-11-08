import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <NavBar />
      )}
      <Outlet />
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer />
      )}
    </div>
  );
}
