import React from "react";
import Navigate from "../../component/Navigate/Navigate";
import Banner from "./Components/Banner";
import Content from "./Components/Content";
const LandingPage = () => {
  return (
    <div className="w-full">
      <Navigate />
      <Banner />
      <Content />
    </div>
  );
};

export default LandingPage;
