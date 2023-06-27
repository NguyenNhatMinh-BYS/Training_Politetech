import React, { useRef } from "react";
import logo from "../../assets/data/img/logo@2x.png";
import { useEffect } from "react";
const Navigate = () => {
  const scrollYElement = useRef<HTMLDivElement>(null);
  const navIcon = useRef<HTMLDivElement>(null);
  const navIconClose = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleScroll() {
      let scrollY = window.scrollY;
      // const innerHeight = window.innerHeight;
      // const targetElement = document.querySelector("scrollY");

      const classesToAdd = "bg-white shadow-black-400 shadow-lg text-black";
      if (scrollY > 0) {
        navIcon &&
          navIcon.current &&
          navIcon.current.classList.remove("text-white");
        scrollYElement &&
          scrollYElement.current &&
          scrollYElement.current.classList.add(...classesToAdd.split(" "));
        scrollYElement &&
          scrollYElement.current &&
          scrollYElement.current.classList.remove("bg-transparent text-white");
      } else {
        navIcon &&
          navIcon.current &&
          navIcon.current.classList.add("text-white");
        scrollYElement &&
          scrollYElement.current &&
          scrollYElement.current.classList.add("bg-transparent");
        scrollYElement &&
          scrollYElement.current &&
          scrollYElement.current.classList.remove(...classesToAdd.split(" "));
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // click logo
  const handleClickLogo = () => {
    window.scrollTo(0, 0);
  };
  // click icon nav

  const handleClickOpenNav = () => {
    navIcon &&
      navIcon.current &&
      navIcon.current.classList.remove("text-white");
    const addClass =
      "sm:right-10 sm:translate-x-full sm:opacity-0 sm:pointer-events-none";
    navIcon &&
      navIcon.current &&
      navIcon.current.classList.remove(...addClass.split(" "));

    const addClassListNav = "sm:opacity-0 sm:pointer-events-none";

    navIconClose &&
      navIconClose.current &&
      navIconClose.current.classList.remove(...addClassListNav.split(" "));
  };
  const handleClickCloseNav = () => {
    const addClass =
      "sm:right-10 sm:translate-x-full sm:opacity-0 sm:pointer-events-none";
    navIcon &&
      navIcon.current &&
      navIcon.current.classList.add(...addClass.split(" "));
    const addClassListNav = "sm:opacity-0 sm:pointer-events-none";
    navIconClose &&
      navIconClose.current &&
      navIconClose.current.classList.add(...addClassListNav.split(" "));
  };
  return (
    <div
      className="  flex justify-center w-full fixed	z-10 bg-transparent transform transition-all duration-200 linear  top-0 "
      ref={scrollYElement}
    >
      <header
        className=" justify-between flex h-100 bg-transparent items-center w-80  "
        ref={scrollYElement}
      >
        <div onClick={handleClickLogo}>
          <img className="h-full w-56 cursor-pointer" src={logo} alt="logo" />
        </div>
        <div
          ref={navIcon}
          className="text-white md:pt-8 md:sm:backdrop-blur-0 xl:block xl:h-full xl:w-full xl:right-0 xl:translate-y-2 xl:text-end xl:leading-3  xl:static xl:bg-transparent xl:translate-x-0 xl:opacity-100  xl:pointer-events-auto  sm:transform sm:transition-all sm:duration-100 sm:linear sm:flex sm:flex-col sm:absolute sm:top-0 sm:bg-nav sm:p-6  sm:w-full sm:h-screen sm:right-0  sm:right-10 sm:backdrop-blur-md sm:translate-x-full sm:opacity-0 sm:pointer-events-none sm:text-end sm:pt-20 sm:pr-16 "
        >
          <span className="m-2.5 text-xl text-main font-semibold">홈</span>
          <span className="m-2.5 text-xl">소개</span>
          <span className="m-2.5 text-xl">공지사항</span>
          <span className="m-2.5 text-xl">시설현황</span>
          <span className="m-2.5 text-xl">콘텐츠</span>
          <span className="m-2.5 text-xl">리빙랩</span>
          <span className="m-2.5 text-xl">캠페인</span>
          <span className="m-2.5 text-xl">자유게시판</span>
        </div>

        <div onClick={handleClickOpenNav}>
          <i className="bi bi-list  xl:hidden sm:block sm:text-4xl sm:text-white"></i>
        </div>
        <div
          ref={navIconClose}
          onClick={handleClickCloseNav}
          className="sm:transform sm:transition-all sm:duration-100 sm:linear absolute sm:opacity-0 sm:pointer-events-none z-20 right-20 xl:hidden"
        >
          <i className="bi bi-x-lg  sm:text-3xl sm:text-nav "></i>
        </div>
      </header>
    </div>
  );
};

export default Navigate;
