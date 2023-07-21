import { useNavigate } from "react-router-dom";
import Nav from "@/component/Navigate/Nav";
import Footer from "@/component/Footter/Footer";

import { Controller, useForm } from "react-hook-form";
import * as yub from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { postNotice, putNotice } from "@/services/apiNotice";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { noticeDetail } from "@/services/apiNotice";
import Quill from "component/Quill/Quill"
interface Title {
  title: string;
}
const schema = yub.object().shape({
  title: yub.string().required("입력하세요"),
});
const AnnouncementEdit = () => {
  const { infor } = useLocation().state;
  const [contentt, setContent] = useState("");
  const navigate = useNavigate();

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
          const response = await noticeDetail({ id: infor.toString() });
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
        await postNotice(
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

  const onSubmit = (data: Title) => {
    const token = localStorage.getItem("token") || "";
    if (infor === "") createNotice(data, token);
    else {
      try {
        (async () => {
          const response = await putNotice(
            {
              id: infor.toString(),
              title: data.title,
              content: contentt,
            },

            token
          );
          console.log(response);
        })();
        navigate(-1);
        toast.success("Created Edit successfully");
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleChangeContent = (value: string) => {
    setContent(value);
  };
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className=" pt-[100px] ">
      <Nav colorText="text-black" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex justify-center ">
          <div className="w-3/5">
            <h1 className=" mt-[60px] mb-[20px] text-transparent text-[28px] font-black bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text inline-block">
              부산 전체보기
            </h1>
            <div className="flex w-full  relative  bg-white border-[2px] border-solid">
              <h1 className="  grow-[3] text-[18px] font-bold text-center bg-[#b9e0ff] py-[14px]">
                제목
              </h1>

              <Controller
                control={control}
                name="title"
                render={({ field: { onChange } }) => (
                  <div className="grow-[7]  flex ">
                    <input
                      className=" outline-none pl-[20px] w-full"
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
              <Quill
                content={contentt}
                handleChangeContent={handleChangeContent}
                module={{
                  toolbar: [
                    [{ header: [1, 2, false] }],

                    ["bold", "italic", "underline", "blockquote"],

                    [
                      { list: "ordered" },
                      { list: "bullet" },
                      { indent: "-1" },
                      { indent: "+1" },
                    ],
                  ],
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end w-4/5 mb-[20px]">
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

export default AnnouncementEdit;
