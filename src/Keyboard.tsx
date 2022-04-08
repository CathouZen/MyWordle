import styles from "./Keyboard.module.css";

const erase = () => {};

const compare = () => {};

const publish = () => {};

const enterGuess = (pressedKey: string) => {
  if (pressedKey === "enter") {
    compare();
  } else if (pressedKey === "backspace") {
    erase();
  } else if (pressedKey !== "enter") {
    publish();
  }
};

const handleClick = (key: string) => {
  const pressedKey = key.toLowerCase();
  enterGuess(pressedKey);
};

const Keyboard = () => {
  return (
    <div className={styles.KeyboardLayout}>
      <div className={styles.KeyboardRow}>
        <button className={styles.Button} data-key="q">
          q
        </button>
        <button className={styles.Button} data-key="w">
          w
        </button>
        <button className={styles.Button} data-key="e">
          e
        </button>
        <button className={styles.Button} data-key="r">
          r
        </button>
        <button className={styles.Button} data-key="t">
          t
        </button>
        <button className={styles.Button} data-key="y">
          y
        </button>
        <button className={styles.Button} data-key="u">
          u
        </button>
        <button className={styles.Button} data-key="i">
          i
        </button>
        <button className={styles.Button} data-key="o">
          o
        </button>
        <button className={styles.Button} data-key="p">
          p
        </button>
      </div>
      <div className={styles.KeyboardRow}>
        <div className={styles.ButtonHalf} />
        <button className={styles.Button} data-key="a">
          a
        </button>
        <button className={styles.Button} data-key="s">
          s
        </button>
        <button className={styles.Button} data-key="d">
          d
        </button>
        <button className={styles.Button} data-key="f">
          f
        </button>
        <button className={styles.Button} data-key="g">
          g
        </button>
        <button className={styles.Button} data-key="h">
          h
        </button>
        <button className={styles.Button} data-key="j">
          j
        </button>
        <button className={styles.Button} data-key="k">
          k
        </button>
        <button className={styles.Button} data-key="l">
          l
        </button>
        <div className={styles.ButtonHalf} />
      </div>
      <div className={styles.KeyboardRow}>
        <button className={styles.ButtonEnter} data-key="enter">
          {"enter"}
        </button>
        <button className={styles.Button} data-key="z">
          z
        </button>
        <button className={styles.Button} data-key="x">
          x
        </button>
        <button className={styles.Button} data-key="c">
          c
        </button>
        <button className={styles.Button} data-key="v">
          v
        </button>
        <button className={styles.Button} data-key="b">
          b
        </button>
        <button className={styles.Button} data-key="n">
          n
        </button>
        <button className={styles.Button} data-key="j">
          j
        </button>
        <button className={styles.Button} data-key="k">
          k
        </button>
        <button className={styles.Button} data-key="l">
          l
        </button>
        <button className={styles.ButtonBackspace} data-key="⌫">
          {"⌫"}
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
