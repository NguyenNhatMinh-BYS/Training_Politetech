import { useEffect } from "react";
import "./style.css";
import loading from "assets/img/loading.png";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
const Loading = () => {
  const selector = useSelector((state: RootState) => state.loadingReducer);
  useEffect(() => {
    if (selector.isActive) {
      window.scrollBy({ top: 0 });
      // document.body.style.overflow = "hidden";
    } else {
      // document.body.style.overflow = "scroll";
    }
  });
  return (
    <>
      {selector.isActive ? (
        <div className="w-screen h-screen bg-[#8787876c]  flex justify-center items-center fixed top-0 z-50">
          <img
            src={loading}
            alt="loading"
            className="bg-transparent animate-spin h-[100px]"
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Loading;
