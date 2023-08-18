import React, { useMemo } from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ results }) {
  // const values = useMemo(() => {
  //   return range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
  //     return typeof results[index] !== "undefined" ? results[index] : undefined;
  //   });
  // }, [results]);

  // console.log(values);

  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} value={results[index]} />
      ))}

      {/* {results.length > 0 &&
        results.map((result) => (
          <p key={result.key} className="guess">
            {result.word}
          </p>
        ))} */}

      {/* <p class="guess">FIRST</p> */}
      {/* <p class="guess">GUESS</p> */}
    </div>
  );
}

export default GuessResults;
