import { useEffect, useRef, useState } from "react";

import styles from "./Keyboard.module.css";
import listeMots from "./listeMots";

const line1Keys = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const line2Keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const line3Keys = ["enter", "z", "x", "c", "v", "b", "n", "m", "backspace"];
const keyboard = { line1Keys, line2Keys, line3Keys };

const allKeys = Object.values(keyboard).flat();

const wordLength: number = 5;
const newGame = [
  Array<string>(wordLength).fill(""),
  Array<string>(wordLength).fill(""),
  Array<string>(wordLength).fill(""),
  Array<string>(wordLength).fill(""),
  Array<string>(wordLength).fill(""),
  Array<string>(wordLength).fill(""),
];

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
let wordOfTheDay = listeMots[getRandomInt(1, 25)];
console.log(wordOfTheDay);

const Keyboard = () => {
  type Color = "green" | "yellow" | "grey" | "";

  const [colors, setColors] = useState<Color[][]>([
    Array<Color>(wordLength).fill(""),
    Array<Color>(wordLength).fill(""),
    Array<Color>(wordLength).fill(""),
    Array<Color>(wordLength).fill(""),
    Array<Color>(wordLength).fill(""),
    Array<Color>(wordLength).fill(""),
  ]);

  const [guesses, setGuesses] = useState([...newGame]);

  let round = useRef(0);
  let letterIndex = useRef(0);

  const enterGuess = (pressedKey: string) => {
    if (pressedKey === "enter" && !guesses[round.current].includes("")) {
      submit();
      setColors(colors);
    } else if (pressedKey === "backspace") {
      erase();
    } else if (pressedKey !== "enter") {
      publish(pressedKey);
    }
  };

  const splitWord = wordOfTheDay.split("");

  const erase = () => {
    let letterPosition = letterIndex.current;
    let trial = round.current;
    if (letterPosition !== 0) {
      setGuesses((prev) => {
        const newGuesses = [...prev];
        newGuesses[trial][letterPosition - 1] = "";
        return newGuesses;
      });
      letterIndex.current = letterPosition - 1;
    }
  };

  const publish = (pressedKey: string) => {
    const trial = round.current;
    let letterPosition = letterIndex.current;

    if (letterPosition < wordLength) {
      setGuesses((prev) => {
        const newGuesses = [...prev];
        newGuesses[trial][letterPosition] = pressedKey.toLowerCase();
        return newGuesses;
      });
      letterIndex.current = letterPosition + 1;
    }
  };

  const [gameWon, setGameWon] = useState(false);

  const [gameComplete, setGameComplete] = useState(false);
  const updateColor = {
    ...colors,
  };

  const submit = () => {
    setColors(updateColor);
    const trial = round.current;

    const yellowLetters = wordOfTheDay.split("");
    const leftOverPosition: number[] = [];

    splitWord.forEach((letter, index) => {
      const guessedLetter = guesses[trial][index];
      if (guessedLetter === letter) {
        updateColor[trial][index] = "green";
        yellowLetters[index] = "";
      } else {
        leftOverPosition.push(index);
      }
    });

    if (updateColor[trial].every((guess) => guess === "green")) {
      setColors(updateColor);
      setGameComplete(true);
      setGameWon(true);
    }

    if (leftOverPosition.length) {
      leftOverPosition.forEach((index) => {
        const guessedLetter = guesses[trial][index];
        const correctPosition = yellowLetters.indexOf(guessedLetter);
        if (
          yellowLetters.includes(guessedLetter) &&
          correctPosition !== index
        ) {
          updateColor[trial][index] = "yellow";
          yellowLetters[correctPosition] = "";
        } else {
          updateColor[trial][index] = "grey";
        }
      });
    }

    if (trial < 5) {
      round.current = trial + 1;
    } else {
      setColors(updateColor);
      setGameComplete(true);
      setGameWon(false);
    }

    setColors(updateColor);

    round.current = trial + 1;
    letterIndex.current = 0;
  };

  const handleClick = (key: string) => {
    const pressedKey = key.toLowerCase();
    enterGuess(pressedKey);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const pressedKey = e.key.toLowerCase();
    console.log(pressedKey);
    if (allKeys.includes(pressedKey)) {
      enterGuess(pressedKey);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const endGame = () => {
    return "yo";

    // if (gameComplete === true) {
    //   if (gameWon === true) {
    //     return "You won!";
    //   } else {
    //     return "You lost!";
    //   }
    // }
  };

  return (
    <div className={styles.GameContainer}>
      <div className={styles.BoardContainer}>
        <div className={styles.GameBoard}>
          <div className={styles.TileRow}>
            <div className={styles.Tile}>{guesses[0][0]}</div>
            <div className={styles.Tile}>{guesses[0][1]}</div>
            <div className={styles.Tile}>{guesses[0][2]}</div>
            <div className={styles.Tile}>{guesses[0][3]}</div>
            <div className={styles.Tile}>{guesses[0][4]}</div>
          </div>
          <div className={styles.TileRow}>
            <div className={styles.Tile}>{guesses[1][0]}</div>
            <div className={styles.Tile}>{guesses[1][1]}</div>
            <div className={styles.Tile}>{guesses[1][2]}</div>
            <div className={styles.Tile}>{guesses[1][3]}</div>
            <div className={styles.Tile}>{guesses[1][4]}</div>
          </div>
          <div className={styles.TileRow}>
            <div className={styles.Tile}>{guesses[2][0]}</div>
            <div className={styles.Tile}>{guesses[2][1]}</div>
            <div className={styles.Tile}>{guesses[2][2]}</div>
            <div className={styles.Tile}>{guesses[2][3]}</div>
            <div className={styles.Tile}>{guesses[2][4]}</div>
          </div>

          {Object.values(guesses).map((word, wordIndex) => (
            <div className={styles.TileRow} key={wordIndex}>
              {word.map((letter, i) => (
                <div
                  className={`${styles.Tile} ${styles[colors[wordIndex][i]]}`}
                  key={i}
                >
                  {letter}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.GameComplete} ${styles.Win}`}>{endGame} </div>

      <div className={styles.KeyboardLayout}>
        <div className={styles.KeyboardRow}>
          {line1Keys.map((r, i) => (
            <button
              className={styles.Button}
              onClick={() => handleClick(r)}
              key={i}
            >
              {r}
            </button>
          ))}
        </div>
        <div className={styles.KeyboardRow}>
          <div className={styles.ButtonHalf} />
          {line2Keys.map((r, i) => (
            <button
              className={styles.Button}
              onClick={() => handleClick(r)}
              key={i}
            >
              {r}
            </button>
          ))}
          <div className={styles.ButtonHalf} />
        </div>
        <div className={styles.KeyboardRow}>
          <div className={styles.ButtonZero} />
          {line3Keys.map((r, i) => (
            <button
              className={styles.Button}
              onClick={() => handleClick(r)}
              key={i}
            >
              {r}
            </button>
          ))}

          <div className={styles.ButtonZero} />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Keyboard;
