import React, { useState } from "react";

export const PropsAndState = ({ yourName, yourLastName }) => {
  let [countClicks, setCountClicks] = useState(0);

  const handleClick = () => {
    //good practice:
    //make a copy of state, modifiy it, and then setState to the copy
    const newCountClicks = ++countClicks;
    setCountClicks(newCountClicks);
  };

  return (
    <>
      <h3>
        Welcome, {yourName} {yourLastName}
      </h3>
      <p>{countClicks}</p>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};
