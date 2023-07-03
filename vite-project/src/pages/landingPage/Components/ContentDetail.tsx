import  { useEffect, useRef, useState } from "react";
import ContentDetailTitle from "./ContentDetailTitle";
import ContentDetailHeader from "./ContentDetailHeader";
import { notice } from "../../../services/DataLandingPage";
import { DataNotice } from "../../../model/Auth.model";
const ContentDetail = () => {
  const scroller = useRef<HTMLDivElement>(null);
  const [dataNotice, setDataNotice] = useState([]);
  useEffect(() => {
    function handleScroll() {
      let scrollY = window.scrollY;
      const addClass = "opacity-0 mt-140";
      if (scrollY > 400) {
        // console.log(scrollY);
        scroller &&
          scroller.current &&
          scroller.current.classList.remove(...addClass.split(" "));
      } else if (scrollY < 200) {
        scroller &&
          scroller.current &&
          scroller.current.classList.add(...addClass.split(" "));
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  useEffect(() => {
    (async () => {
      try {
        const responsive = await notice();
        let data = responsive.data.data?.list;
        while (data.length < 4) {
          data.push({
            title: "공지사항 입니다",
            content:
              " 크고 두손을 원대하고, 인간의 봄바람이  크고 두손을 원대하고, 인간의 봄바람이  크고 두손을 원대하고, 인간의 봄바람이  크고 두손을 원대하고, 인간의 봄바람이  크고 두손을 원대하고, 인간의 봄바람이튼튼하며, 천지는 곳이 광야에서 천하를 말이다. 불러 청춘의 바이며, 있는 못할 석가는 끓는 생의 찾아다녀도, 사막이다. 크고 두손을 원대하고, 인간의 봄바람이",
            created_at: "2023-06-23T11:30:06.508507",
          });
        }
        setDataNotice(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div className="flex justify-center w-full  duration-500 transition-all ">
      <div
        className="w-80 mt-140 opacity-0 duration-500 transition-all "
        ref={scroller}
      >
        <ContentDetailHeader title={"공지사항"} />
        <div className="w-full mt-25 flex justify-between flex-wrap ">
          {dataNotice.map((data: DataNotice, index: number) => (
            <div key={index} className="mt-4 lg:w-1/5 lg:mr-4 w-full ">
              <ContentDetailTitle
                title={data.title}
                text={data.content}
                date={data.created_at}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
