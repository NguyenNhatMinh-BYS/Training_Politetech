import React from "react";
import Navigate from "../../component/Navigate/Navigate";
import Banner from "./Components/Banner";
import Content from "./Components/Content";
import Footer from "../../component/Footter/Footer";
import { useEffect } from "react";
const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white ">
      <Navigate />
      <Banner />
      <Content />
      <Footer />
    </div>
  );
};

export default LandingPage;
