import styles from "./Timer.module.scss";
import Buttons from "../Buttons/Buttons.js";

const Timer = () => {
  const start = () => console.log("hello");

  const stop = () => console.log("hello");

  const reset = () => console.log("hello");

  return (
    <div className={styles.timer}>
      <h1>Hello1</h1>

      <Buttons start={start} stop={stop} reset={reset} />
    </div>
  );
};

export default Timer;
