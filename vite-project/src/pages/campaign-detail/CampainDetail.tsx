import { campaignDetail } from "@/services/apiCampaign";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "@/component/Navigate/Nav";
import Footer from "@/component/Footter/Footer";
import { campaigngApi } from "@/model/Auth.model";
import "@/index.css";

const CampainDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<campaigngApi>();

  useEffect(() => {
    
    try {
      (async () => {
        const response = await campaignDetail({ id: id });
        console.log(response.data.data);

        setData(response.data.data);
      })();
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <div className=" pt-[100px]  ">
      <Nav colorText="text-black" />
      <div className="w-full flex justify-center">
        <div className="w-3/5 ">
          <div className="my-[40px]">
            <h1 className="text-transparent text-[28px] font-black bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text w-[120px] ">
              시설현황
            </h1>
          </div>
          <div className="flex mb-[80px] justify-between max-[2048px]:justify-center max-[1080px]:flex-wrap  ">
            <img
              src={data?.image}
              alt="img"
              className="mr-[40px] w-1/2 object-cover max-h-[600px] max-[1080px]:w-full max-[1080px]:mr-0"
            />
            <div className="max-[1080px]:mt-[40px] w-full lg:w-[calc(100%-400px)] xl:min-h-[450px] xl:w-[calc(100%-500px)] 2xl:w-[calc(100%-600px)]">
              <h1 className="bg-[#D4E9FC] text-[20px] font-bold px-[20px] py-[10px]">
                {data?.title}
              </h1>
              <div className="flex px-[20px]   py-[10px] border-solid border-b-[1px] border-[#CCCCCC]  ">
                <h1 className="w-[30%] font-bold border-r-[1px] border-solid border-[#CCCCCC]">
                  작성자
                </h1>
                <p className="w-[70%] pl-[20px] text-[14px]">{data?.author}</p>
              </div>
              <div className="flex px-[20px] w-full  py-[10px] border-solid border-b-[1px] border-[#CCCCCC]">
                <h1 className="w-[30%] font-bold border-r-[1px] border-solid border-[#CCCCCC]">
                  링크
                </h1>
                <a
                  className="w-[70%] pl-[20px]  text-[14px] text-blue-600 underline break-words "
                  target="blank"
                  href={data?.link}
                >
                  {data?.link}
                </a>
              </div>
              <p
                className=".ql-editor px-[20px] py-[10px] border-solid border-b-[1px] border-[#CCCCCC] min-h-[200px] text-[18px]"
                dangerouslySetInnerHTML={{ __html: data?.content || "" }}
              ></p>
            </div>
          </div>
          <div
            className=" flex justify-end mb-[60px]"
            onClick={() => {
              navigate("/campaign");
            }}
          >
            <div className="text-white bg-gradient-to-r from-blue-700 to-blue-400 inline-block text-end px-[20px] py-[10px] cursor-pointer">
              목록으로
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CampainDetail;
