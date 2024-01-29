import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <Titulo></Titulo>
        <Formulario></Formulario>
      </Container>
    </>
  );
}

export default App;
