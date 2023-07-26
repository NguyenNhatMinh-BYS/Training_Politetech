import Nav from "@/component/Navigate/Nav";
import Banner from "./Components/Banner";
import Content from "./Components/Content";
import Footer from "component/Footter/Footer";

const LandingPage = () => {
  return (
    <div className="w-full bg-white ">
      <Nav colorText="text-white" />
      <Banner />
      <div className=" relative z-[10] bg-white pt-[10px]">
        <Content />
      </div>
      <div className=" relative z-[10] bg-white pt-[200px]">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
