import React from "react";
import Banner from "../Banner/Banner";

function LoserBanner({ answer, restart }) {
  return (
    <Banner status="sad" restart={restart}>
      <p>
        Sorry, the correct answer is <strong>{answer.toUpperCase()}</strong>.
      </p>
    </Banner>
  );
}

export default LoserBanner;
