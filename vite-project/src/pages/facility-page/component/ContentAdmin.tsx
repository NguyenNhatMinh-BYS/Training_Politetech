import React from "react";
import { useRef, useState } from "react";
const ContentAdmin = () => {
  const listItem = useRef<HTMLDivElement>(null);
  const [inputSearch, setInputSearch] = useState("");
  const handleClickSearch = () => {
    // setData();
  };
  return (
    <div className="w-full flex justify-center">
      <div className="max-[1024px]:flex-col max-[1024px]:items-start my-[60px] flex justify-between  w-3/4 px-[40px] items-center">
        <div>
          {" "}
          <h1 className="font-semibold text-[24px] pl-[10px] border-l-[4px] border-solid border-[#0075DC]">
            공지사항
          </h1>
        </div>
        <div className="flex items-center max-[1024px]:mt-[28px] max-[1024px]:w-full min-[100px]:flex-col min-[100px]:items-start min-[1024px]:flex-row min-[1024px]:items-center ">
          <div className="max-[1024px]:mx-0  cursor-pointer relative flex  mx-[8px] ">
            <div
              ref={listItem}
              className="hidden absolute bottom-[-80px] left-0 right-0 bg-white shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] rounded-md"
            ></div>
          </div>
          <div className="flex min-[100px]:mt-[24px] min-[100px]:w-full min-[1024px]:w-auto min-[1024px]:mt-0">
            {/* input search */}
            <input
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
              className="p-[6px] px-[8px] border-solid border-[1px] border-[#C0C0C0] outline-none w-[400px] "
              placeholder="공지사항 검색"
              type="text"
            />
            <div
              onClick={handleClickSearch}
              className="cursor-pointer flex bg-[#0066C1] p-[7px] text-white px-[20px] flex-nowrap h-[38px] "
            >
              <i className="bi bi-search mr-[8px] "></i>
              <p className="whitespace-nowrap">검색</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ContentAdmin;
