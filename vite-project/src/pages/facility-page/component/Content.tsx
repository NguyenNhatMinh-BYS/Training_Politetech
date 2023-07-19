import Map from "./Map";
import { useState, useEffect, useRef } from "react";
import { FacilityData } from "@/model/Auth.model";
import { activeLoading } from "@/features/loadingSlice/loadingSlice";
import { useDispatch } from "react-redux";
import Loading from "@/pages/loading/Loading";
import DetailFacility from "./DetailFacility";
const Content = ({ data, isLoad }: any) => {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const isClear = useRef<HTMLDivElement>(null);
  const [offFill, setOffFill] = useState(false);
  const [titleLocation, setTitleLocation] = useState("부산");
  const [activeDetail, setActiveDetail] = useState(false);
  const [itemSelected, setItemSelected] = useState<FacilityData>();
  let listData: any = [];

  const updateLocation = (local: string) => {
    setLocation(local);
    setTitleLocation(local);
    isClear.current?.classList.remove(
      ..."bg-gradient-to-r from-blue-700 to-blue-400 text-white".split(" ")
    );
    isClear.current?.classList.add(
      ..."bg-white text-[#60a5fa] border-solid border-[1px] border-[#60a5fa]".split(
        " "
      )
    );
  };
  location === ""
    ? data.forEach((item: FacilityData) => listData.push(item))
    : data.forEach((item: FacilityData) => {
        if (item.district === location.trim()) {
          listData.push(item);
        }
      });

  useEffect(() => {
    console.log(listData, location);

    if (listData.length === 0) dispatch(activeLoading(true));
    if ((listData.length === 0 && location !== "") || listData.length !== 0) {
      dispatch(activeLoading(false));
    }
  });
  const clearFilter = () => {
    setOffFill(true);
    setLocation("");
    isClear.current?.classList.remove(
      ..."bg-white text-[#60a5fa] border-solid border-[1px] border-[#60a5fa]".split(
        " "
      )
    );
    isClear.current?.classList.add(
      ..."bg-gradient-to-r from-blue-700 to-blue-400 text-white".split(" ")
    );
  };
  const handleSelectArea = () => {
    setOffFill(false);
  };
  const showDetail = (item: FacilityData) => {
    console.log(123);

    setActiveDetail(true);
    setItemSelected(item);
  };
  const handleCloseDetail = () => {
    setActiveDetail(false);
  };
  return (
    <div className="w-full flex justify-center mt-[60px] mb-[80px]  ">
      <Loading />
      {activeDetail === true ? (
        <DetailFacility
          itemSelected={itemSelected}
          handleCloseDetail={handleCloseDetail}
        />
      ) : (
        ""
      )}
      <div className="w-3/5">
        {/* title  */}
        <div>
          <h1 className="text-transparent text-[28px] font-black bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text w-[120px] ">
            시설현황
          </h1>
        </div>
        <div className="flex justify-between mt-[10px] w-full max-[1280px]:flex-col max-[1280px]:justify-center max-[1280px]:items-center">
          <div className="w-[420px]">
            <h1
              ref={isClear}
              onClick={clearFilter}
              className="cursor-pointer text-[15px] bg-gradient-to-r from-blue-700 to-blue-400 inline-block text-white  px-[10px] py-[10px] rounded-md my-[60px] ml-[40px]"
            >
              부산 전체보기
            </h1>
            <div className="w-full min-[1280px]:pr-[20px]">
              <Map
                updateLocation={updateLocation}
                offFill={offFill}
                handleSelectArea={handleSelectArea}
              ></Map>
            </div>
          </div>

          <div className="w-[420px]">
            <div className="flex  text-[22px] font-bold">
              <span className="text-blue-700">{titleLocation}</span>
              <span>수거사각지대</span>
            </div>
            <div className="mt-[40px] w-full h-[560px]  border-[1px] border-black border-solid rounded-sm overflow-auto">
              {listData &&
                listData.map((item: FacilityData, index: number) => (
                  <div
                    key={index}
                    className="hover:bg-[#b8d4ff79] w-full "
                    onClick={() => showDetail(item)}
                  >
                    <div className="mx-[20px] py-[4px] border-b-[1px] border-solid border-[#b5b5b5cc] ">
                      <h1 className=" font-bold text-[20px]">
                        {item.spotname}
                      </h1>
                      <div className="flex">
                        <div>
                          <img
                            src={`data:image/png;base64, ${item.img}`}
                            alt="img_infor"
                            className="w-[160px] h-[100px]"
                          />
                        </div>
                        <div className="ml-[20px]">
                          <div className="flex items-center ">
                            <div className="h-[6px] w-[6px] bg-blue-700 mx-[6px]  "></div>
                            <span>위치 : {item.address}</span>
                          </div>
                          <div className="flex items-center ">
                            <div className="h-[6px] w-[6px] bg-blue-700 mx-[6px]  "></div>
                            <span> 길이 : {item.length}</span>
                          </div>
                          <div className="flex items-center ">
                            <div className="h-[6px] w-[6px] bg-blue-700 mx-[6px]  "></div>
                            <span> 폭 : {item.breadth}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="text-center py-[10px] text-[20px] font-medium">
                {isLoad === true ? <div>Loading ...</div> : ""}
              </div>
              <div className="text-center py-[10px]">
                {listData.length === 0 && location !== "" && !isLoad ? (
                  <div>현재 사용 가능한 데이터가 없습니다.</div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
