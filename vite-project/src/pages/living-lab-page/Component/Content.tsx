import { useEffect, useRef } from "react";
import { useState } from "react";
import { notice } from "@/services/apiNotice";
import { DataNotice } from "@/model/Auth.model";
import dayjs from "dayjs";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loading from "@/pages/loading/Loading";
import { useDispatch } from "react-redux";
import { activeLoading } from "@/features/loadingSlice/loadingSlice";
import { livingLab } from "@/services/apiLivingLab";
const Content = () => {
  const [placeholder, setPlaceholder] = useState("제목");
  const listItem = useRef<HTMLDivElement>(null);
  const clickButton = useRef<HTMLDivElement>(null);
  const [listData, setListData] = useState([]);
  const [totalListData, setTotalListData] = useState<string[]>([]);
  const [colDataCurrent, setColDataCurrent] = useState("0");
  const [maxMinListData, setMaxMinListData] = useState<string[]>([]);
  const [inputSearch, setInputSearch] = useState("");
  const [inputSearchBy, setInputSearchBy] = useState("title");
  const dispath = useDispatch();

  const navigate = useNavigate();
  //set data
  const setData = async () => {
    dispath(activeLoading(true));
    const search_by = placeholder === "제목" ? "title" : "author";
    setInputSearchBy(search_by);
    const response = await livingLab({
      page_size: "10",
      page: colDataCurrent,
      search_value: inputSearch,
      search_by: search_by,
    });

    let data = response.data.data?.list;
    console.log(data);

    const totalData = response.data.data?.total;

    setListData(data);
    for (
      let i = 10 * Number(colDataCurrent), x = 0;
      i <= 10 * Number(colDataCurrent) + 10 && x < 10;
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
    dispath(activeLoading(false));
    return data;
  };
  //get api
  useEffect(() => {
    (async () => {
      try {
        setData();
      } catch (err) {
        console.log(err);
        dispath(activeLoading(false));
      }
    })();
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

  const handleClickSelect = () => {
    listItem.current?.classList.toggle("hidden");

    clickButton.current?.classList.add("border-[#0075DC]");
  };
  //handle click index list
  const handleClickIndexList = (index: number) => {
    // console.log(index);
    //
    setColDataCurrent(index.toString());
  };
  //handle sreach
  const handleClickSearch = () => {
    setData();
  };
  return (
    <div
      onClick={() => {
        listItem.current?.classList.add("hidden");
        clickButton.current?.classList.remove("border-[#0075DC]");
      }}
      id="search"
      className=" w-full flex justify-center flex-col items-center "
    >
      {" "}
      <Loading />
      {/* search */}
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
              ref={clickButton}
              className=" border-solid border-[2px] p-[6px]"
            >
              <input
                onClick={(e) => {
                  handleClickSelect();
                  e.stopPropagation();
                }}
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
              className="hidden z-30 absolute bottom-[-80px] left-0 right-0 bg-white shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] rounded-md"
            >
              <p
                className="p-[6px] "
                onClick={() => {
                  setPlaceholder("제목");
                  clickButton.current?.classList.remove("border-[#0075DC]");
                }}
              >
                제목
              </p>
              <p
                className="p-[6px]"
                onClick={() => {
                  setPlaceholder("작성자");
                  clickButton.current?.classList.remove("border-[#0075DC]");
                }}
              >
                작성자
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
      {/* list contents */}
      <div className="w-3/4 px-[40px]">
        {/* header list contents */}
        <div className="flex bg-[#b4dcfff7] py-[10px] rounded-sm">
          <p className="font-semibold py-[10px] w-[100px]  text-center border-r-[2px] border-solid border-[#7DA7CC]">
            번호
          </p>
          <p className="max-[1024px]:border-none font-semibold py-[10px] w-[780px] text-center border-r-[2px] border-solid border-[#7DA7CC]">
            제목
          </p>
          <p className="max-[1024px]:hidden font-semibold py-[10px] w-[180px]  text-center border-r-[2px] border-solid border-[#7DA7CC]">
            작성자
          </p>
          <p className="max-[1024px]:hidden font-semibold py-[10px] w-[180px]  text-center">
            작성일
          </p>
        </div>
        {/* body list contents */}
        <div>
          {listData &&
            listData.map((item: DataNotice, index) => (
              <div
                onClick={() => {
                  dispath(activeLoading(true));
                  navigate(`/living-lab/${item.id}`, {
                    state: {
                      search_by: inputSearchBy,
                      search_value: inputSearch,
                    },
                  });
                }}
                key={index}
                className=" flex  py-[10px] border-b-[1px] border-solid"
              >
                <p className=" py-[10px] w-[100px] text-center ">
                  {item.index}
                </p>
                <div className="  w-[780px]">
                  <p className=" py-[10px] px-[20px]  w-full break-words ">
                    {item.title}
                  </p>
                  <p className="max-[1024px]:block min-[1024px]:hidden px-[20px] opacity-50 ">
                    {dayjs(item.updated_at).format("YYYY-MM-DD")}
                  </p>
                </div>

                <p className="max-[1024px]:hidden py-[10px] w-[180px] text-center ">
                  {item.author}
                </p>
                <p className="max-[1024px]:hidden py-[10px] w-[180px] text-center">
                  {dayjs(item.updated_at).format("YYYY-MM-DD")}
                </p>
              </div>
            ))}
        </div>
        {/* footer list contents */}
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
    </div>
  );
};

export default Content;
