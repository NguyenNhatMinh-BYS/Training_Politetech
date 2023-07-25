import Banner from "./Component/Banner";
import Content from "./Component/Content";
import Footer from "@/component/Footter/Footer";
import Nav from "@/component/Navigate/Nav";
import { useEffect } from "react";
const AnnouncementPage = () => {
  

  return (
    <div className=" pt-[100px]">
      <Nav colorText="text-black" />

      <Banner />
      <Content />
      <Footer />
    </div>
  );
};

export default AnnouncementPage;
