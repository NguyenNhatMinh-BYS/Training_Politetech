import imgBanner from "assets/img/BannerPage4.png";
import { useEffect, useRef } from "react";
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
    <div className=" relative h-[300px] ">
      <img src={imgBanner} alt="BannerImg" className="h-full object-cover" />
      <div className="bg-[#3535357e] absolute w-full h-[300px] top-0"></div>
      <div className="absolute top-[150px] ">
        <div className="w-screen flex justify-center">
          <img
            className="mt-[-40px]  "
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAABHNCSVQICAgIfAhkiAAABTNJREFUWEftmV1IZGUYxz0zjuH3xyooJrmYYN2sgl4Ju96EGZJhtslWFEsXmc20G33BwHpjeyHVslBLN85FdwkmeJMIghYhbQVaQzAhuwl+JH7k6Pix48f0/M++z+md1zkfE9vSsufAy8y8532f5/f+z/OeOc9ztIwH8NAeQOaMhwrayWITaVzFVPZM5ztxzr55rLa5uVldVFT0B53QdnZ2zuTm5s5KgOxM/Uy1BsMmbCk2TOc7hcY4ANZnZ2eH6HvU4/E8BSeJRGLl6Ojol/n5+ddramrm0WXSZGgD9uDgoC8zMzNAdqKLi4vnq6qqIMCxaLItY74dtGr8CmYS5HfkqE1Ax9haLBa7mp+ff1U4PJIcAyIJmgXQNO0MnwA4iVEFF1LDXIbXh1pB6+qurKycLisrGyTj59g4qfN9VlbWs3eFTmzINIeHh7/Ozs6+2djYOEP9h9IC+HJrNP8KLVoXQD1mZmaea2homKL+A9HkxVtC68DxePxtn88H40Wy8f39/WkKk+cBRNB/pnK+vr4+UFpa+pEA1x3TlTibk5PziayuOndqaup8S0sLoO9QiwtwDhdTaGy00wUFBSFZXdn47u7uD7T5XgQQQS+kgkYfKRqmK3IWX2kRz5SUlHxlNpb7x8bGLrS1tX1Lv/dFAzgWbYSIGh64dC106b5W1ZWdUTzezMvLuwAYgsbmMz1o4RVQbGtr6z2K9w/toEdHR1/p6OgA9J6AhuJJISJD6yFxfHx8ixw9ZmV8e3v7R7oSLwno2zbQ1XT+zsbGxuXi4uL37aBHRkZe7ezsBPSuAIfSvDf0faFCe0g5DLA8SLWfCgsLGfqWDfTjUHp1dTVAMf6une3h4eHXurq6ZGgobQntJWjsWifQLwOGxttB10Hp5eVlf3l5+Tt2ttOB1kODGpS+19BPAHppaclfUVFx+b+AhtKIoXup9JMC+i0XWoQGwsNVWr89aZobHvJ9mu8ebni44XE3MUj6G3fDQ/5ncu8ebnhYPKk8FOGRThLwv7h7UGkiRqleI1045IfIXPBpmm79G2hkLkgC7NItR88eAJ6YmAi2trZ+o0CbJrZpQc/Nzd2ora29BmjK3D+m1OsFs7B2EtPRaPTn7u5uP2XifwlloTASW6iMpCRlCcERNGXhv4dCoWAgEAgLg3rSOT093dzU1HTd6/U+qsITNDKXOGUuJ5IAqBsOh2/U19d/CTsCEKAcFgBOyg/TemCKRCJf1NXVfS6MAJYb0vuM3t7eU319fR9QNeqi8ueCHBHQSekWMvr+/v7gwMAA6iYMDEgu0qhZuFFFVauWHqp7jNBmaGfHe3t7kcHBwaDf7/+N+gAIwwyM7zo0HZnUfJOTk+eam5uvkY1KXRVNq8UcSmwDnNguLCxcp0LjZzgt5jO0ajepSMNMMjT6vENDQ6Xt7e2fkrPqtbW1m5JxxBWMc6lKVkKfy+A9PT2ngsHgG5WVlZdgB/OoJoi6x9Pj4+OXyH6E+jzUoB4LwbU7+OACZFLhUYXWRRGGoFgWtUfEJ2BwwJB8GTnWuCIKCAaHDTT8ZjX5KQ3j0NCPPoaGPdlmSmAGlReg54nCoU98wgEOVtpMCWMzSzYYTq4z8zi2aVbWdfwmgNWGMyjFTtkBK3OiZiwWZtRPBDgvGKeNUi+rJITg25nxvCyNlYb+8/VEAVKcYljVqQqrqiHvEXnBKZ0LOPXNgdlYo1+FlkNGBkjnPUoqG1YgTt7NJM1PBS3HuOosnTdWMryV0rbKqgOsoNM2dr8muND3S+m/ATjIGGo9+FI4AAAAAElFTkSuQmCC"
            alt="banner img "
          />
        </div>
        <p className="text-center text-white relative w-screen  mt-[20px]">
          깨끗한 바다 산을 위해 각 지역별 쓰레기 수거현황을 전합니다.
        </p>
      </div>
    </div>
  );
};

export default Banner;
