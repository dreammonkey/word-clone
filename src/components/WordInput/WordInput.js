import React, { useState } from "react";
import { WORD_LENGTH } from "../../constants";

function WordInput({ enabled, onGuess }) {
  const [word, setWord] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (word.length !== WORD_LENGTH) return;

    if (!enabled) return;

    onGuess?.(word);
    setWord("");
  };

  const validateInput = (e) => {
    setWord(e.target.value.toUpperCase());
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={!enabled}
        id="guess-input"
        type="text"
        value={word}
        // pattern="[a-zA-Z]{5}"
        pattern={`[a-zA-Z]{${WORD_LENGTH}}`}
        title={`${WORD_LENGTH} letter word`}
        minLength={WORD_LENGTH}
        maxLength={WORD_LENGTH}
        onChange={validateInput}
      />
    </form>
  );
}

export default WordInput;
