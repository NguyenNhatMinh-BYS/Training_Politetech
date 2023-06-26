import React from "react";
import logo from "../../assets/data/img/logo@2x.png";
const Navigate = () => {
  return (
    <div className="flex justify-center w-full">
      <header className=" justify-between flex h-100 bg-white items-center w-80  ">
        <div>
          <img className="h-9 w-56" src={logo} alt="" />
        </div>
        <div className="text-black">
          <span className="m-2.5 text-xl text-main font-semibold">홈</span>
          <span className="m-2.5 text-xl">소개</span>
          <span className="m-2.5 text-xl">공지사항</span>
          <span className="m-2.5 text-xl">시설현황</span>
          <span className="m-2.5 text-xl">콘텐츠</span>
          <span className="m-2.5 text-xl">리빙랩</span>
          <span className="m-2.5 text-xl">캠페인</span>
          <span className="m-2.5 text-xl">자유게시판</span>
        </div>
      </header>
    </div>
  );
};

export default Navigate;
