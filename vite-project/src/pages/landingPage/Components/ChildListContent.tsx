import React, { useEffect, useState } from "react";
import { other } from "../../../services/DataLandingPage";
interface Prop {
  url: string;
}
const ChildListContent = ({ url }: Prop) => {
  const [dataListContent, setdataListContent] = useState([]);
  useEffect(() => {
    (async () => {
      const responsive = await other(url);
      console.log(responsive.data.data?.list.slice(0, 4));

      setdataListContent(responsive.data.data?.list.slice(0, 4));
    })();
  }, []);
  return (
    <div className="border-y-[2px] border-main mt-[12px]">
      <ul className="list-square">
        {dataListContent &&
          dataListContent.map((item: { title: string }, index: number) => (
            <li key={index} className=" cursor-pointer   hover:bg-hoverContent">
              <div className="p-2 flex items-center justify-between w-full  ">
                <div className="bg-black w-[8px] h-[8px] mx-[2px] "></div>
                <div className="w-4/5 flex  items-center truncate overflow-hidden">
                  <span className="truncate ">{item.title}</span>
                </div>
                <i className="bi bi-chevron-right p-1 "></i>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ChildListContent;
