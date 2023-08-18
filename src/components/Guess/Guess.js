import React from "react";
import { range } from "../../utils";
import { WORD_LENGTH } from "../../constants";

function Guess({ value }) {
  // console.log(value);
  return (
    <p className="guess">
      {range(0, WORD_LENGTH).map((index) => (
        <span
          key={index}
          className={`cell ${value?.validated[index].status ?? ""}`}
        >
          {value?.word[index] ?? ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
