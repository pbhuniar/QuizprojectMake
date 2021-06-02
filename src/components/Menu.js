import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Container, Form,Button } from "react-bootstrap";
import './Menu.css'
function Menu() {
  const { gameState, setGameState, userName, setUserName } = useContext(
    GameStateContext
  );
  return (
    <div className="Menu">
      <Container>
      <br/>
      <h4 style={{color:"white"}}>Time is 20 second from starting</h4>
      <div className="text-box">
      <Form >
        <Form.Control  type="text"
        placeholder="Enter your name"
        onChange={(event) => {
          setUserName(event.target.value);
        }}/>
      </Form>
      </div>
  
     <br/>
      <Button variant="success" size="lg"
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start Quiz
      </Button>
      </Container>
      
    </div>
  );
}

export default Menu;
