import "../App.css";
import { Questions } from "../helpers/Questions";
import React,{ useState,useEffect } from "react";
import './Quiz.css'
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import {Button,Container} from 'react-bootstrap'
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, gameState, setGameState,second,setsecond } = useContext(
    GameStateContext
  );

useEffect(() => {
setTimeout(()=>{
  finishQuiz();
},20000)
},)


  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setsecond(0)
    setGameState("finished");
  };

  return (
    <div className="Quiz">
      <Container>
      <br/>
<h2 className="clock-color" ><span>{Math.floor((second/3600000)%60000)}</span>:
            <span>{Math.floor((second/60000)%1000)}</span>:
            <span>{Math.floor((second/1000)%60)}</span>:
            <span>{(second/10)%100}</span> </h2>

      <h1 className="question-color">{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <Button className="option-button"
          onClick={() => {
            chooseOption("optionA");
          }}
        >
          {Questions[currentQuestion].optionA}
        </Button>
        <br/>
        <br/>
        <Button className="option-button"
          onClick={() => {
            chooseOption("optionB");
          }}
        >
          {Questions[currentQuestion].optionB}
        </Button>
        <br/>
        <br/>
        <Button className="option-button"
          onClick={() => {
            chooseOption("optionC");
          }}
        >
          {Questions[currentQuestion].optionC}
        </Button>
        <br/>
        <br/>
        <Button className="option-button"
          onClick={() => {
            chooseOption("optionD");
          }}
        >
          {Questions[currentQuestion].optionD}
        </Button>
        <br/>
        <br/>
      </div>

      {currentQuestion == Questions.length - 1 ? (
        <Button variant="danger" onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </Button>
      ) : (
        <Button variant="success" onClick={nextQuestion} id="nextQuestion">
          Next Question
        </Button>
      )}

      </Container>
     
    </div>
  );
}

export default Quiz;
