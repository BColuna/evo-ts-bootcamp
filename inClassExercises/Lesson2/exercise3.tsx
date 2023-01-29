import React, { useState } from "react";

export function App() {
  const [count, setCount] = React.useState(0);

  function handleIncrementClick(event: React.MouseEvent<HTMLButtonElement>){
    setCount((prevState) => prevState + 1);
  };

  function handleDecrementClick(event: React.MouseEvent<HTMLButtonElement>){
    setCount((prevState) => prevState - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      {/* provide onClick event handlers for buttons */}
      <button onClick={handleIncrementClick}>+</button>
      <button onClick={handleDecrementClick}>-</button>
    </div>
  );
}
