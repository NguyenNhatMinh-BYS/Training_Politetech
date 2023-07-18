import imgBanner from "assets/img/BannerPage7.png";
import { useEffect, useRef } from "react";

const Banner = () => {
  const showTitleBanner = useRef<HTMLDivElement>(null);
  useEffect(() => {
    
    window.addEventListener("scroll", () => {
      if (window.scrollY <= 0) {
      
      }
    });
    showTitleBanner.current?.classList.remove(
      ..."top-[250px] opacity-0 pointer-events-none".split(" ")
    );
  }, []);
  return (
    <div className=" relative h-[300px] ">
      <img src={imgBanner} alt="BannerImg" className="h-full object-cover" />
      <div className="bg-[#3535357e] absolute w-full h-[300px] top-0"></div>
      <div
        className=" w-full  flex justify-center flex-col absolute top-[150px] top-[250px] transition-all duration-1000 ease-in-out opacity-0 pointer-events-none "
        ref={showTitleBanner}
      >
        <div className=" flex justify-center">
          <img
            className="mt-[-40px]  "
            src="data:image/png;base64,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"
            alt="banner img"
          />
        </div>
        <p className="text-center text-white relative mt-[20px] text-[24px]">
          깨바부의 새로운 소식을 전합니다.
        </p>
      </div>
    </div>
  );
};

export default Banner;
