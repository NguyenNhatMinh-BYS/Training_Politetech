import React from "react";
import banner from "../../../assets/data/img/AdobeStock_93456281@2x.png";
const Banner = () => {
  return (
    <div className="h-full w-full relative">
      <img className="h-800 w-full" src={banner} alt="banner img" />
      <div className="absolute top-1/2 left-1/2  translate-y-50 translate-x-50 text-center">
        <h1 className="text-36 font-bold text-white">함께 하자,</h1>
        <h1 className="text-36 font-bold text-white">깨끗한 바다 부산으로!</h1>
        <p className="mt-50 text-white">
          깨바부는 부산지역 내 테트라포드와 습지 현황에 대한 정보를 제공하고
          있습니다.
        </p>
      </div>
    </div>
  );
};

export default Banner;
