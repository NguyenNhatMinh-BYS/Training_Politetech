import { useEffect, useState } from "react";
import { other } from "@/services/apiNotice";
import Loading from "@/pages/loading/Loading";
import { useDispatch } from "react-redux";
import { activeLoading } from "@/features/loadingSlice/loadingSlice";
import { Link, useNavigate } from "react-router-dom";
interface Prop {
  url: string;
}
const ChildListContent = ({ url }: Prop) => {
  const [dataListContent, setdataListContent] = useState([]);
  const dispath = useDispatch();
  const navigate = useNavigate();
  const getData = async () => {
    dispath(activeLoading(true));

    try {
      const responsive = await other(url);
      // console.log(responsive.data.data?.list.slice(0, 4));

      setdataListContent(responsive.data.data?.list.slice(0, 4));
    } catch (err) {
      console.log(err);
    }

    dispath(activeLoading(false));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="border-y-[2px] border-main mt-[12px]">
      <ul className="list-square">
        {dataListContent &&
          dataListContent.map(
            (item: { title: string; id?: string }, index: number) => (
              <Link
                key={index}
                to={`${url === "/free-board" ? "/freeboard" : url}/${
                  url === "/content" ? "" : item.id
                }`}
              >
                <li className=" cursor-pointer   hover:bg-hoverContent">
                  <div className="p-2 flex items-center justify-between w-full  ">
                    <div className="bg-black w-[8px] h-[8px] mx-[2px] "></div>
                    <div className="w-4/5 flex  items-center truncate overflow-hidden">
                      <span className="truncate ">{item.title}</span>
                    </div>
                    <i className="bi bi-chevron-right p-1 "></i>
                  </div>
                </li>
              </Link>
            )
          )}
      </ul>
    </div>
  );
};

export default ChildListContent;
