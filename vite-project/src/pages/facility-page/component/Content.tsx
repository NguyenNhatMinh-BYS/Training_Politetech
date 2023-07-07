import React from "react";
import map from "assets/img/mapPage4.png";
const Content = () => {
  return (
    <div className="w-full flex justify-center mt-[60px] mb-[80px]  ">
      <div className="w-3/5">
        {/* title  */}
        <div>
          <h1 className="text-transparent text-[28px] font-black bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text w-[120px] ">
            시설현황
          </h1>
        </div>
        <div className="flex justify-between mt-[10px] w-full">
          <div className="w-[420px]">
            <h1 className=" text-[15px] bg-gradient-to-r from-blue-700 to-blue-400 inline-block text-white px-[10px] py-[10px] rounded-md my-[60px] ml-[40px]">
              부산 전체보기
            </h1>
            <div className="w-full">
              <img className="object-cover h-1/2" src={map} alt="map" />
            </div>
          </div>

          <div className="w-[420px]">
            <div className="flex  text-[22px] font-bold">
              <span className="text-blue-700">부산</span>
              <span>수거사각지대</span>
            </div>
            <div className="mt-[40px] w-full h-[560px] overflow-auto border-[1px] border-black border-solid rounded-sm ">
              <div className="hover:bg-[#b8d4ff79] w-full">
                <div className="mx-[20px] py-[4px] border-b-[1px] border-solid border-[#b5b5b5cc] ">
                  <h1 className=" font-bold text-[20px]">서방파제</h1>
                  <div className="flex">
                    <img className="w-[140px] h-[100px]" src={map} alt="map" />
                    <div className="ml-[20px]">
                      <div className="flex items-center ">
                        <div className="h-[6px] w-[6px] bg-blue-700 mx-[6px]  "></div>
                        <span>2323232</span>
                      </div>
                      <div className="flex items-center ">
                        <div className="h-[6px] w-[6px] bg-blue-700 mx-[6px]  "></div>
                        <span>2323232</span>
                      </div>
                      <div className="flex items-center ">
                        <div className="h-[6px] w-[6px] bg-blue-700 mx-[6px]  "></div>
                        <span>2323232</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
