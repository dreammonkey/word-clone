import React from "react";
import Banner from "../Banner/Banner";

function WinnerBanner({ numGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> You got it in{" "}
        <strong>
          {numGuesses === 1 ? "1 guess" : `${numGuesses} guesses`}.
        </strong>
      </p>
    </Banner>
  );
}

export default WinnerBanner;
