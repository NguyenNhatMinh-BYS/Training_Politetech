import React, { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

interface ChangeContent {
  handleChangeContent: (value: string) => void;
  content: string;
}
const LivingLabQuill: React.FC<ChangeContent> = ({
  handleChangeContent,
  content,
}) => {
  const [value, setValue] = useState("");

  const module = useRef({
    toolbar: [
      [{ header: [1, 2, false] }],

      ["bold", "italic", "underline", "strike", "blockquote"],

      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["clean", "link", "image"],
    ],
  });
  return (
    <ReactQuill
      modules={module.current}
      theme="snow"
      value={content}
      onChange={(value) => {
        handleChangeContent(value);
        setValue(value);
      }}
      className="editor-input"
      placeholder="제목을 입력해주세요."
    />
  );
};

export default LivingLabQuill;
