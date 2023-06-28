import { useEffect, useRef, useState } from "react";
import { login } from "../../services/login";
import { toast } from "react-toastify";
import { RootState } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getDataUser } from "../../features/DataUserSlice/DataUserSlice";
interface User {
  username: string;
  password: string;
}

const FormLogin = () => {
  const checkBox = useRef<HTMLInputElement>(null);
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();
  const payload = useSelector((state: RootState) => state.dataUser);
  const dispatch = useDispatch();
  //post api
  const handlePostAPI = async (data: User) => {
    try {
      const response = await login(data);

      dispatch(getDataUser(response.data.user));
      navigate("/");
    } catch (err: any) {
      console.log(err);

      if (err.response && err.response.status === 400) {
        toast.error("Password Incorrect !!!");
      } else if (err.response && err.response.status === 404) {
        toast.error("Account not exist !!!");
      }
    }
  };
  //checkBox
  const handleClickCheckBox = () => {
    checkBox &&
      checkBox.current &&
      checkBox.current.classList.toggle("opacity-0");
  };
  //change input name user
  const handleChangeInputName = (value: string) => {
    setInputName(value.trim());
  };
  //change input password
  const handleChangeInputPassword = (value: string) => {
    setInputPassword(value.trim());
  };
  const handleSubmit = () => {
    if (inputName.length === 0) {
      toast.warning("Please Provide UserName !!!");
    } else if (inputPassword.length === 0) {
      toast.warning("Please Provide Password !!!");
    } else {
      const username = inputName;
      const password = inputPassword;
      handlePostAPI({ username, password });
    }
  };
  return (
    <div className="w-full flex justify-center   ">
      <div className="rounded-sm  px-5 sm:border-2 sm:border-solid sm:border-[#999999]  w-[480px]">
        {/* title  */}
        <header className="text-center m-[20px] text-[24px] font-extrabold">
          <h1>로그인</h1>
        </header>
        {/* form login */}
        <form action="#" className="flex flex-col">
          <label className="text-[16px]" htmlFor="name">
            아이디
          </label>
          <input
            value={inputName}
            onChange={(e) => handleChangeInputName(e.target.value)}
            placeholder="아이디를 입력하세요."
            className="focus:outline-none text-[16px] p-[6px] pl-[12px] mt-[4px] mb-[4px] border-2 border-[#999999] border-solid"
            type="text"
            id="name"
          />
          <label className="text-[16px]" htmlFor="password">
            비밀번호
          </label>
          <input
            value={inputPassword}
            onChange={(e) => handleChangeInputPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요."
            className="focus:outline-none text-[16px] p-[6px] pl-[12px] mt-[4px] mb-[4px] border-2 border-[#999999] border-solid"
            type="password"
            id="password"
          />
        </form>
        {/* checkbox */}
        <div className="mt-[10px] flex items-center">
          <div className="h-5 w-5 relative " onClick={handleClickCheckBox}>
            <input disabled className="h-5 w-5 " type="checkbox" />
            <i
              className="bi bi-check2 absolute left-[2px] top-[-2px] opacity-0"
              ref={checkBox}
            ></i>
          </div>
          <span className="ml-[6px] text-[14px]">아이디 기억하기</span>
        </div>
        {/* button submit */}
        <div className="flex flex-col  mt-[60px] mb-[20px]">
          <button
            onClick={handleSubmit}
            className="hover:opacity-80 hover: text-white h-[60px] bg-gradient-to-r from-blue-600 to-blue-400"
          >
            확인
          </button>
          <button className="hover:opacity-60 opacity-100 h-[40px] border-2 border-solid border-#ACACAC bg-[#F6F6F6] mt-[6px]">
            리빙랩 회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
