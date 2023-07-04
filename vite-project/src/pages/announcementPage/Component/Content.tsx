import React, { useEffect, useRef } from "react";
import { useState } from "react";
const Content = () => {
  const [placeholder, setPlaceholder] = useState("제목");
  const listItem = useRef<HTMLDivElement>(null);
  const clickButton = useRef<HTMLDivElement>(null);
  const autoResizeInput = (input: HTMLInputElement) => {
    if (input.value.length > 7 && input.value.length < 20) {
      input.style.width = (input.value.length + "ch") as string;
      input.style.height = "auto";
      input.style.margin = "none";
    } else {
      input.style.width = "80px";
    }
  };

  const handleClickSelect = () => {
    listItem.current?.classList.toggle("hidden");
    const addClass = "border-[#0075DC] border-solid border-[1px]";

    clickButton.current?.classList.add(...addClass.split(" "));
  };
  return (
    <div className=" w-full flex justify-center flex-col items-center ">
      {/* search */}
      <div className="max-[1024px]:flex-col max-[1024px]:items-start my-[60px] flex justify-between  w-3/4 px-[40px] items-center">
        <div>
          {" "}
          <h1 className="font-semibold text-[24px] pl-[10px] border-l-[4px] border-solid border-[#0075DC]">
            공지사항
          </h1>
        </div>
        <div className="flex items-center max-[1024px]:mt-[28px] max-[1024px]:w-full ">
          <div
            ref={clickButton}
            className="max-[1024px]:mx-0  cursor-pointer relative flex p-[6px] mx-[8px] border-solid border-[1px] border-[#C0C0C0]"
          >
            <input
              onClick={handleClickSelect}
              maxLength={30}
              placeholder={placeholder}
              type="text"
              className="resize w-[80px] outline-none"
              onChange={(e) => autoResizeInput(e.target as HTMLInputElement)}
            />

            <i
              onClick={handleClickSelect}
              className="bi bi-caret-down-fill"
            ></i>
            <div
              ref={listItem}
              className="hidden absolute bottom-[-80px] left-0 right-0 bg-white shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] rounded-md"
            >
              <p
                className="p-[6px] "
                onClick={() => {
                  setPlaceholder("제목");
                  handleClickSelect();
                }}
              >
                제목
              </p>
              <p
                className="p-[6px]"
                onClick={() => {
                  setPlaceholder("작성자");
                  handleClickSelect();
                }}
              >
                작성자
              </p>
            </div>
          </div>
          <input
            className="p-[6px] px-[8px] border-solid border-[1px] border-[#C0C0C0] outline-none w-[400px]"
            placeholder="공지사항 검색"
            type="text"
          />
          <div className="cursor-pointer flex bg-[#0066C1] p-[7px] text-white px-[20px] flex-nowrap h-[38px] ">
            <i className="bi bi-search mr-[8px] "></i>
            <p className="whitespace-nowrap">검색</p>
          </div>
        </div>
      </div>
      {/* list contents */}
      <div className="w-3/4 px-[40px]">
        {/* header list contents */}
        <div className="flex bg-[#b4dcfff7] py-[10px]">
          <p className="font-semibold py-[10px] grow-[1] text-center border-r-[2px] border-solid border-[#7DA7CC]">
            번호
          </p>
          <p className="max-[1024px]:border-none font-semibold py-[10px] grow-[10] text-center border-r-[2px] border-solid border-[#7DA7CC]">
            제목
          </p>
          <p className="max-[1024px]:hidden font-semibold py-[10px] grow-[2] text-center border-r-[2px] border-solid border-[#7DA7CC]">
            작성자
          </p>
          <p className="max-[1024px]:hidden font-semibold py-[10px] grow-[2] text-center">
            작성일
          </p>
        </div>
        {/* body list contents */}
        <div>
          <div className="flex  py-[10px] border-b-[1px] border-solid ">
            <p className=" py-[10px] grow-[1] text-center ">번호</p>
            <p className=" py-[10px] grow-[10] px-[20px] ">제목</p>
            <p className=" py-[10px] grow-[2] text-center ">작성자</p>
            <p className=" py-[10px] grow-[2] text-center">작성일</p>
          </div>
          <div className="flex  py-[10px] border-b-[1px] border-solid ">
            <p className=" py-[10px] grow-[1] text-center ">번호</p>
            <p className=" py-[10px] grow-[10] px-[20px] ">제목</p>
            <p className=" py-[10px] grow-[2] text-center ">작성자</p>
            <p className=" py-[10px] grow-[2] text-center">작성일</p>
          </div>
          <div className="flex  py-[10px] border-b-[1px] border-solid ">
            <p className=" py-[10px] grow-[1] text-center ">번호</p>
            <p className=" py-[10px] grow-[10] px-[20px] ">제목</p>
            <p className=" py-[10px] grow-[2] text-center ">작성자</p>
            <p className=" py-[10px] grow-[2] text-center">작성일</p>
          </div>
          <div className="flex  py-[10px] border-b-[1px] border-solid ">
            <p className=" py-[10px] grow-[1] text-center ">번호</p>
            <p className=" py-[10px] grow-[10] px-[20px] ">제목</p>
            <p className=" py-[10px] grow-[2] text-center ">작성자</p>
            <p className=" py-[10px] grow-[2] text-center">작성일</p>
          </div>
          <div className="flex  py-[10px] border-b-[1px] border-solid ">
            <p className=" py-[10px] grow-[1] text-center ">번호</p>
            <p className=" py-[10px] grow-[10] px-[20px] ">제목</p>
            <p className=" py-[10px] grow-[2] text-center ">작성자</p>
            <p className=" py-[10px] grow-[2] text-center">작성일</p>
          </div>
          <div className="flex  py-[10px] border-b-[1px] border-solid ">
            <p className=" py-[10px] grow-[1] text-center ">번호</p>
            <p className=" py-[10px] grow-[10] px-[20px] ">제목</p>
            <p className=" py-[10px] grow-[2] text-center ">작성자</p>
            <p className=" py-[10px] grow-[2] text-center">작성일</p>
          </div>
          <div className="flex  py-[10px] border-b-[1px] border-solid ">
            <p className=" py-[10px] grow-[1] text-center ">번호</p>
            <p className=" py-[10px] grow-[10] px-[20px] ">제목</p>
            <p className=" py-[10px] grow-[2] text-center ">작성자</p>
            <p className=" py-[10px] grow-[2] text-center">작성일</p>
          </div>
          <div className="flex  py-[10px] border-b-[1px] border-solid ">
            <p className=" py-[10px] grow-[1] text-center ">번호</p>
            <p className=" py-[10px] grow-[10] px-[20px] ">제목</p>
            <p className=" py-[10px] grow-[2] text-center ">작성자</p>
            <p className=" py-[10px] grow-[2] text-center">작성일</p>
          </div>
          <div className="flex  py-[10px] border-b-[1px] border-solid ">
            <p className=" py-[10px] grow-[1] text-center ">번호</p>
            <p className=" py-[10px] grow-[10] px-[20px] ">제목</p>
            <p className=" py-[10px] grow-[2] text-center ">작성자</p>
            <p className=" py-[10px] grow-[2] text-center">작성일</p>
          </div>
          <div className="flex  py-[10px] border-b-[1px] border-solid ">
            <p className=" py-[10px] grow-[1] text-center ">번호</p>
            <p className=" py-[10px] grow-[10] px-[20px] ">제목</p>
            <p className=" py-[10px] grow-[2] text-center ">작성자</p>
            <p className=" py-[10px] grow-[2] text-center">작성일</p>
          </div>
        </div>
        {/* footer list contents */}
        <div className="my-[60px] flex justify-center">
          <span className="p-[8px] px-[14px] text-black border-[1px] border-solid border-[#CCCCCC]  mx-[6px]">
            <i className="bi bi-chevron-double-left"></i>
          </span>
          <span className="p-[8px] px-[14px] text-black border-[1px] border-solid border-[#CCCCCC]  mx-[6px]">
            <i className="bi bi-chevron-left"></i>
          </span>
          <span className="p-[8px] px-[14px]  border-[1px] bg-[#0066C1] text-white border-solid border-[#CCCCCC]  mx-[6px]">
            1
          </span>
          <span className="p-[8px] px-[14px] text-black border-[1px] border-solid mx-[6px] border-[#CCCCCC]">
            2
          </span>
          <span className="p-[8px] px-[14px] text-black border-[1px] border-solid mx-[6px] border-[#CCCCCC]">
            3
          </span>
          <span className="p-[8px] px-[14px] text-black border-[1px] border-solid mx-[6px] border-[#CCCCCC]">
            <i className="bi bi-chevron-right"></i>
          </span>
          <span className="p-[8px] px-[14px] text-black border-[1px] border-solid mx-[6px] border-[#CCCCCC]">
            <i className="bi bi-chevron-double-right"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Content;
