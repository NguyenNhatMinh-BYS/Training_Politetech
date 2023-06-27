import React from "react";
import ContentDetailHeader from "./ContentDetailHeader";
import { useEffect } from "react";
import { useRef } from "react";
const ContentList = () => {
  const scroller = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleScroll() {
      let scrollY = window.scrollY;
      const addClass = "opacity-0 mt-140";
      if (scrollY > 800) {
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
    <div className="flex justify-center mt-140 mb-140 ">
      <div
        className="w-80 sm:flex sm:justify-center  md:justify-between mt-140 opacity-0 duration-500 transition-all flex-wrap"
        ref={scroller}
      >
        <div className="w-260 mt-8 ">
          <ContentDetailHeader />
          <div>
            <ul className="list-square">
              <li className="border-t-2 cursor-pointer border-main mt-2 hover:bg-hoverContent">
                <div className="p-2 flex items-center justify-between">
                  <div className="flex  items-center">
                    <div className="bg-black w-1 h-1 mx-1 "></div>
                    <p>콘텐츠 제목</p>
                  </div>
                  <i className="bi bi-chevron-right p-1"></i>
                </div>
              </li>
              <li className="hover:bg-hoverContent">
                <div className="p-2 flex items-center justify-between">
                  <div className=" flex items-center">
                    <div className="bg-black w-1 h-1 mx-1 "></div>
                    <p>콘텐츠 제목</p>
                  </div>
                  <i className="bi bi-chevron-right p-1"></i>
                </div>
              </li>
              <li className="hover:bg-hoverContent">
                <div className="p-2 flex items-center justify-between">
                  <div className=" flex  items-center">
                    <div className="bg-black w-1 h-1 mx-1 "></div>
                    <p>콘텐츠 제목</p>
                  </div>
                  <i className="bi bi-chevron-right p-1"></i>
                </div>
              </li>
              <li className="hover:bg-hoverContent border-b-2 border-main">
                <div className="p-2 flex items-center justify-between">
                  <div className=" flex  items-center">
                    <div className="bg-black w-1 h-1 mx-1 "></div>
                    <p>콘텐츠 제목</p>
                  </div>
                  <i className="bi bi-chevron-right p-1"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-260 mt-8 ">
          <ContentDetailHeader />
          <div>
            <ul className="list-square">
              <li className="border-t-2 cursor-pointer border-main mt-2 hover:bg-hoverContent">
                <div className="p-2 flex items-center justify-between">
                  <div className="flex  items-center">
                    <div className="bg-black w-1 h-1 mx-1 "></div>
                    <p>콘텐츠 제목</p>
                  </div>
                  <i className="bi bi-chevron-right p-1"></i>
                </div>
              </li>
              <li className="hover:bg-hoverContent">
                <div className="p-2 flex items-center justify-between">
                  <div className=" flex items-center">
                    <div className="bg-black w-1 h-1 mx-1 "></div>
                    <p>콘텐츠 제목</p>
                  </div>
                  <i className="bi bi-chevron-right p-1"></i>
                </div>
              </li>
              <li className="hover:bg-hoverContent">
                <div className="p-2 flex items-center justify-between">
                  <div className=" flex  items-center">
                    <div className="bg-black w-1 h-1 mx-1 "></div>
                    <p>콘텐츠 제목</p>
                  </div>
                  <i className="bi bi-chevron-right p-1"></i>
                </div>
              </li>
              <li className="hover:bg-hoverContent border-b-2 border-main">
                <div className="p-2 flex items-center justify-between">
                  <div className=" flex  items-center">
                    <div className="bg-black w-1 h-1 mx-1 "></div>
                    <p>콘텐츠 제목</p>
                  </div>
                  <i className="bi bi-chevron-right p-1"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-260 mt-8 ">
          <ContentDetailHeader />
          <div>
            <ul className="list-square">
              <li className="border-t-2 cursor-pointer border-main mt-2 hover:bg-hoverContent">
                <div className="p-2 flex items-center justify-between">
                  <div className="flex  items-center">
                    <div className="bg-black w-1 h-1 mx-1 "></div>
                    <p>콘텐츠 제목</p>
                  </div>
                  <i className="bi bi-chevron-right p-1"></i>
                </div>
              </li>
              <li className="hover:bg-hoverContent">
                <div className="p-2 flex items-center justify-between">
                  <div className=" flex items-center">
                    <div className="bg-black w-1 h-1 mx-1 "></div>
                    <p>콘텐츠 제목</p>
                  </div>
                  <i className="bi bi-chevron-right p-1"></i>
                </div>
              </li>
              <li className="hover:bg-hoverContent">
                <div className="p-2 flex items-center justify-between">
                  <div className=" flex  items-center">
                    <div className="bg-black w-1 h-1 mx-1 "></div>
                    <p>콘텐츠 제목</p>
                  </div>
                  <i className="bi bi-chevron-right p-1"></i>
                </div>
              </li>
              <li className="hover:bg-hoverContent border-b-2 border-main">
                <div className="p-2 flex items-center justify-between">
                  <div className=" flex  items-center">
                    <div className="bg-black w-1 h-1 mx-1 "></div>
                    <p>콘텐츠 제목</p>
                  </div>
                  <i className="bi bi-chevron-right p-1"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-260 mt-8">
          <ContentDetailHeader />
          <div>
            <ul className="list-square">
              <li className="border-t-2 cursor-pointer border-main mt-2 hover:bg-hoverContent">
                <div className="p-2 flex items-center justify-between">
                  <div className="flex  items-center">
                    <div className="bg-black w-1 h-1 mx-1 "></div>
                    <p>콘텐츠 제목</p>
                  </div>
                  <i className="bi bi-chevron-right p-1"></i>
                </div>
              </li>
              <li className="hover:bg-hoverContent">
                <div className="p-2 flex items-center justify-between">
                  <div className=" flex items-center">
                    <div className="bg-black w-1 h-1 mx-1 "></div>
                    <p>콘텐츠 제목</p>
                  </div>
                  <i className="bi bi-chevron-right p-1"></i>
                </div>
              </li>
              <li className="hover:bg-hoverContent">
                <div className="p-2 flex items-center justify-between">
                  <div className=" flex  items-center">
                    <div className="bg-black w-1 h-1 mx-1 "></div>
                    <p>콘텐츠 제목</p>
                  </div>
                  <i className="bi bi-chevron-right p-1"></i>
                </div>
              </li>
              <li className="hover:bg-hoverContent border-b-2 border-main">
                <div className="p-2 flex items-center justify-between">
                  <div className=" flex  items-center">
                    <div className="bg-black w-1 h-1 mx-1 "></div>
                    <p>콘텐츠 제목</p>
                  </div>
                  <i className="bi bi-chevron-right p-1"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentList;
