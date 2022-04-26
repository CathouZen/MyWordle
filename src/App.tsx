import React, { useEffect, useState } from "react";
import "./App.css";
import styles from "./Welcome.module.css";
import Welcome from "./Welcome";

import Keyboard from "./Keyboard";

const WelcomeData: string[] = ["W", "O", "R", "D", "L", "E"];
// const WelcomeDataEmpty: string[] = [" ", " ", " ", " ", " ", " "];

const WelcomeWordle = (props: { data: string[] }) => {
  return (
    <div className={styles.HeaderRow}>
      {props.data.map((d, i) => (
        <div className={styles.HeaderColumn} key={i}>
          {d}
        </div>
      ))}
    </div>
  );
};

const GradualWelcome = (props: { data: string[]; interval: number }) => {
  const [shown, setShown] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShown((v) => {
        if (v.length >= props.data.length) {
          clearInterval(interval);
        }
        return props.data.slice(0, v.length + 1);
      });
    }, props.interval);
  }, []);

  return <WelcomeWordle data={shown} />;
};

const OneOf: React.FC<{ selected: number }> = (props) => {
  const childArray = React.Children.toArray(props.children);
  return <>{childArray[props.selected]}</>;
};

const App = () => {
  const [current, setCurrent] = useState(0);

  return (
    <OneOf selected={current}>
      {/* <Welcome onAdvance={() => setCurrent(1)} /> */}
      <main className={styles.Main}>
        <header>
          <GradualWelcome data={WelcomeData} interval={250} />
        </header>
        <h2 className={styles.Me}>by Me</h2>
        {/* <GameBoard /> */}
        <Keyboard />
      </main>
    </OneOf>
  );
};

export default App;
