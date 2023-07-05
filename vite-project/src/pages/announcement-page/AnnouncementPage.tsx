import React from "react";
import Banner from "./Component/Banner";
import Content from "./Component/Content";
import Footer from "@/component/Footter/Footer";
import Nav from "@/component/Navigate/Nav";
const AnnouncementPage = () => {
  return (
    <div className="relative top-[100px]">
      <Nav colorText="text-black" />
      <Banner />
      <Content />
      <Footer />
    </div>
  );
};

export default AnnouncementPage;
