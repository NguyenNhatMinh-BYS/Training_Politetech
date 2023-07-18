import React, { useEffect, useState } from "react";
import Nav from "@/component/Navigate/Nav";
import Banner from "./Components/Banner";
import Footer from "@/component/Footter/Footer";
import Content from "./Components/Content";
import ContentAdmin from "./Components/ContentAdmin";
const ContentPage = () => {
  const [role, setRole] = useState("");
  useEffect(() => {
    const dataUser = localStorage.getItem("dataUser");
    if (dataUser) {
      setRole(JSON.parse(dataUser).role);
    }
  });
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className=" pt-[100px]">
      <Nav colorText="text-black" />

      <Banner />
      {role !== "Admin" ? <Content /> : <ContentAdmin />}
      <Footer />
    </div>
  );
};

export default ContentPage;
