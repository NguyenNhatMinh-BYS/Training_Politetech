import React from "react";
import Banner from "./Component/Banner";
import Content from "./Component/Content";
import Footer from "@/component/Footter/Footer";
const AnnouncementPage = () => {
  return (
    <div className="relative top-[100px]">
      <Banner />
      <Content />
      <Footer />
    </div>
  );
};

export default AnnouncementPage;
