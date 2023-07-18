import imgBanner from "assets/img/BannerPageLast.png";
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
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAsCAYAAADxRjE/AAAABHNCSVQICAgIfAhkiAAABJRJREFUWEftmM9LVFEUx50Zp1Gs0aUig4L4YxO5bBMRMblQwlwIbTJbhWTaok2itElEKtAoDcXA/oAwUULMZbkwF5KGKaY5TbqQ1FLH0ZnpfB/3yPX55s28+angg8ubmfvunM/5vnPuPfeaUk7gZTqBzCnRQEczlrUKRCJaKMNyf6hnI7Evj5Ed0HUmGAj/jjs3GIgnOEDlBnua8FoQym+7u7s3rFZri8lkuhCthHrjA4HAxt7e3uDAwMDD6urqP/SsX8Dy/Qi4JrTP53tsNptb4gmr/m+/3/9zdHS0vKys7Af17VPzSQ4cAldDm3Z2dq6kpaV9TCQw2/J4PJ/S09Mr6PueaABHOxQqamgzefyOQuJ6MqBhc2hoyFlRUTFJH72iyYorWOrZwUwxhleTtMvlcnU4HI42AvAgtYTiiG+04wm9tLT0Ij8/v11AMzhDK7EtT234biGlEU9JuxYWFl4WFBQ8JYAd0QB+KETU8zGgEUtJu+bn518VFhZqQQP8iNJw4LhAP1MpzVNgZNA0h/+jqcmdkZFRpH4dkfbJ/yOUfi6gt0VsRw7tdrsHa2pq2mkR2Ojs7Cyuq6t7Y7FYzsLoysrK+5ycnGa8QiN9asdjDu10Oi8R8LpIDN/i4uK9vLy8ehguLy+/ODw8/Jc+KplODj4iJ2q0+mhaa8rNzb2llTgxhxZ1CK9W+2S8gYw3wjj1FYtEUTI93L64Kz03N9dVVFTUQYa8tbW16T09PR8oPBwwPDs7+6SkpKQPb4H6MvT6ent7P1NtY0+I0jBCSfhte3t7Oisr65raMFWGM1S7TNvt9jKtvq2trRmtcXFNxERM3jGP6VPoIAqcKp2I0IANobSxZZyW4i+U+ecTBam2Q4vXfVrEhuh3VHm8jPMORrP2MK+vr9/JzMx8nQxor9frttlsVzGzCmiAYyOA2oM3ukd2LhbqTKV5uI/2ajcTCY5iq6ur63Z9ff2UBA14lMqa9TT4UJqaAU3tzNraWjMtBHcpVM7FG35zc3Oiv7+/jYC/CkjA8q4F0LrbLaWmFuA2utvGxsYu0yqXSq/OUllZ2R/MASg1Pj7evry8/IvqkAA5q7RQDk9OTrpaW1tdQk2EASAREryxPRQarK78v6w2wK2inRH3VNrVLGpB0PL9u7u7u6GxsXFGGA96ZqEaz07hjjEAREEGYNxl4AMBtA5rECKy4ggXNCtBr6ihqZ74XlVVVTsyMoKSlQ3Jhy0Yoqc4H4WxoxjL43mLpXtYw+rz+R0cgOpKyBA0wA6u1dXVgezs7CahEpesUEl9QqT1gmRnAMWzA8MbOhZjcL4DXElQgt5i66IUfStUlIFlaFYxGLQaXH0IGfYBpGxAPjW1ULJNUJLlTU1NPSgtLcXRGZyBIhyHDHwkefSopfAJ67g3nKNbOVSQnEhMNMQ5LoaWz9+Cvtow4XUfCwdaDhOeVQCMz7g46/l+sHJJCoZgNdZtBFqeDgHMYwEZMnmMYek/HS40q83gHDJaiRNyQYnWASPQMrjarrxIRMsUcrxRaAYPBh3SYCweiAQ6Fnaj+o9T6KjkMzD4Pzr9x0uIjoIDAAAAAElFTkSuQmCC"
            alt="banner img "
          />
        </div>
        <p className="text-center text-white relative mt-[20px] text-[24px]">
          깨끗한 바다 부산을 위한 시민들의 다양한 의견과 정보를 공유합니다.
        </p>
      </div>
    </div>
  );
};

export default Banner;
