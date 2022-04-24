import styles from "./Timer.module.scss";
import Button from "../Button/Button.js";
import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  let milliseconds = String(time).slice(-3).padStart(3, "0");
  let seconds = String(Math.floor(time / 1000)).padStart(2, "0");
  let minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  let hours = String(Math.floor(minutes / 60)).padStart(2, "0");

  useEffect(() => {
    let timer;

    if (start) {
      timer = setInterval(() => {
        setTime((prevValue) => prevValue + 1);
      }, 1);
    } else {
      clearInterval(timer);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [start]);

  return (
    <div className={styles.timer}>
      <h1>
        {hours}:{minutes}:{seconds}.{milliseconds}
      </h1>
      <div className={styles.buttons}>
        <Button onClick={() => setStart(true)}>Start</Button>
        <Button onClick={() => setStart(false)}>Stop</Button>
        <Button onClick={() => setTime(0)}>Reset</Button>
      </div>
    </div>
  );
};

export default Timer;
