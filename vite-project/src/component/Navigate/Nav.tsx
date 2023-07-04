import { useRef } from "react";
import logo from "assets/img/logo@2x.png";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface Prop {
  colorText: string;
}
const Nav = ({ colorText }: Prop) => {
  const scrollYElement = useRef<HTMLDivElement>(null);
  const navIcon = useRef<HTMLDivElement>(null);
  const navIconClose = useRef<HTMLDivElement>(null);
  const navIconOpen = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
          navIconOpen.current.classList.remove("max-[1279px]:text-white");
      } else {
        navIcon && navIcon.current && navIcon.current.classList.add(colorText);
        scrollYElement &&
          scrollYElement.current &&
          scrollYElement.current.classList.add("bg-transparent");
        scrollYElement &&
          scrollYElement.current &&
          scrollYElement.current.classList.remove(...classesToAdd.split(" "));
        navIconOpen &&
          navIconOpen.current &&
          navIconOpen.current.classList.add(`max-[1279px]:${colorText}`);
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
    navigate("/");
  };
  // click icon nav

  const handleClickOpenNav = () => {
    document.body.style.overflow = "hidden";
    navIcon &&
      navIcon.current &&
      navIcon.current.classList.remove("text-white");
    const addClass =
      "max-[1279px]:right-10 max-[1279px]:translate-x-full max-[1279px]:opacity-0 max-[1279px]:pointer-events-none";
    navIcon &&
      navIcon.current &&
      navIcon.current.classList.remove(...addClass.split(" "));

    const addClassListNav =
      "max-[1279px]:opacity-0 max-[1279px]:pointer-events-none";

    navIconClose &&
      navIconClose.current &&
      navIconClose.current.classList.remove(...addClassListNav.split(" "));
  };
  const handleClickCloseNav = () => {
    document.body.style.overflow = "scroll";
    const addClass =
      "max-[1279px]:right-10 max-[1279px]:translate-x-full max-[1279px]:opacity-0 max-[1279px]:pointer-events-none";
    navIcon &&
      navIcon.current &&
      navIcon.current.classList.add(...addClass.split(" "));
    const addClassListNav =
      "max-[1279px]:opacity-0 max-[1279px]:pointer-events-none";
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
            <img
              className="h-full w-56 cursor-pointer object-cover"
              src={logo}
              alt="logo"
            />
          </div>
          <div
            ref={navIcon}
            className={`xl:pt-8 xl:sm:backdrop-blur-0 xl:block xl:h-full xl:w-full xl:right-0 xl:translate-y-2 xl:text-end xl:leading-3  xl:static xl:bg-transparent xl:translate-x-0 xl:opacity-100  xl:pointer-events-auto  sm:transform sm:transition-all sm:duration-100 sm:linear max-[1279px]:flex max-[1279px]:flex-col max-[1279px]:absolute max-[1279px]:top-0 max-[1279px]:bg-nav max-[1279px]:p-6  max-[1279px]:w-full max-[1279px]:h-screen max-[1279px]:right-0  max-[1279px]:right-10 max-[1279px]:backdrop-blur-md max-[1279px]:translate-x-full max-[1279px]:opacity-0 max-[1279px]:pointer-events-none max-[1279px]:text-end max-[1279px]:pt-20 max-[1279px]:pr-16 ${colorText} `}
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
              to="contact"
              className={({ isActive }) =>
                isActive ? "text-main font-semibold sm:mt-9" : "sm:mt-9"
              }
            >
              <span className="m-2.5 text-xl sm:mt-4">소개</span>
            </NavLink>
            <NavLink
              onClick={handleClickCloseNav}
              to="/announcement"
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
              className={`bi bi-list  xl:hidden max-[1279px]:block max-[1279px]:text-4xl max-[1279px]:${colorText}`}
              ref={navIconOpen}
            ></i>
          </div>
          <div
            ref={navIconClose}
            onClick={handleClickCloseNav}
            className="max-[1279px]:flex max-[1279px]:justify-between max-[1279px]:w-full max-[1279px]:transform max-[1279px]:transition-all max-[1279px]:duration-100 max-[1279px]:linear absolute max-[1279px]:opacity-0 max-[1279px]:pointer-events-none z-20 right-20 xl:hidden"
          >
            {" "}
            <img
              src={logo}
              alt="logo"
              className="max-[1279px]:relative min-[640px]:left-44  w-56 cursor-pointer min-[180px]:left-32"
            />
            <i className="bi bi-x-lg  max-[1279px]:text-3xl max-[1279px]:text-nav "></i>
          </div>
        </header>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Nav;
