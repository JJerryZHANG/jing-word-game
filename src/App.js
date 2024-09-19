// import logo from "./logo.svg";
// import "./App.css";
import styles from "./App.module.css";
import Game from "./components/Game/index.js";
import FirstLesson from "./components/FirstLesson/index.js";
import SecondLesson from "./components/SecondLesson/index.js";
import ThirdLesson from "./components/ThirdLesson/index.js";

function App() {
  return (
    <div className={styles.container}>
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
