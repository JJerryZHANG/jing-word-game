import React, { useState } from "react";

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  // 不需要使用 useState 钩子

  const handleChangeTask = (taskId) => {
    const task = tasks.find((t) => t.id === taskId);
    const updatedTask = { ...task, done: !task.done };
    onChangeTask(updatedTask);
  };

  const handleDeleteTask = (taskId) => {
    onDeleteTask(taskId);
  };

  const handleEditTask = (taskId) => (e) => {
    const newText = e.target.value;
    const updatedTask = {
      ...tasks.find((t) => t.id === taskId),
      text: newText,
    };
    onChangeTask(updatedTask);
  };

  const handleTaskChange = (taskId) => (e) => {
    const taskIndex = tasks.findIndex((t) => t.id === taskId);
    if (taskIndex !== -1) {
      // 注意：这里需要更新父组件的状态，而不是本地状态
      const newTasks = [...tasks];
      newTasks[taskIndex] = { ...newTasks[taskIndex], text: e.target.value };
      onChangeTask(newTasks[taskIndex]); // 假设 onChangeTask 可以处理整个任务对象的更新
    }
  };

  const handleToggleEdit = (taskId) => () => {
    const taskIndex = tasks.findIndex((t) => t.id === taskId);
    if (taskIndex !== -1) {
      // 注意：这里需要更新父组件的状态，而不是本地状态
      const newTasks = [...tasks];
      newTasks[taskIndex] = {
        ...newTasks[taskIndex],
        editing: !newTasks[taskIndex].editing,
      };
      onChangeTask(newTasks[taskIndex]); // 假设 onChangeTask 可以处理整个任务对象的更新
    }
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.editing ? (
            <>
              <input
                type="text"
                value={task.text}
                onChange={handleTaskChange(task.id)}
              />
              <button onClick={handleToggleEdit(task.id)}>保存</button>
            </>
          ) : (
            <>
              <label>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => handleChangeTask(task.id)}
                />
                {task.text}
              </label>
              <button onClick={handleToggleEdit(task.id)}>编辑</button>
              <button onClick={() => handleDeleteTask(task.id)}>删除</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
