import React, { useState } from "react";

const AddTask = ({ onAddTask }) => {
  // 使用useState钩子来管理输入框的状态
  const [inputText, setInputText] = useState("");

  // 处理输入框值变化的函数
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // 处理表单提交的函数
  const handleFormSubmit = (e) => {
    e.preventDefault(); // 阻止表单默认提交行为
    if (inputText.trim() === "") {
      alert("任务内容不能为空");
      return;
    }
    // 调用父组件传递的回调函数，传递任务内容
    onAddTask(inputText);
    // 清空输入框
    setInputText("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="添加新任务..."
      />
      <button type="submit">添加任务</button>
    </form>
  );
};

export default AddTask;
