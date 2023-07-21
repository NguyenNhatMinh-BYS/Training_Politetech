import React from "react";
import { useRef, useState, useEffect } from "react";
import HeaderSearch from "@/component/HeaderSearch/HeaderSearch";
import { FacilityData } from "@/model/Auth.model";
import { table } from "console";
import Pagination from "@/component/Pagination/Pagination";
const ContentAdmin = ({ data, isLoad }: any) => {
  const totalData = useRef<Array<Array<FacilityData>>>([]);
  const [renderData, setRednerData] = useState<Array<FacilityData>>([]);
  const [page, setPage] = useState<number>(0);
  const totalList = useRef<number>(1);
  let listData: any = [];
  data.forEach((item: FacilityData) => listData.push(item));

  const getData = () => {};
  useEffect(() => {
    totalData.current = [];
    totalList.current = Math.ceil(listData.length / 10);
    console.log(totalList.current);

    let lengthData: number = listData.length;
    for (let i = 0; i < totalList.current; i++) {
      let tmp: Array<FacilityData> = [];
      for (let j = i * 10; j < i * 10 + 10; j++) {
        if (listData[j]) {
          listData[j].index = lengthData;
          tmp.push(listData[j]);
          lengthData--;
        }
      }
      totalData.current.push(tmp);
    }
    setRednerData(totalData.current[page]);
    console.log(totalData.current[page]);
  }, [listData.length]);
  const setColDataCurrent = (pageChange: string) => {
    console.log(pageChange);
    setRednerData(totalData.current[parseInt(pageChange)]);
    setPage(parseInt(pageChange));
  };
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
      <div className="w-3/4 mb-[60px] ">
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
            {renderData &&
              renderData.map((item: FacilityData, index: number) => (
                <tr key={item.index}>
                  <th className="py-[10px]">
                    <p className=" font-normal py-[10px] ">{item.index}</p>
                  </th>
                  <th className="py-[10px] ">
                    <p className=" py-[10px] font-normal ">{item.district}</p>
                  </th>

                  <th className="py-[10px]">
                    <p className=" font-normal py-[10px] ">{item.kinds}</p>
                  </th>
                  <th className="py-[10px]">
                    <p className=" font-normal py-[10px] ">{item.spotname}</p>
                  </th>
                  <th className="py-[10px]">
                    <p className=" font-normal py-[10px] ">
                      길이 {item.length} / 폭 {item.breadth}
                    </p>
                  </th>
                  <th className="py-[10px] w-[15%]">
                    <img
                      src={`data:image/png;base64, ${item.img}`}
                      alt="img"
                      className="h-[80px] w-[140px] mr-0 pr-0 inline-block object-cover"
                    />
                  </th>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              {isLoad ? (
                <th className="absolute text-center left-0 right-0 py-[20px] text-[16px]">
                  <p> Loading...</p>
                </th>
              ) : !isLoad && listData.length === 0 ? (
                <th className="absolute text-center left-0 right-0 py-[20px] text-[16px]">
                  <p> 현재 사용 가능한 데이터가 없습니다.</p>{" "}
                </th>
              ) : (
                ""
              )}
            </tr>
          </tfoot>
        </table>
      </div>
      <div>
        <Pagination
          totalList={listData.length}
          page={page.toString()}
          setColDataCurrent={setColDataCurrent}
          sizePage={10}
        />
      </div>
    </div>
  );
};

export default ContentAdmin;
