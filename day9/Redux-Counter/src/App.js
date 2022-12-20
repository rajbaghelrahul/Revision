// // import "./styles.css";
// import { increase, decrease } from "./redux/action";
// import { useSelector, useDispatch } from "react-redux";

// function App() {
//   // useSelector gives access to current global state
//   const count = useSelector((state) => state.count);
//   // useDispatch gives access to store's dispatch function
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <h1>Count : {count}</h1>
//       <button onClick={() => dispatch(increase(1))}>INC</button>
//       <button onClick={() => dispatch(decrease(1))}>DEC</button>
//     </div>
//   );
// }

// export default App;



// import "./styles.css";
import { decrement, increment } from "./redux/action";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // useSelector gives access to current global state
  const count = useSelector((state) => state.count);
  // useDispatch gives access to store's dispatch function
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch(increment(1))}>INC</button>
      <button onClick={() => dispatch(decrement(1))}>DEC</button>
    </>
  );
}

export default App;
