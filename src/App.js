import Container from "./components/Container/Container.js";
import Button from "./components/Button/Button.js";

const App = () => {
  return (
    <Container>
      <Button>START</Button>
      <Button>STOP</Button>
      <Button>RESET</Button>
    </Container>
  );
};

export default App;
