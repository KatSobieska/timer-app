import styles from "./Buttons.module.scss";

const Buttons = (props) => {
  return (
    <div>
      <button className={styles.button} onClick={props.start}>
        {" "}
        {props.children}
        START
      </button>
      <button className={styles.button} onClick={props.stop}>
        {" "}
        {props.children}
        STOP
      </button>
      <button className={styles.button} onClick={props.reset}>
        {" "}
        {props.children}
        RESET
      </button>
    </div>
  );
};

export default Buttons;
