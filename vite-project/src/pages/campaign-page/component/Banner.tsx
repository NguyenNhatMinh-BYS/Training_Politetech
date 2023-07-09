import imgBanner from "assets/img/BannerPage6.png";
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
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAABHNCSVQICAgIfAhkiAAABQlJREFUWEfdmEtMJEUcxukZHpHHEFwC8pKVwMHMwgElkJh4IWYcE0MwMVEPmpjscpHdA67uRg4SL3gY93FSD65XYyQkJoQQCYeVg4QLEN0AQRIYOJAMMoNZFpiH3zep6tT09vR070yPrp1Uume6uvrXX31V/3+VVvIUHdpTxFryv4J1+2NSTnrWCob3ZGGbhQKXgDyr1zm5TQGOjo7qampqbnk8ng9ytuCgQjwe/3lmZuby0NDQX3gsKYoKbdmaGayWSCS+B+j7DjhsVwXw/bKysiAeSIiiQjuG9aRSKTbk2qFp2rNoPI5yLs4S2BFs2qNFgH0O7zkThcAUh8CWA85oA/6msvxq1w4o2ypAH4kz31cY2NPT0wfLy8t3o9FoDF5Ofz3PAwMDH/p8vtf4G/d+WV1dnTo+Po7KOrW1tb7e3t5rFRUVL6pfDtjnFdhTYQWq61hZL5Rl1+jHzs7O3fb29juisYwBgbq7rDg7O/teMBj8TdSRIzy1tLQU6Ovr+9YA226AlVbIHzYcDt9pa2u7LbqKXcaSbhiwBzxD/T8ODg7mVOX5f0NDw9ter7et2LBfCUiqwEKFORiPVBA717CBUVl+vGoDU4XNBthjNtjb27vd2tpKWHUES9i/CYi5OXx2dhbmNWD0l8Gvfvz2mSk7Pj7+DHrs0cjISCQLbAa0E9iQAZZKUNmHBIE33+rv718SULpnMeiC3d3d35nAnm9vb482NjbehHXu7+/vX+7o6PhT2EudGXRgW7D04+Li4ufV1dXnlZWVcZzjUCyJ0f4qfn9GkFgs9sPKysqPEoreZenp6blSVVX1uhUsIhpvz+P8prCXtETGdGYL1o4PndSBLS7S91tbW6NNTU03CItByOmQdiGg9HBGZPtXYTc3N6+2tLR8qsBeEN6VYTgjstmCjUQiU/X19R+LhtSvTo8nFI8ovNb9ypu7u7tXMDgnDDZ4gcoCdtQA2yDewYGs5g1p39qF/Qmw1026SDKoua+a8mlWsBsbG1fxIZ8oyjJnoJpy1smY0mzBOvGjnbrwbFpZE9gmA2xGZPuvwTYLWOYL0gp6sLAFy0RmYWHhC05FmLIS6LZkaWlpEiPYMpYjUGh+v38EU1fAzLMmyuYPqyQyxmkl14JPQ1B4wyQoZLNB/rDJZDJ2cnLygGFUFjveZJ3y8vJLYv7UHxHzbNwVZe2C2a3nKiyUPUaaeI+ehU/p1aRMBXMB1tXVvYP6XBkUR1kXPHsR5O7YgInM+vr6PSTXO5wFOBuwUKpsCqM3NMwCtV1dXdfhW3/RlM3V1U7vWwQF57MBVIkYE2anQFb15+bm3g0EAr8iN/ioubk5ncigx+LoJS5/GARkUMgdbrFrMoVBwdzSlUOs6UJjY2M1ExMTv8MmJUiWvkS6eIteVqKXXD5lTWQ8SD5eQoLBlaprx/T0dGB4eHiVSs7Pz3cPDg6u4ZpQcqfmsc0P000OPOBdW1t7ubOzcxzh9RU3LMFAc3h4+E0oFPp6cnIyinfKVYFcPcu9MD2LM4Plf16UUhSuN8rFmf8xb81365MvJxhhJJhcEciz3KGxXNaw22UyLYEJzVIoWL5DwspcwwgrITO2Q023PBVgKklIFTRfZQkr1TVCSrj0HC7q6eMm24vVzF92vfqf3sATXqg73kYVs24uW6kk70lIaZEn5DN9zLhV72ivy6zFQnS7nQ/MlRvnPbLtQBSsTrFUKwjwP07g9UoKCRRcAAAAAElFTkSuQmCC"
            alt="banner img"
          />
        </div>
        <p className="text-center text-white relative mt-[20px] text-[24px]">
          깨끗한 바다 부산을 위해 진행 중인 캠페인을 알려드립니다.
        </p>
      </div>
    </div>
  );
};

export default Banner;
