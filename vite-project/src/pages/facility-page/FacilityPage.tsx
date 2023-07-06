import React from "react";
import Nav from "@/component/Navigate/Nav";
import Banner from "./component/Banner";
import Footer from "@/component/Footter/Footer";
import Content from "./component/Content";
const FacilityPage = () => {
  return (
    <div className=" pt-[100px]">
      <Nav colorText="text-black" />

      <Banner />
      <Content />
      <Footer />
    </div>
  );
};

export default FacilityPage;
