import React from "react";

function Banner({ status, children, restart }) {
  const onRestart = (e) => {
    // e.preventDefault();
    restart?.();
  };

  return (
    <div className={`${status} banner`}>
      {children}
      <button onClick={onRestart}>CLICK HERE TO RESTART</button>
    </div>
  );
}

export default Banner;
