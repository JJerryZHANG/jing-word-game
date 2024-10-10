// import logo from "./logo.svg";
// import "./App.css";
import { useState } from "react";
import styles from "./App.module.css";
import Game from "./components/Game/index.js";
import FirstLesson from "./components/FirstLesson/index.js";
import SecondLesson from "./components/SecondLesson/index.js";
import ThirdLesson from "./components/ThirdLesson/index.js";
import FourthLesson from "./components/FourthLesson/index.js";

import { useReducer } from "react";
import AddTask from "./components/EighthLesson/AddTask.js";
import TaskList from "./components/EighthLesson/TaskList.js";

function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <h1>布拉格行程</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("未知操作：" + action.type);
    }
  }
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "参观卡夫卡博物馆", done: true },
  { id: 1, text: "看木偶戏", done: false },
  { id: 2, text: "列侬墙图片", done: false },
];

function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    walk ? alert("Stop is next") : alert("Walk is next");
  }

  return (
    <>
      <button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
      <h1
        style={{
          color: walk ? "darkgreen" : "darkred",
        }}
      >
        {walk ? "Walk" : "Stop"}
      </h1>
    </>
  );
}

function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}

function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <Chat contact={to} />
    </div>
  );
}

function Chat({ contact }) {
  const [text, setText] = useState("");
  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button>发送给 {contact.email}</button>
    </section>
  );
}

function ContactList({ selectedContact, contacts, onSelect }) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.email}>
            <button
              onClick={() => {
                onSelect(contact);
              }}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

const contacts = [
  { name: "Taylor", email: "taylor@mail.com" },
  { name: "Alice", email: "alice@mail.com" },
  { name: "Bob", email: "bob@mail.com" },
];

function App() {
  return (
    <div className={`${styles["container"]} ${styles["no-scrollbar"]}`}>
      <div className={styles.content}>
        <h1>第八课</h1>
        <TaskApp></TaskApp>
      </div>
      <div className={styles.content}>
        <h1>第七课</h1>
        <Messenger></Messenger>
      </div>
      <div className={styles.content}>
        <h1>第六课</h1>
        <MovingDot></MovingDot>
      </div>
      <div className={styles.content}>
        <h1>第五课</h1>
        <TrafficLight></TrafficLight>
      </div>
      <div className={styles.content}>
        <h1>第四课</h1>
        <FourthLesson></FourthLesson>
      </div>
      <div className={styles.content}>
        <h1>第三课</h1>
        <ThirdLesson></ThirdLesson>
      </div>
      <div className={styles.content}>
        <h1>第二课</h1>
        <SecondLesson></SecondLesson>
      </div>
      <div className={styles.content}>
        <h1>第一课</h1>
        <FirstLesson></FirstLesson>
      </div>
      <div className={styles.content}>
        <h1>游戏</h1>
        <Game></Game>
      </div>
    </div>
  );
}

export default App;
