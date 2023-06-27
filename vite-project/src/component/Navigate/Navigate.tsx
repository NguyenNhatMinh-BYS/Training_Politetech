import React, { useRef } from "react";
import logo from "../../assets/data/img/logo@2x.png";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Navigate = () => {
  const scrollYElement = useRef<HTMLDivElement>(null);
  const navIcon = useRef<HTMLDivElement>(null);
  const navIconClose = useRef<HTMLDivElement>(null);
  const navIconOpen = useRef<HTMLDivElement>(null);
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

        navIconOpen &&
          navIconOpen.current &&
          navIconOpen.current.classList.remove("sm:text-white");
        console.log(navIconOpen.current);
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
        navIconOpen &&
          navIconOpen.current &&
          navIconOpen.current.classList.add("sm:text-white");
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
    <div>
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
            className="text-white xl:pt-8 xl:sm:backdrop-blur-0 xl:block xl:h-full xl:w-full xl:right-0 xl:translate-y-2 xl:text-end xl:leading-3  xl:static xl:bg-transparent xl:translate-x-0 xl:opacity-100  xl:pointer-events-auto  sm:transform sm:transition-all sm:duration-100 sm:linear sm:flex sm:flex-col sm:absolute sm:top-0 sm:bg-nav sm:p-6  sm:w-full sm:h-screen sm:right-0  sm:right-10 sm:backdrop-blur-md sm:translate-x-full sm:opacity-0 sm:pointer-events-none sm:text-end sm:pt-20 sm:pr-16 "
          >
            <NavLink
              onClick={handleClickCloseNav}
              to="/"
              className={({ isActive }) =>
                isActive ? "text-main font-semibold sm:mt-9" : "sm:mt-9"
              }
            >
              <span className="m-2.5 text-xl   ">홈</span>
            </NavLink>
            <NavLink
              onClick={handleClickCloseNav}
              to="page2"
              className={({ isActive }) =>
                isActive ? "text-main font-semibold sm:mt-9" : "sm:mt-9"
              }
            >
              <span className="m-2.5 text-xl sm:mt-4">소개</span>
            </NavLink>
            <NavLink
              onClick={handleClickCloseNav}
              to="page3"
              className={({ isActive }) =>
                isActive ? "text-main font-semibold sm:mt-9" : "sm:mt-9"
              }
            >
              <span className="m-2.5 text-xl sm:mt-4">공지사항</span>
            </NavLink>
            <NavLink
              onClick={handleClickCloseNav}
              to="page4"
              className={({ isActive }) =>
                isActive ? "text-main font-semibold sm:mt-9" : "sm:mt-9"
              }
            >
              <span className="m-2.5 text-xl sm:mt-4">시설현황</span>
            </NavLink>
            <NavLink
              onClick={handleClickCloseNav}
              to="page5"
              className={({ isActive }) =>
                isActive ? "text-main font-semibold sm:mt-9" : "sm:mt-9"
              }
            >
              {" "}
              <span className="m-2.5 text-xl sm:mt-4">콘텐츠</span>
            </NavLink>
            <NavLink
              onClick={handleClickCloseNav}
              to="page6"
              className={({ isActive }) =>
                isActive ? "text-main font-semibold sm:mt-9" : "sm:mt-9"
              }
            >
              <span className="m-2.5 text-xl sm:mt-4">리빙랩</span>
            </NavLink>
            <NavLink
              onClick={handleClickCloseNav}
              to="page7"
              className={({ isActive }) =>
                isActive ? "text-main font-semibold sm:mt-9" : "sm:mt-9"
              }
            >
              <span className="m-2.5 text-xl sm:mt-4">캠페인</span>
            </NavLink>
            <NavLink
              onClick={handleClickCloseNav}
              to="page8"
              className={({ isActive }) =>
                isActive ? "text-main font-semibold sm:mt-9" : "sm:mt-9"
              }
            >
              {" "}
              <span className="m-2.5 text-xl sm:mt-4">자유게시판</span>
            </NavLink>
          </div>

          <div onClick={handleClickOpenNav}>
            <i
              className="bi bi-list  xl:hidden sm:block sm:text-4xl sm:text-white"
              ref={navIconOpen}
            ></i>
          </div>
          <div
            ref={navIconClose}
            onClick={handleClickCloseNav}
            className="sm:flex sm:justify-between sm:w-full sm:transform sm:transition-all sm:duration-100 sm:linear absolute sm:opacity-0 sm:pointer-events-none z-20 right-20 xl:hidden"
          >
            {" "}
            <img
              src={logo}
              alt="logo"
              className="sm:relative sm:left-44  w-56 cursor-pointer"
            />
            <i className="bi bi-x-lg  sm:text-3xl sm:text-nav "></i>
          </div>
        </header>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navigate;
