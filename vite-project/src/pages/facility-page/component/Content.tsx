import Map from "./Map";
import { useState, useEffect } from "react";
import { FacilityData } from "@/model/Auth.model";
import { useDispatch } from "react-redux";
import { activeLoading } from "@/features/loadingSlice/loadingSlice";
import Loading from "@/pages/loading/Loading";
const Content = ({ data }: any) => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");
  let listData: any = [];
  const updateLocation = (local: string) => {
    setLocation(local);
  };
  location === ""
    ? data.forEach((item: FacilityData) => listData.push(item))
    : data.forEach((item: FacilityData) => {
        if (item.district === location.trim()) {
          listData.push(item);
        }
      });

  useEffect(() => {
    console.log(listData);

    if (listData.length === 0) dispatch(activeLoading(true));
    else {
      dispatch(activeLoading(false));
    }
  });

  return (
    <div className="w-full flex justify-center mt-[60px] mb-[80px]  ">
      <Loading />
      <div className="w-3/5">
        {/* title  */}
        <div>
          <h1 className="text-transparent text-[28px] font-black bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text w-[120px] ">
            시설현황
          </h1>
        </div>
        <div className="flex justify-between mt-[10px] w-full max-[1280px]:flex-col">
          <div className="w-[420px]">
            <h1 className=" text-[15px] bg-gradient-to-r from-blue-700 to-blue-400 inline-block text-white px-[10px] py-[10px] rounded-md my-[60px] ml-[40px]">
              부산 전체보기
            </h1>
            <div className="w-full min-[1280px]:pr-[20px]">
              <Map updateLocation={updateLocation}></Map>
            </div>
          </div>

          <div className="w-[420px]">
            <div className="flex  text-[22px] font-bold">
              <span className="text-blue-700">부산</span>
              <span>수거사각지대</span>
            </div>
            <div className="mt-[40px] w-full h-[560px]  border-[1px] border-black border-solid rounded-sm overflow-auto">
              {listData &&
                listData.map((item: FacilityData, index: number) => (
                  <div key={index} className="hover:bg-[#b8d4ff79] w-full">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
