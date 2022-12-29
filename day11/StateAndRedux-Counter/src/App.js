import "./App.css";
import Counter1 from "./Components/Counter1";
import Counter2 from "./Components/Counter2";

function App() {
  return (
    <div className="App">
      <h1>Counter State Hook...</h1>
      <Counter1 />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <h1>Counter by Reducer function...</h1>
      <Counter2 />
    </div>
  );
}

export default App;