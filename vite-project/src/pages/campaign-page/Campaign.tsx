import Nav from "@/component/Navigate/Nav";
import Banner from "./component/Banner";
import Footer from "component/Footter/Footer";
import Content from "./component/Content";
import { useState, useEffect } from "react";
import ContentAdmin from "./component/ContentAdmin";
const Campaign = () => {
  const [role, setRole] = useState("");
  useEffect(() => {
    const dataUser = localStorage.getItem("dataUser");
    if (dataUser) {
      setRole(JSON.parse(dataUser).role);
    }
  });
  
  return (
    <div className=" pt-[100px]">
      <Nav colorText="text-black" />

      <Banner />
      {role !== "Admin" ? <Content /> : <ContentAdmin />}
      <Footer />
    </div>
  );
};

export default Campaign;
