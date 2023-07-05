import imgBanner from "assets/img/BannerPage3.png";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    window.scrollBy({ top: 1 });
    window.addEventListener("scroll", () => {
      if (window.scrollY <= 0) {
        window.scrollBy({ top: 1 });
      }
    });
  }, []);
  return (
    <div className="h-[300px]">
      <img src={imgBanner} alt="BannerImg" className="h-full object-cover" />
    </div>
  );
};

export default Banner;
