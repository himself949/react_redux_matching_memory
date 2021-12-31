import { useDispatch } from "react-redux";
import { resetCards, setBoard } from "../features/Board/boardSlice";
import Board from "../features/Board/Board";
import Score from "../features/Score/Score";

function App() {

  const dispatch = useDispatch()

  const startGameHandler = () => {
    dispatch(setBoard())
  }

  const tryAgainHandler = () => {
    dispatch(resetCards())
  }

  return (
    <div className="App">
      <Score />
      <Board />
      <footer className="footer">
        <button onClick={startGameHandler} className="start-button">
          Start Game
        </button>
        <button onClick={tryAgainHandler} className="try-new-pair-button">
          Try New Pair
        </button>
      </footer>
    </div>
  );
}

export default App;