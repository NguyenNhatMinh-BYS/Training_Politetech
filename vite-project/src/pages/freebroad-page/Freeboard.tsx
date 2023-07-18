import Nav from "@/component/Navigate/Nav";
import Banner from "./component/Banner";
import Footer from "@/component/Footter/Footer";
import Content from "./component/Content";
import { useEffect } from "react";
const Freeboard = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className=" pt-[100px]">
      <Nav colorText="text-black" />

      <Banner />
      <Content />
      <Footer />
    </div>
  );
};

export default Freeboard;
