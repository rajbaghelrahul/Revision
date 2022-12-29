import React from "react";
import { useState } from "react";

export default function Counter1() {
  const [count, setCount] = useState(0);

  function handleInc() {
    setCount(count + 1);
  }
  function handleDec() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Hello World!</h1>
      <h2>Count: {count}</h2>
      <button disabled={count === 10} onClick={handleInc}>
        INC
      </button>
      <button disabled={count === 0} onClick={handleDec}>
        DEC
      </button>
    </>
  );
}
