import "./App.css";
import {useState, useEffect} from "react";
import SquareComponent from "./components/SquareComponent";

const initialData = ["", "", "", "", "", "", "", "", ""];

function App() {
  // const [data, setData] = useState(initialData);

  // useEffect(()=>{
  //   setData(initialData);
  // },[data]);

  // const handleGame = () => {
  //   setData(data+1);
  // }
  const [gameState, updateGameState] = useState(initialData);
  const [isXChance, updateIsXChance] = useState(false);

  const onUserClicked = (index) => {
    let strings = Array.from(gameState);
    if (strings[index]) return;
    strings[index] = isXChance ? "X" : "0";
    updateIsXChance(!isXChance);
    updateGameState(strings);
  };

  const clearGame = () => {
    updateGameState(initialData);
  };
  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      clearGame();
      alert(`Ta da ! ${winner} won the Game !`);
    }
  }, [gameState]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log(
      "Class: App, Function: checkWinner ==",
      gameState[0],
      gameState[1],
      gameState[2]
    );
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  return (
    <>
      <div id="mainGame">
        <div id="headingText">Tic Tac Toe - 2023</div>
        <div id="TicTacToeBox">
          <div className="row">
            <div className="box1 right-bottom-border boxAlignText" onClick={()=> {onUserClicked(0)}}><div><h1>{gameState.state}</h1></div></div>
            <div className="box1 right-bottom-border boxAlignText"><div><h1>X</h1></div></div>
            <div className="box1 left-bottom-border boxAlignText"><div><h1>X</h1></div></div>
          </div>
          <div className="row">
            <div className="box1 right-bottom-border boxAlignText"><div><h1>X</h1></div></div>
            <div className="box1 right-bottom-border boxAlignText"><div><h1>X</h1></div></div>
            <div className="box1 left-bottom-border boxAlignText"><div><h1>X</h1></div></div>
          </div>
          <div className="row">
            <div className="box1 right-top-border boxAlignText"><div><h1>X</h1></div></div>
            <div className="box1 right-top-border boxAlignText"><div><h1>X</h1></div></div>
            <div className="box1 left-top-border boxAlignText"><div><h1>X</h1></div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
