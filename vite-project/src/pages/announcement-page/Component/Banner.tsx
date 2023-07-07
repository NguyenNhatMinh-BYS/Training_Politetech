import imgBanner from "assets/img/BannerPage3.png";
import { useEffect, useRef } from "react";

const Banner = () => {
  const showTitleBanner = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.scrollBy({ top: 1 });
    window.addEventListener("scroll", () => {
      if (window.scrollY <= 0) {
        window.scrollBy({ top: 1 });
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
        <p className="text-center text-white relative mt-[20px]">
          깨바부의 새로운 소식을 전합니다.
        </p>
      </div>
    </div>
  );
};

export default Banner;
