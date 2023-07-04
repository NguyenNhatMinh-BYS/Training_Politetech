import imgBanner from "assets/img/BannerPage3.png";
const Banner = () => {
  return (
    <div className="h-[300px]">
      <img src={imgBanner} alt="BannerImg" className="h-full object-cover" />
    </div>
  );
};

export default Banner;
