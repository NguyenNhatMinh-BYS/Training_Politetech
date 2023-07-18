import Content from "./component/Content";
import Nav from "@/component/Navigate/Nav";
import Footer from "@/component/Footter/Footer";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
const ManagerUser = () => {
  const { setAuth } = useAuth();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    const dataUser = localStorage.getItem("dataUser");
    if (dataUser) {
      const x = JSON.parse(dataUser);
      console.log(x.role);

      setAuth(x.role);
    }
  }, []);

  return (
    <div className=" pt-[100px]">
      <Nav colorText="text-black" />

      <Content />
      <Footer />
    </div>
  );
};

export default ManagerUser;
