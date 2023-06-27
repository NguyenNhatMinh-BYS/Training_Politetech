import React, { useEffect, useRef } from "react";
import ContentDetailTitle from "./ContentDetailTitle";
import ContentDetailHeader from "./ContentDetailHeader";
const ContentDetail = () => {
  const scroller = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleScroll() {
      let scrollY = window.scrollY;
      const addClass = "opacity-0 mt-140";
      if (scrollY > 400) {
        console.log(scrollY);
        scroller &&
          scroller.current &&
          scroller.current.classList.remove(...addClass.split(" "));
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="flex justify-center w-full  duration-500 transition-all ">
      <div
        className="w-80 mt-140 opacity-0 duration-500 transition-all "
        ref={scroller}
      >
        <ContentDetailHeader />
        <div className="w-full mt-25 sm:flex sm:justify-center  md:justify-between flex-wrap ">
          <div className="mt-4">
            <ContentDetailTitle
              title="공지사항 입니다."
              text="튼튼하며, 천지는 곳이 광야에서 천하를 말이다. 불러 청춘의 바이며, 있는 못할 석가는 끓는 생의 찾아다녀도, 사막이다. 크고 두손을 원대하고, 인간의 봄바람이 ..."
              date="2023-05-05"
            />
          </div>
          <div className="mt-4">
            <ContentDetailTitle
              title="공지사항 입니다."
              text="튼튼하며, 천지는 곳이 광야에서 천하를 말이다. 불러 청춘의 바이며, 있는 못할 석가는 끓는 생의 찾아다녀도, 사막이다. 크고 두손을 원대하고, 인간의 봄바람이 ..."
              date="2023-05-05"
            />
          </div>
          <div className="mt-4">
            <ContentDetailTitle
              title="공지사항 입니다."
              text="튼튼하며, 천지는 곳이 광야에서 천하를 말이다. 불러 청춘의 바이며, 있는 못할 석가는 끓는 생의 찾아다녀도, 사막이다. 크고 두손을 원대하고, 인간의 봄바람이 ..."
              date="2023-05-05"
            />
          </div>
          <div className="mt-4">
            <ContentDetailTitle
              title="공지사항 입니다."
              text="튼튼하며, 천지는 곳이 광야에서 천하를 말이다. 불러 청춘의 바이며, 있는 못할 석가는 끓는 생의 찾아다녀도, 사막이다. 크고 두손을 원대하고, 인간의 봄바람이 ..."
              date="2023-05-05"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
