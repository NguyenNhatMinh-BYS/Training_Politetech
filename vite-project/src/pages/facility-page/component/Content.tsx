import React from "react";
import map from "assets/img/mapPage4.png";
const Content = () => {
  return (
    <div className="w-full flex justify-center mt-[60px] mb-[80px]  ">
      <div className="w-3/5">
        {/* title  */}
        <div>
          <h1 className="text-transparent text-[28px] font-black bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text w-[120px] ">
            공지사항
          </h1>
        </div>
        <div>
          <div>
            <h1>부산 전체보기</h1>
            <div>
              <img src={map} alt="map" />
            </div>
          </div>

          <div>
            <div>
              <span>부산</span>
              <span>수거사각지대</span>
            </div>
            <div>Table</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
