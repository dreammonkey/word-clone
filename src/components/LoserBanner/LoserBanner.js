import React from "react";
import Banner from "../Banner/Banner";

function LoserBanner({ answer }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer.toUpperCase()}</strong>.
      </p>
    </Banner>
  );
}

export default LoserBanner;