import { useRef, useState } from "react";
import logo from "assets/img/logo@2x.png";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { setToken } from "@/features/DataUserSlice/authSlice";
import { useDispatch } from "react-redux";
interface Prop {
  colorText: string;
}
const Nav = ({ colorText }: Prop) => {
  const scrollYElement = useRef<HTMLDivElement>(null);
  const navIcon = useRef<HTMLDivElement>(null);
  const navIconClose = useRef<HTMLDivElement>(null);
  const navIconOpen = useRef<HTMLDivElement>(null);
  const [isLogin, setIsLogin] = useState<Boolean>(false);
  const navigate = useNavigate();
  const dispath = useDispatch();
  const shadow = useRef("");
  const [role, setRole] = useState("");
  const [bg, setBg] = useState("bg-white");
  const [textNav, setTextNav] = useState(colorText);
  useEffect(() => {
    const getLocalstorage = localStorage.getItem("dataUser");

    if (getLocalstorage) {
      var dataUser = JSON.parse(getLocalstorage);

      if (dataUser != null) {
        setIsLogin(true);
        setRole(dataUser.role);
        if (dataUser.role === "Admin") {
          setBg("bg-transparent text-white");
        }
        if (dataUser.role === "Admin" && colorText === "text-black") {
          setBg("bg-gradient-to-b from-blue-700 to-blue-400 text-white");
          setTextNav("text-[#fffdfd72]");
        }
        if (dataUser.role === "Normal" && colorText === "text-black") {
          setBg("bg-gradient-to-b from-sky-600 to-teal-700 text-white");
        }
      }
    }
    if (!dataUser && colorText === "text-black") {
      setBg("bg-white ");
    }
    if (!dataUser && colorText === "text-white") {
      setBg("bg-transparent ");
    }
    if (colorText === "text-black") shadow.current = "shadow-lg";

    function handleScroll() {
      let scrollY = window.scrollY;

      const classesToAdd = `bg-white shadow-black-400 shadow-lg text-black`;
      const classesToAddAdmin =
        "text-[#fffdfd72] bg-gradient-to-b from-blue-700 to-blue-400 shadow-black-400 shadow-lg";
      if (scrollY > 0) {
        navIcon.current?.classList.remove("text-white");
        if (dataUser && dataUser.role === "Normal") {
          setBg(" bg-gradient-to-b from-sky-600 to-teal-700");
        }
        scrollYElement.current?.classList.add(...classesToAdd.split(" "));
        if (dataUser && dataUser.role === "Admin") {
          scrollYElement.current?.classList.remove("text-black");
          scrollYElement.current?.classList.add(
            ...classesToAddAdmin.split(" ")
          );
          if (colorText === "text-black") {
            scrollYElement.current?.classList.remove(
              ..."text-black bg-transparent".split(" ")
            );
          }
        }
        navIconOpen.current?.classList.remove("max-[1279px]:text-white");
      }
      if (scrollY === 0 && colorText !== "text-black") {
        if (dataUser && dataUser.role === "Normal") {
          setBg("");
        }
        if (!dataUser) {
          navIcon.current?.classList.add(colorText);
        }
        if (dataUser && dataUser.role === "Admin") {
          scrollYElement.current?.classList.remove(
            ...classesToAddAdmin.split(" ")
          );
        }
        scrollYElement.current?.classList.add("bg-transparent");

        scrollYElement.current?.classList.remove(
          ...`${classesToAdd} bg-white`.split(" ")
        );

        navIconOpen.current?.classList.add(`max-[1279px]:${colorText}`);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [bg]);
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
    window.scrollBy({ top: 0 });
    // dispath(activeLoading(true));
    document.body.style.overflow = "auto";
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
  //logout
  const Logout = () => {
    dispath(setToken({ userToken: null }));
    localStorage.clear();
    handleClickCloseNav();
  };
  return (
    <div>
      <div
        className={`flex ${bg}  justify-center w-full fixed	z-[100]  transform transition-all duration-200 linear  top-0 ${shadow.current}`}
        ref={scrollYElement}
      >
        <header
          className=" justify-between flex h-100  items-center w-80  "
          ref={scrollYElement}
        >
          <div
            onClick={handleClickLogo}
            className="flex w-1/2 text-white items-center"
          >
            <img
              className="h-full w-56 cursor-pointer object-cover mr-[10px]"
              src={logo}
              alt="logo"
            />
            {role === "Admin" ? (
              <p>[ 관리자 ]</p>
            ) : role === "Normal" ? (
              <p>[ 리빙랩 관리자 ]</p>
            ) : (
              ""
            )}
          </div>
          {role !== "Normal" ? (
            <div
              ref={navIcon}
              className={` xl:pt-8 xl:sm:backdrop-blur-0 xl:block xl:h-full xl:w-full xl:right-0 xl:translate-y-2 xl:text-end xl:leading-3  xl:static xl:bg-transparent xl:translate-x-0 xl:opacity-100  xl:pointer-events-auto  sm:transform sm:transition-all sm:duration-100 sm:linear max-[1279px]:flex max-[1279px]:flex-col max-[1279px]:absolute max-[1279px]:top-0 max-[1279px]:bg-nav max-[1279px]:p-6  max-[1279px]:w-full max-[1279px]:h-screen max-[1279px]:right-0  max-[1279px]:right-10 max-[1279px]:backdrop-blur-md max-[1279px]:translate-x-full max-[1279px]:opacity-0 max-[1279px]:pointer-events-none max-[1279px]:text-end max-[1279px]:pt-20 max-[1279px]:pr-16 ${textNav} `}
            >
              <NavLink
                onClick={handleClickCloseNav}
                to="/"
                className={({ isActive }) =>
                  isActive && role === "Admin"
                    ? "text-white font-semibold sm:mt-9"
                    : isActive
                    ? "text-main font-semibold sm:mt-9"
                    : "sm:mt-9"
                }
              >
                <span className="m-2.5 text-xl   ">홈</span>
              </NavLink>
              <NavLink
                onClick={handleClickCloseNav}
                to="/introduce"
                className={({ isActive }) =>
                  isActive && role === "Admin"
                    ? "text-white font-semibold sm:mt-9"
                    : isActive
                    ? "text-main font-semibold sm:mt-9"
                    : "sm:mt-9"
                }
              >
                <span className="m-2.5 text-xl sm:mt-4">소개</span>
              </NavLink>
              <NavLink
                onClick={handleClickCloseNav}
                to="/announcement"
                className={({ isActive }) =>
                  isActive && role === "Admin"
                    ? "text-white font-semibold sm:mt-9"
                    : isActive
                    ? "text-main font-semibold sm:mt-9"
                    : "sm:mt-9"
                }
              >
                <span className="m-2.5 text-xl sm:mt-4">공지사항</span>
              </NavLink>
              <NavLink
                onClick={handleClickCloseNav}
                to="/facility"
                className={({ isActive }) =>
                  isActive && role === "Admin"
                    ? "text-white font-semibold sm:mt-9"
                    : isActive
                    ? "text-main font-semibold sm:mt-9"
                    : "sm:mt-9"
                }
              >
                <span className="m-2.5 text-xl sm:mt-4">시설현황</span>
              </NavLink>
              <NavLink
                onClick={handleClickCloseNav}
                to="/content"
                className={({ isActive }) =>
                  isActive && role === "Admin"
                    ? "text-white font-semibold sm:mt-9"
                    : isActive
                    ? "text-main font-semibold sm:mt-9"
                    : "sm:mt-9"
                }
              >
                {" "}
                <span className="m-2.5 text-xl sm:mt-4">콘텐츠</span>
              </NavLink>
              <NavLink
                onClick={handleClickCloseNav}
                to="/living-lab"
                className={({ isActive }) =>
                  isActive && role === "Admin"
                    ? "text-white font-semibold sm:mt-9"
                    : isActive
                    ? "text-main font-semibold sm:mt-9"
                    : "sm:mt-9"
                }
              >
                <span className="m-2.5 text-xl sm:mt-4">리빙랩</span>
              </NavLink>
              <NavLink
                onClick={handleClickCloseNav}
                to="/campaign"
                className={({ isActive }) =>
                  isActive && role === "Admin"
                    ? "text-white font-semibold sm:mt-9"
                    : isActive
                    ? "text-main font-semibold sm:mt-9"
                    : "sm:mt-9"
                }
              >
                <span className="m-2.5 text-xl sm:mt-4">캠페인</span>
              </NavLink>
              <NavLink
                onClick={handleClickCloseNav}
                to="/freeboard"
                className={({ isActive }) =>
                  isActive && role === "Admin"
                    ? "text-white font-semibold sm:mt-9"
                    : isActive
                    ? "text-main font-semibold sm:mt-9"
                    : "sm:mt-9"
                }
              >
                {" "}
                <span className="m-2.5 text-xl sm:mt-4">자유게시판</span>
              </NavLink>
              {isLogin ? (
                <NavLink
                  onClick={Logout}
                  to="/login"
                  className={({ isActive }) =>
                    isActive && role === "Admin"
                      ? "text-white font-semibold sm:mt-9"
                      : isActive
                      ? "text-main font-semibold sm:mt-9"
                      : "sm:mt-9"
                  }
                >
                  {" "}
                  <span className="m-2.5 text-xl sm:mt-4">로그아웃</span>
                </NavLink>
              ) : (
                ""
              )}
            </div>
          ) : isLogin ? (
            <NavLink className="text-right w-1/2" onClick={Logout} to="/login">
              <span className="m-2.5 text-xl sm:mt-4 text-white">로그아웃</span>
            </NavLink>
          ) : (
            ""
          )}

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
