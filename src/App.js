import "./App.css";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import 'bootstrap/dist/css/bootstrap.min.css';
import EndScreen from "./components/EndScreen";
import { useState } from "react";
import { GameStateContext } from "./helpers/Contexts";
import Hi from "./Hi";
import { Container } from "react-bootstrap";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  const [second, setsecond] = useState(0)
  return (
    <>
    <Container>
    <div className="App">
      <h1 className="app-name">Quiz App</h1>
      <i style={{color:"#ba135d"}} class="fas fa-feather-alt fa-2x"></i>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
          second,
          setsecond
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "playing" && <Hi/>}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
    </Container>
    
    </>
    
  );
}

export default App;