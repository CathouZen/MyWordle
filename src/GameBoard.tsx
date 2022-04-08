import styles from "./GameBoardStyles.module.css";
import Keyboard from "./Keyboard";

const GameBoard = () => {
  return (
    <div className={styles.GameContainer}>
      GameContainer
      <div className={styles.BoardContainer}>
        BoardContainer
        <div className={styles.GameBoard}>
          <div className={styles.BoardRow}></div>
          <div className={styles.BoardRow}></div>
          <div className={styles.BoardRow}></div>
          <div className={styles.BoardRow}></div>
          <div className={styles.BoardRow}></div>
          <div className={styles.BoardRow}></div>
        </div>
      </div>
      <Keyboard />
    </div>
  );
};

export default GameBoard;
