import { useNavigate } from "react-router-dom";
import Nav from "@/component/Navigate/Nav";
import Footer from "@/component/Footter/Footer";
import FreeBroadQuill from "./FreeBroadQuill";
import { Controller, useForm } from "react-hook-form";
import * as yub from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";

import {
  editFreeBroad,
  freeBoardDetail,
  postFreeBoard,
  putFreeBoard,
} from "@/services/apiFreeBroad";
interface Title {
  title: string;
}
const schema = yub.object().shape({
  title: yub.string().required("입력하세요"),
});
const FreeBroadEdit = () => {
  const { infor, password } = useLocation().state;
  const [contentt, setContent] = useState("");
  const navigate = useNavigate();
  const author = useRef("");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<Title>({
    mode: "onChange",
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (infor !== "") {
      (async () => {
        try {
          const response = await freeBoardDetail({ id: infor.toString() });
          if (password) author.current = response.data.data.author;

          setContent(response.data.data.content);
          setValue("title", response.data.data.title);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);

  const createNotice = (data: Title, token: string) => {
    try {
      (async () => {
        await postFreeBoard(
          {
            title: data.title,
            content: contentt,
          },
          token
        );
        navigate(-1);
        toast.success("Created notice successfully");
      })();
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = async (data: Title) => {
    if (password) {
      try {
        const response = await editFreeBroad(infor, {
          password: password,
          title: data.title,
          content: contentt,
        });
        console.log(response);

        navigate("/freeboard");
        toast.success(" Edit successfully");
      } catch (e) {
        console.log(e);
      }
    } else {
      const token = localStorage.getItem("token") || "";
      if (infor === "") createNotice(data, token);
      else {
        try {
          const response = await putFreeBoard(
            {
              title: data.title,
              content: contentt,
            },

            token,
            infor[0]
          );

          navigate(-1);
          toast.success("Created Edit successfully");
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

  const handleChangeContent = (value: string) => {
    setContent(value);
  };

  return (
    <div className=" pt-[100px] ">
      <Nav colorText="text-black" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex justify-center ">
          <div className="w-3/5">
            <h1 className=" mt-[60px] mb-[20px] text-transparent text-[28px] font-black bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text inline-block">
              부산 전체보기
            </h1>
            {password ? (
              <div className="w-full flex overflow-hidden mb-[40px]">
                <div className="flex w-1/2 flex-1">
                  <h1 className=" text-[18px] font-bold text-center bg-[#b9e0ff] py-[14px] min-w-[160px]">
                    제목
                  </h1>
                  <input
                    className=" outline-none pl-[20px]  block grow-[7]"
                    type="text"
                    value={author.current}
                    disabled
                  />
                </div>
                <div className="flex w-1/2 flex-1">
                  <h1 className=" text-[18px] font-bold text-center bg-[#b9e0ff] py-[14px] min-w-[160px]">
                    제목
                  </h1>
                  <input
                    className=" outline-none pl-[20px] grow-[7]"
                    type="password"
                    value={password}
                    disabled
                  />
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="flex w-full  relative  bg-white border-[2px] border-solid ">
              <h1 className="   text-[18px] font-bold text-center bg-[#b9e0ff] py-[14px] min-w-[160px]">
                제목
              </h1>

              <Controller
                control={control}
                name="title"
                render={({ field: { onChange } }) => (
                  <div className="  flex grow-[7]">
                    <input
                      className=" outline-none pl-[20px] "
                      type="text"
                      placeholder="제목을 입력해주세요."
                      {...register("title")}
                    />

                    <p className="text-red-500 absolute bottom-[-30px] left-0">
                      {errors.title?.message}
                    </p>
                  </div>
                )}
              />
            </div>

            <div className="mt-[40px]">
              <FreeBroadQuill
                content={contentt}
                handleChangeContent={handleChangeContent}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end w-4/5 mb-[20px] cursor-pointer">
          <button
            type="submit"
            className="mr-[20px] from-blue-700 to-blue-400 bg-gradient-to-r px-[40px] py-[10px] text-white"
          >
            수정
          </button>
          <div
            onClick={() => navigate(-1)}
            className="px-[40px] py-[10px] bg-[#D9D9D9] border-solid border-[1px] border-[#707070cc]"
          >
            취소
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default FreeBroadEdit;
