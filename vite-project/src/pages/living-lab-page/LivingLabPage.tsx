import Banner from "./Component/Banner";
import Content from "./Component/Content";
import Footer from "@/component/Footter/Footer";
import Nav from "@/component/Navigate/Nav";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
const LivingLabPage = () => {
  const { auth } = useAuth();
  console.log(auth);
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

export default LivingLabPage;
