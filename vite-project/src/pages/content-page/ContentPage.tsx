import React from 'react';
import Nav from '@/component/Navigate/Nav';
import Banner from './Components/Banner';
import Footer from '@/component/Footter/Footer';
import Content from "./Components/Content"
const ContentPage = () => {
    return (
        <div className=" pt-[100px]">
        <Nav colorText="text-black" />
  
        <Banner />
        <Content/>
        <Footer />
      </div>
    );
};

export default ContentPage;