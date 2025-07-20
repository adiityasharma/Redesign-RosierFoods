import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Home page components/Navbar";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

function App() {


  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
