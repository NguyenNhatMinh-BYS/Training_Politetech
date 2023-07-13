import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

interface ChangeContent {
  handleChangeContent: (value: string) => void;
  content: string;
}
const ContentQuill: React.FC<ChangeContent> = ({
  handleChangeContent,
  content,
}) => {
  const [value, setValue] = useState("");

  const module = {
    toolbar: false,
  };
  return (
    <ReactQuill
      modules={module}
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

export default ContentQuill;
