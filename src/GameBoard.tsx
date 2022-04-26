import styles from "./GameBoardStyles.module.css";
import Keyboard from "./Keyboard";

const GameBoard = () => {
  return (
    <div className={styles.GameContainer}>
      <div className={styles.BoardContainer}>
        <div className={styles.GameBoard}>
          <div className={styles.BoardRow}>
            <div className={styles.BoardColumn}>M</div>
            <div className={styles.BoardColumn}></div>
            <div className={styles.BoardColumn}></div>
            <div className={styles.BoardColumn}></div>
            <div className={styles.BoardColumn}></div>
          </div>

          <div className={styles.BoardRow}>
            <div className={styles.BoardColumn}></div>
            <div className={styles.BoardColumn}></div>
            <div className={styles.BoardColumn}></div>
            <div className={styles.BoardColumn}></div>
            <div className={styles.BoardColumn}></div>
          </div>

          <div className={styles.BoardRow}>
            <div className={styles.BoardColumn}></div>
            <div className={styles.BoardColumn}></div>
            <div className={styles.BoardColumn}></div>
            <div className={styles.BoardColumn}></div>
            <div className={styles.BoardColumn}></div>
          </div>

          <div className={styles.BoardRow}>
            <div className={styles.BoardColumn}></div>
            <div className={styles.BoardColumn}></div>
            <div className={styles.BoardColumn}></div>
            <div className={styles.BoardColumn}></div>
            <div className={styles.BoardColumn}></div>
          </div>

          <div className={styles.BoardRow}>
            <div className={styles.BoardColumn}></div>
            <div className={styles.BoardColumn}></div>
            <div className={styles.BoardColumn}></div>
            <div className={styles.BoardColumn}></div>
            <div className={styles.BoardColumn}></div>
          </div>
        </div>
      </div>
      <Keyboard />
    </div>
  );
};

export default GameBoard;
