import { useDispatch } from "react-redux";
import Board from "../features/board/Board";
import { setBoard } from "../features/board/boardSlice";

function App() {

  const dispatch = useDispatch()

  const startGameHandler = () => {
    dispatch(setBoard())
  }

  return (
    <div className="App">
      {/*<Score />*/}
      <Board />
      <footer className="footer">
        <button onClick={startGameHandler} className="start-button">
          Start Game
        </button>
        {/*<button onClick={tryAgainHandler} className="try-new-pair-button">
          Try New Pair
        </button>*/}
      </footer>
    </div>
  );
}

export default App;