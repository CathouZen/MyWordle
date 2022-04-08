import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styles from "./Welcome.module.css";
import Welcome from "./Welcome";
import GameBoard from "./GameBoard";
import Keyboard from "./Keyboard";
import Words from "./Words";

const OneOf: React.FC<{ selected: number }> = (props) => {
  const childArray = React.Children.toArray(props.children);
  return <>{childArray[props.selected]}</>;
};

const App = () => {
  const [current, setCurrent] = useState(0);

  return (
    <OneOf selected={current}>
      <Welcome onAdvance={() => setCurrent(1)} />
      <main className={styles.Main}>
        <header className={styles.Header}>WORDLE</header>
        <h2 className={styles.Me}>by Me</h2>
        <GameBoard />
      </main>
    </OneOf>
  );
};

export default App;
