import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { notice } from "@/services/apiNotice";
import { DataNotice } from "@/model/Auth.model";
import Nav from "@/component/Navigate/Nav";
import dayjs from "dayjs";
const NoticeDetail = () => {
  const param = useParams();
  const [data, setData] = useState<DataNotice>();
  useEffect(() => {
    (async () => {
      try {
        const response = await notice({ page: "0", search_by: "title" });
        console.log(response.data.data?.list);

        setData(
          response.data.data?.list.find(
            (item: DataNotice) => item.id === param.id
          )
        );
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="relative">
      <Nav colorText="text-black" />
      <div className=" relative w-full flex justify-center top-[200px]">
        <div className="w-3/5">
          {/* title  */}
          <div>
            <h1 className="text-transparent text-[28px] font-black bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text w-[120px] ">
              공지사항
            </h1>
          </div>
          {/* information  */}
          <div className="w-full bg-[#b4dcfff7] my-[40px] px-[20px] py-[10px] font-bold">
            <h1>{data?.title}</h1>
          </div>
          <div>
            <div>
              <h1 className="font-bold">작성자</h1>
            </div>
            <div>
              <p>{data?.author}</p>
              <h1>작성일</h1>
            </div>
            <div>
              <p>{dayjs(data?.updated_at).format("YYYY-MM-DD")}</p>
            </div>
            {/* content  */}
            <div>
              <div dangerouslySetInnerHTML={{ __html: data?.content || "" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetail;
