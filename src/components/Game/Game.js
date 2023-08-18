import React, { useEffect, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import WordInput from "../WordInput/WordInput";
import GuessResults from "../GuessResults/GuessResults";
import WinnerBanner from "../WinnerBanner/WinnerBanner";
import LoserBanner from "../LoserBanner/LoserBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  console.info({ answer });

  const [userAnswers, setUserAnswers] = useState([]);
  const [gameState, setGameState] = useState("running");

  useEffect(() => {
    if (userAnswers.length > 0) {
      if (userAnswers.at(userAnswers.length - 1).word === answer) {
        setGameState("won");
      } else if (userAnswers.length >= NUM_OF_GUESSES_ALLOWED) {
        setGameState("lost");
      }

      console.log(userAnswers.length);
    }
  }, [userAnswers, answer]);

  const onGuess = (word) => {
    console.log({ word });

    if (userAnswers.length > NUM_OF_GUESSES_ALLOWED) return;

    const validated = checkGuess(word, answer);

    setUserAnswers([
      ...userAnswers,
      {
        word: word,
        key: crypto.randomUUID(),
        validated: validated,
      },
    ]);

    // check win
  };

  return (
    <>
      {gameState === "won" && <WinnerBanner numGuesses={userAnswers.length} />}
      {gameState === "lost" && <LoserBanner answer={answer} />}
      <GuessResults results={userAnswers} />
      <WordInput enabled={gameState === "running"} onGuess={onGuess} />
    </>
  );
}

export default Game;
