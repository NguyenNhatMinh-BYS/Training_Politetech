import HeaderSearch from "@/component/HeaderSearch/HeaderSearch";
import { useRef, useEffect, useState } from "react";
import { content, delContent } from "@/services/apiContent";
import { DataNotice } from "@/model/Auth.model";
import dayjs from "dayjs";
import Pagination from "@/component/Pagination/Pagination";
import NoticeTitle from "@/pages/announcement-page/Component/NoticeTitle";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loading from "@/pages/loading/Loading";
import { activeLoading } from "@/features/loadingSlice/loadingSlice";
import { campaign, delCampaign } from "@/services/apiCampaign";
const ContentAdmin = () => {
  const listItem = useRef<HTMLDivElement>(null);
  const clickButton = useRef<HTMLDivElement>(null);
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState<string>("0");
  const [totalList, setTotalList] = useState<number>(2);
  const [isAdmin, setIsAdmin] = useState(false);
  const [totalChecked, setTotalChecked] = useState<string[]>([]);
  const [noticeEdit, setNoticeEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const itemChecked = useRef<string[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchValue = useRef("");

  const getData = async (search_by?: string, search_value?: string) => {
    dispatch(activeLoading(true));
    searchValue.current = search_value || "";
    const response = await campaign({
      page_size: "10",
      page: page,

      search_value: search_value,
    });

    let data = response.data.data?.list;

    const totalData = response.data.data?.total;
    for (
      let i = 10 * Number(page), x = 0;
      i <= 10 * Number(page) + 10 && x < 10;
      i++, x++
    ) {
      if (data[x]) {
        data[x].index = totalData - i;
      } else {
        break;
      }
    }
    setDataList(data);

    setTotalList(totalData);
    dispatch(activeLoading(false));
  };
  const handleCloseNoticeEdit = () => {
    setNoticeEdit(false);
    setIsDelete(false);
  };
  useEffect(() => {
    const dataUser = localStorage.getItem("dataUser");
    if (dataUser) {
      setIsAdmin(JSON.parse(dataUser).role);
    }
    try {
      (async () => {
        getData("", searchValue.current);
      })();
    } catch (e) {
      console.log(e);
    }
  }, [page]);
  const setColDataCurrent = (pageChange: string) => {
    console.log(pageChange);

    setPage(pageChange);
  };
  const handleAcceptDelete = () => {
    dispatch(activeLoading(true));
    const token = localStorage.getItem("token") || " ";
    const ids = itemChecked.current.map((item) => {
      return item;
    });
    try {
      (async () => {
        await delCampaign(ids, token);
        itemChecked.current = [];
        getData();
        toast.success("Delete successfully");
      })();
    } catch (e) {}
    setNoticeEdit(false);
    dispatch(activeLoading(false));
  };
  const handleClickEdit = () => {
    if (itemChecked.current.length === 1) {
      navigate(`/campaign/edit/${itemChecked.current}`, {
        state: { infor: itemChecked.current },
      });
    } else if (itemChecked.current.length > 1) {
      setNoticeEdit(true);
    }
  };
  const handleDelete = () => {
    if (itemChecked.current.length >= 1) {
      setNoticeEdit(true);
      setIsDelete(true);
    }
  };
  const handleCreate = () => {
    navigate(`/campaign/create`, {
      state: { infor: "" },
    });
  };
  const handleChangeCheckBox = (
    item: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.checked) {
      itemChecked.current = [...itemChecked.current, item];
      setTotalChecked(itemChecked.current);
    } else {
      const filter = itemChecked.current.filter((value) => value !== item);

      itemChecked.current = [...filter];
      setTotalChecked(itemChecked.current);
    }
  };
  return (
    <div
      className="w-full flex justify-center flex-col items-center"
      onClick={() => {
        listItem.current?.classList.add("hidden");
        clickButton.current?.classList.remove("border-[#0075DC]");
      }}
    >
      {" "}
      <Loading />
      {noticeEdit ? (
        <NoticeTitle
          isDeleted={isDelete}
          sizeCheckItem={itemChecked.current.length}
          handleCloseNoticeEdit={handleCloseNoticeEdit}
          handleAcceptDelete={handleAcceptDelete}
        />
      ) : (
        " "
      )}
      <HeaderSearch
        searchAuthor={false}
        listItem={listItem}
        clickButton={clickButton}
        getData={getData}
      />
      <div className="w-3/4 relative">
        <table className="w-full">
          <thead className="bg-[#b4dcfff7] text-[14px]">
            <tr>
              <th className="py-[10px] w-[4%]"></th>
              <th className="py-[10px]   w-[10%]  font-bold ">
                <p>번호</p>
              </th>
              <th className="py-[10px] w-[56%]  font-bold">
                <p className="border-solid border-[#82aaff] min-[1281px]:border-x-[1px] py-[10px] max-[1280px]:border-l-[1px]">
                  제목
                </p>
              </th>
              <th className="py-[10px] w-[15%]  font-bold max-[1280px]:hidden">
                작성자
              </th>
              <th className="py-[10px] w-[15%]  font-bold max-[1280px]:hidden">
                <p className="border-solid border-[#82aaff] border-l-[1px] py-[10px]">
                  작성일
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {dataList &&
              dataList.map((item: DataNotice, index: number) => (
                <tr
                  key={item?.id}
                  className="border-b-[1px] border-solid "
                  onClick={() => navigate(`/campaign/${item?.id}`)}
                >
                  <th className="py-[20px] w-[4%] font-normal">
                    {isAdmin ? (
                      <input
                        checked={totalChecked.includes(item.id)}
                        id={`${item.id}`}
                        onChange={(e) => {
                          handleChangeCheckBox(item.id, e);
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        type="checkbox"
                        className=" top-[6px] left-0 z-[20] w-[20px] h-[30px]  checked:accent-[#0066C1] inline-block rounded-none outline-none"
                      />
                    ) : (
                      ""
                    )}
                  </th>
                  <th className="py-[20px] w-[10%] font-normal">
                    {item.index}
                  </th>
                  <th className="py-[20px] w-[56%] text-left font-normal px-[20px]">
                    <div>
                      <span>{item?.title}</span>
                      <p className="max-[1280px]:block min-[1281px]:hidden mt-[10px] opacity-50">
                        {dayjs(item?.updated_at).format("YYYY-MM-DD")}
                      </p>
                    </div>
                  </th>
                  <th className="py-[20px] w-[15%] font-normal max-[1280px]:hidden">
                    {item?.author}
                  </th>
                  <th className="py-[20px] w-[15%] font-normal max-[1280px]:hidden">
                    {dayjs(item?.updated_at).format("YYYY-MM-DD")}
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="mt-[60px] mb-[20px] relative  z-40 w-full flex justify-center">
          <Pagination
            totalList={totalList}
            page={page}
            setColDataCurrent={setColDataCurrent}
            sizePage={10}
          />
        </div>
        {isAdmin ? (
          <div className="flex justify-center xl:mt-[20px] xl:absolute xl:right-0 xl:bottom-[28px] cursor-pointer z-40 max-[1200px]:mb-[20px] ">
            {/* put  */}
            <p
              className="py-[6px] px-[20px] border-[1px] border-solid border-[#969696]"
              onClick={() => {
                handleClickEdit();
              }}
            >
              수정
            </p>
            {/* delete  */}
            <p
              className="py-[6px] px-[20px] border-[1px] border-solid border-[#969696] mx-[12px] bg-[#d1d1d16b]"
              onClick={handleDelete}
            >
              삭제
            </p>
            {/* create */}
            <div
              className="py-[6px] px-[20px] flex bg-[#0066C1] text-white"
              onClick={handleCreate}
            >
              <i className="bi bi-pencil mx-[6px]"></i>
              <p>글쓰기</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ContentAdmin;
