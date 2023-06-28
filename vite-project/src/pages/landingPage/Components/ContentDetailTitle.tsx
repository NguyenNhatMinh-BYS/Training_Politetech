import React from "react";
interface Props {
  title: string;
  text: string;
  date: string;
}
const ContentDetailTitle = (props: Props) => {
  const { title, text, date } = props;

  return (
    <div className="min-[180px]:w-full  cursor-pointer w-260 p-6 rounded-2xl border-borderContent duration-150 transition-all border-solid border hover:bg-main hover:text-white hover:transform hover:duration-150 hover:transition-all">
      <h1 className="mb-2 text-15 font-bold">{title}</h1>
      <p className="mb-2 overflow-hidden line-clamp-3 text-sm">{text}</p>
      <p className="text-xs">{date}</p>
    </div>
  );
};

export default ContentDetailTitle;
