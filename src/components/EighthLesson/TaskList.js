import { useState, useContext } from "react";
import { TasksContext, TasksDispatchContext } from "./TasksContext.js";

export default function TaskList() {
  const tasks = useContext(TasksContext);
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {/* <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} /> */}
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

/* 列表中包含多个Task */
// onChange 函数在App.js定义， 用于返回修改后的task
// onDelete 函数在App.js定义， 用于删除特定task
function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false); //控制编辑状态
  const dispatch = useContext(TasksDispatchContext);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {taskContent}
      <button
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        Delete
      </button>
    </label>
  );
}
