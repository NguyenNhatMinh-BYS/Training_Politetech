import imgBanner from "assets/img/BannerPage5.png";
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
    <div id="video" className=" relative h-[300px] ">
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
            alt="banner img "
          />
        </div>
        <p className="text-center text-white relative mt-[20px] text-[24px]">
          깨바부의 다양한 콘텐츠를 확인해보세요.
        </p>
      </div>
    </div>
  );
};

export default Banner;
