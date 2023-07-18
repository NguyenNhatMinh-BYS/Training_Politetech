import Nav from "@/component/Navigate/Nav";
import Banner from "./Components/Banner";
import Content from "./Components/Content";
import Footer from "component/Footter/Footer";
import { useEffect } from "react";
import Loading from "../loading/Loading";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="w-full bg-white ">
      <Nav colorText="text-white" />
      <Banner />
      <Content />
      <Footer />
    </div>
  );
};

export default LandingPage;
