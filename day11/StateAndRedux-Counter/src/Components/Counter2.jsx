import React from "react";
import { increament, decreament } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";

export default function Counter2() {
  // useSelector gives access the data to current global state
  const count = useSelector((state) => state.count);
  // // useDispatch gives access to store's dispatch function
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>Count : {count}</h2>
      <button disabled={count === 10} onClick={() => dispatch(increament(1))}>
        INC
      </button>
      <button disabled={count === 0} onClick={() => dispatch(decreament(1))}>
        DEC
      </button>
    </div>
  );
}
