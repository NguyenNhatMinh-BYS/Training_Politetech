import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

interface ChangeContent {
  handleChangeContent: (value: string) => void;
  content: string;
  module: any;
}
const FreeBoardQuill: React.FC<ChangeContent> = ({
  handleChangeContent,
  content,
  module,
}) => {
  const [value, setValue] = useState("");

  return (
    <ReactQuill
      modules={module}
      theme="snow"
      value={content}
      onChange={(value) => {
        handleChangeContent(value);
        setValue(value);
      }}
      className={`editor-input  `}
      style={{ height: "400px", marginBottom: "80px" }}
      placeholder="제목을 입력해주세요."
    />
  );
};

export default FreeBoardQuill;
