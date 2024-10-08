import Profile from "./components/profile.js";
import { useState } from "react";

export default function FirstLesson() {
  // const [to, setTo] = useState("Alice");
  // const [message, setMessage] = useState("你好");

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setTimeout(() => {
  //     alert(`你向 ${to} 说了${message}`);
  //   }, 5000);
  // }

  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending((p) => p + 1);
    await delay(3000);
    setPending((p) => p - 1);
    setCompleted((c) => c + 1);
  }

  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <label>
          To:{" "}
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
          </select>
        </label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">发送</button>
      </form> */}
      <h3>等待：{pending}</h3>
      <h3>完成：{completed}</h3>
      <button onClick={handleClick}>购买</button>
      <section>
        <Profile />
      </section>
    </>
  );
}
