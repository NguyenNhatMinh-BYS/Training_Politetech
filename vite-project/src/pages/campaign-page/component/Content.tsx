import { useEffect } from "react";

import { useRef, useState } from "react";
import { campaign } from "@/services/apiCampaign";
import { campaigngApi } from "@/model/Auth.model";
import { Link, useNavigate } from "react-router-dom";
import Loading from "@/pages/loading/Loading";
import { useDispatch } from "react-redux";
import { activeLoading } from "@/features/loadingSlice/loadingSlice";
const Content = () => {
  const clickButton = useRef<HTMLDivElement>(null);
  const [placeholder, setPlaceholder] = useState("제목");
  const listItem = useRef<HTMLDivElement>(null);
  const [inputSearch, setInputSearch] = useState("");
  const [totalListData, setTotalListData] = useState<string[]>([]);
  const [colDataCurrent, setColDataCurrent] = useState("0");
  const [pageSize, setPageSize] = useState("12");
  const [listData, setListData] = useState([]);
  const [maxMinListData, setMaxMinListData] = useState<string[]>([]);
  const navigate = useNavigate();
  const dispath = useDispatch();

  const handleClickSelect = () => {
    listItem.current?.classList.toggle("hidden");
    const addClass = "border-[#0075DC]";

    clickButton.current?.classList.toggle(addClass);
  };
  const setData = async () => {
    const response = await campaign({
      page: colDataCurrent,
      page_size: pageSize,
      search_value: inputSearch,
    });
    let data = response.data.data?.list;

    const totalData = response.data.data?.total;

    setListData(data);
    for (
      let i = 12 * Number(colDataCurrent), x = 0;
      i <= 12 * Number(colDataCurrent) + 12 && x < 12;
      i++, x++
    ) {
      if (data[x]) {
        data[x].index = totalData - i;
      } else {
        break;
      }
    }
    setTotalListData(Array(Math.ceil(totalData / 10)).fill(""));
    setMaxMinListData(["0", (Math.ceil(totalData / 10) - 1).toString()]);
    // dispath(activeLoading(false));
    dispath(activeLoading(false));
  };
  useEffect(() => {
    try {
      setData();
    } catch (e) {
      console.log(e);
    }
  }, [colDataCurrent]);
  //css input
  const autoResizeInput = (input: HTMLInputElement) => {
    setPlaceholder(input.value);
    if (input.value.length > 7 && input.value.length <= 30) {
      input.style.width = (input.value.length + "ch") as string;
      input.style.height = "auto";
      input.style.margin = "none";
    } else {
      input.style.width = "80px";
    }
  };
  //handle sreach
  const handleClickSearch = () => {
    setData();
  };
  //handle click index list
  const handleClickIndexList = (index: number) => {
    // console.log(index);
    //
    setColDataCurrent(index.toString());
  };
  return (
    <div
      onClick={() => {
        listItem.current?.classList.add("hidden");
        clickButton.current?.classList.remove("border-[#0075DC]");
      }}
      className=" w-full flex justify-center flex-col items-center mb-[100px]"
    >
      <Loading />
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
              onClick={(e) => {
                handleClickSelect();
                e.stopPropagation();
              }}
              ref={clickButton}
              className=" border-solid border-[2px] p-[6px]"
            >
              <input
                id="input"
                maxLength={30}
                value={placeholder}
                type="text"
                className="resize w-[80px] outline-none placeholder-gray-400 cursor-pointer placeholder-shown:border-gray-500"
                onChange={(e) => autoResizeInput(e.target as HTMLInputElement)}
              />

              <i className="bi bi-caret-down-fill absolute right-[6px] pointer-events-none"></i>
            </div>
            <div
              ref={listItem}
              className="hidden absolute bottom-[-42px] left-0 right-0 bg-white shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] rounded-md"
            >
              <p
                className="p-[6px] "
                onClick={() => {
                  setPlaceholder("제목");
                  handleClickSelect();
                  clickButton.current?.classList.remove("border-[#0075DC]");
                }}
              >
                제목
              </p>
            </div>
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
      <div className="w-4/5  ">
        <div className=" px-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full">
          {listData &&
            listData.map((item: campaigngApi, index: number) => (
              <div
                onClick={() => {
                  navigate(`/campaign/${item.id}`);
                }}
                key={index}
                className=" cursor-pointer border-solid border-[1px]  bg-[#D4E9FC] mx-[27px] mt-[60px] hover:bg-[#0066C1] hover:text-white hover:border-[#0066C1] transition-all ease-in-out duration-200 rounded-sm"
              >
                <img
                  className="object-cover h-[300px] w-full bg-white"
                  src={item?.image || ""}
                  alt="img"
                />
                <div className=" text-center px-[16px] py-[14px]">
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="my-[60px] flex justify-center">
        {maxMinListData[0] !== colDataCurrent ? (
          <>
            <span
              onClick={() => setColDataCurrent(maxMinListData[0])}
              className=" bg-[#F1F1F1] p-[8px] px-[14px] text-black border-[1px] border-solid border-[#CCCCCC]  mx-[6px] cursor-pointer hover:bg-[#a5d5ffa7]"
            >
              <i className="bi bi-chevron-double-left"></i>
            </span>
            <span
              onClick={() =>
                setColDataCurrent((Number(colDataCurrent) - 1).toString())
              }
              className="bg-[#F1F1F1] p-[8px] px-[14px] text-black border-[1px] border-solid border-[#CCCCCC]  mx-[6px] cursor-pointer hover:bg-[#a5d5ffa7]"
            >
              <i className="bi bi-chevron-left"></i>
            </span>
          </>
        ) : (
          ""
        )}

        {totalListData &&
          totalListData.map((item, index) => (
            <a
              href="#search"
              key={index}
              onClick={() => handleClickIndexList(index)}
              className="p-[8px] px-[14px]  border-[1px] text-black border-solid border-[#CCCCCC]  mx-[6px]"
              style={{
                backgroundColor:
                  colDataCurrent === index.toString() ? "#0066C1" : "",
                color: colDataCurrent === index.toString() ? "white" : "",
              }}
            >
              {index + 1}
            </a>
          ))}

        {maxMinListData[1] !== colDataCurrent ? (
          <>
            <span
              onClick={() =>
                setColDataCurrent((Number(colDataCurrent) + 1).toString())
              }
              className="bg-[#F1F1F1] p-[8px] px-[14px] text-black border-[1px] border-solid mx-[6px] border-[#CCCCCC] cursor-pointer hover:bg-[#a5d5ffa7]"
            >
              <i className="bi bi-chevron-right"></i>
            </span>
            <span
              onClick={() => setColDataCurrent(maxMinListData[1])}
              className="bg-[#F1F1F1] p-[8px] px-[14px] text-black border-[1px] border-solid mx-[6px] border-[#CCCCCC] cursor-pointer hover:bg-[#a5d5ffa7]"
            >
              <i className="bi bi-chevron-double-right"></i>
            </span>
          </>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default Content;
