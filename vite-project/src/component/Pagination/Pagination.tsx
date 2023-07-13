import React, { useEffect } from "react";
import { useRef } from "react";
interface DataPagination {
  page: string;
  totalList: number;
  setColDataCurrent: (pageChange: string) => void;
  sizePage: number;
}
const Pagination: React.FC<DataPagination> = ({
  page,
  totalList,
  setColDataCurrent,
  sizePage,
}) => {
  const firstPage = useRef("");
  const lastPage = useRef("");
  const totalColData = useRef<string[]>([]);

  useEffect(() => {
    firstPage.current = "0";
    lastPage.current = Math.ceil(totalList / sizePage).toString();
    totalColData.current = lastPage.current
      ? Array(parseInt(lastPage.current)).fill("1")
      : [];
  }, [totalList, sizePage]);

  return (
    <div className="flex justify-center flex-wrap w-[500px]">
      {firstPage.current !== page ? (
        <>
          <span
            onClick={() => setColDataCurrent(firstPage.current)}
            className=" my-[4px] bg-[#F1F1F1] p-[8px] px-[14px] text-black border-[1px] border-solid border-[#CCCCCC]  mx-[6px] cursor-pointer hover:bg-[#a5d5ffa7]"
          >
            <i className="bi bi-chevron-double-left"></i>
          </span>
          <span
            onClick={() => setColDataCurrent((Number(page) - 1).toString())}
            className="my-[4px] bg-[#F1F1F1] p-[8px] px-[14px] text-black border-[1px] border-solid border-[#CCCCCC]  mx-[6px] cursor-pointer hover:bg-[#a5d5ffa7]"
          >
            <i className="bi bi-chevron-left"></i>
          </span>
        </>
      ) : (
        ""
      )}

      {totalColData.current.map((item, index: number) => {
        if (
          index === 0 ||
          index === totalColData.current.length - 1 ||
          page === index.toString() ||
          page === (index - 1).toString() ||
          page === (index + 1).toString()
        ) {
          return (
            <a
              href="#search"
              key={index}
              onClick={() => setColDataCurrent(index.toString())}
              className="my-[4px] p-[8px] px-[14px]  border-[1px] text-black border-solid border-[#CCCCCC]  mx-[6px]"
              style={{
                backgroundColor: page === index.toString() ? "#0066C1" : "",
                color: page === index.toString() ? "white" : "",
              }}
            >
              {index + 1}
            </a>
          );
        } else if (
          page === (index - 2).toString() ||
          page === (index + 2).toString()
        ) {
          return (
            <a
              href="#search"
              key={index}
              onClick={() => setColDataCurrent(index.toString())}
              className="my-[4px] p-[8px] px-[14px]  border-[1px] text-black border-solid border-[#CCCCCC]  mx-[6px]"
              style={{
                backgroundColor: page === index.toString() ? "#0066C1" : "",
                color: page === index.toString() ? "white" : "",
              }}
            >
              ...
            </a>
          );
        }
      })}

      {(parseInt(lastPage.current) - 1).toString() !== page ? (
        <>
          <span
            onClick={() => setColDataCurrent((Number(page) + 1).toString())}
            className="my-[4px] bg-[#F1F1F1] p-[8px] px-[14px] text-black border-[1px] border-solid mx-[6px] border-[#CCCCCC] cursor-pointer hover:bg-[#a5d5ffa7]"
          >
            <i className="bi bi-chevron-right"></i>
          </span>
          <span
            onClick={() =>
              setColDataCurrent(
                (parseInt(lastPage.current) - 1).toString() || ""
              )
            }
            className="my-[4px] bg-[#F1F1F1] p-[8px] px-[14px] text-black border-[1px] border-solid mx-[6px] border-[#CCCCCC] cursor-pointer hover:bg-[#a5d5ffa7]"
          >
            <i className="bi bi-chevron-double-right"></i>
          </span>
        </>
      ) : (
        " "
      )}
    </div>
  );
};

export default Pagination;
