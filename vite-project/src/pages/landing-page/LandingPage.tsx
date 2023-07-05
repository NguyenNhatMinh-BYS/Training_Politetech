import Nav from "@/component/Navigate/Nav";
import Banner from "./Components/Banner";
import Content from "./Components/Content";
import Footer from "component/Footter/Footer";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        window.scrollBy({ top: 0, behavior: "smooth" });
      }
    });
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
