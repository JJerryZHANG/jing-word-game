// import logo from "./logo.svg";
// import "./App.css";
import { useState } from "react";
import styles from "./App.module.css";
import Game from "./components/Game/index.js";
import FirstLesson from "./components/FirstLesson/index.js";
import SecondLesson from "./components/SecondLesson/index.js";
import ThirdLesson from "./components/ThirdLesson/index.js";
import FourthLesson from "./components/FourthLesson/index.js";

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
