import React from "react";
import { useRef, useState, useEffect } from "react";
import HeaderSearch from "@/component/HeaderSearch/HeaderSearch";
import { FacilityData } from "@/model/Auth.model";
import { table } from "console";
const ContentAdmin = ({ data, isLoad }: any) => {
  let listData: any = [];
  data.forEach((item: FacilityData) => listData.push(item));
  console.log(data);

  const getData = () => {};
  useEffect(() => {}, []);

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <div className="max-[1024px]:flex-col  flex justify-center  w-full  items-center">
        <HeaderSearch
          searchAuthor={false}
          getData={getData}
          manageUser={false}
          searchBy={false}
        />
      </div>
      <div className="w-3/4  ">
        <table className="w-full">
          <thead className="bg-[#b4dcfff7] text-[14px] w-full ">
            <tr>
              <th className="py-[10px]">
                <p className=" py-[10px] border-solid border-[#82aaff] border-r-[1px]">
                  번호
                </p>
              </th>
              <th className="py-[10px]">
                <p className=" py-[10px] border-solid border-[#82aaff] border-r-[1px]">
                  행정구역
                </p>
              </th>

              <th className="py-[10px]">
                <p className=" py-[10px] border-solid border-[#82aaff] border-r-[1px]">
                  행정구역
                </p>
              </th>
              <th className="py-[10px]">
                <p className=" py-[10px] border-solid border-[#82aaff] border-r-[1px]">
                  시설명
                </p>
              </th>
              <th className="py-[10px]">
                <p className=" py-[10px] border-solid border-[#82aaff] border-r-[1px]">
                  시설규모
                </p>
              </th>
              <th className="py-[10px]">
                <p className=" py-[10px] ">이미지</p>
              </th>
            </tr>
          </thead>

          <tbody>
            {listData.map((item: FacilityData) => (
              <tr>
                <th className="py-[10px]">
                  <p className=" py-[10px] border-solid border-[#82aaff] border-r-[1px]">
                    번호
                  </p>
                </th>
                <th className="py-[10px]">
                  <p className=" py-[10px] ">행정구역</p>
                </th>

                <th className="py-[10px]">
                  <p className=" py-[10px] ">행정구역</p>
                </th>
                <th className="py-[10px]">
                  <p className=" py-[10px] ">시설명</p>
                </th>
                <th className="py-[10px]">
                  <p className=" py-[10px] ">시설규모</p>
                </th>
                <th className="py-[10px]">
                  <p className=" py-[10px] ">이미지</p>
                </th>
              </tr>
            ))}
          </tbody>
          {isLoad ? (
            <div className="absolute text-center left-0 right-0 py-[20px] text-[16px]">
              Loading...
            </div>
          ) : !isLoad && listData.length === 0 ? (
            <div className="absolute text-center left-0 right-0 py-[20px] text-[16px]">
              현재 사용 가능한 데이터가 없습니다.{" "}
            </div>
          ) : (
            ""
          )}
        </table>
      </div>
    </div>
  );
};

export default ContentAdmin;
