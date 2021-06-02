import React from "react";
import './EndScreen.css'
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";
import {Button, Container} from 'react-bootstrap'
const EndScreen = () => {
  const { score, setScore, setGameState, userName,setsecond } = useContext(
    GameStateContext
  );

  const restartQuiz = () => {
    setScore(0);
    setsecond(0)
    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      <Container>
      <h3 style={{color:"#a5e1ad"}}>Quiz Finished</h3>
      <h3 style={{color:"pink"}}>{userName}</h3>
      <h1 style={{color:'white'}}>Your Score is </h1>
      <br/>
      <h2 className='score'>
        {score} / {Questions.length}
      </h2>
      {score>1?<h1 style={{color:"green"}}>Passed</h1>:<h1 style={{color:"red"}}>Fail</h1>}
      <Button variant="warning" onClick={restartQuiz}>Restart Quiz</Button>
      </Container>
     
      
    </div>
  );
};

export default EndScreen;
