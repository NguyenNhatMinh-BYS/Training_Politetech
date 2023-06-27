import React from "react";

const ContentDetailHeader = () => {
  return (
    <div className="flex justify-between items-center w-full ">
      <h1 className="text-2xl font-bold">공지사항</h1>
      <div className="bg-main p-0.5 px-1.5  cursor-pointer">
        <i className="bi bi-plus-lg text-3xl text-white rounded-sm"></i>
      </div>
    </div>
  );
};

export default ContentDetailHeader;
