import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import FormularioVeterinaria from "./components/FormularioVeterinaria";
import TituloVeterinaria from "./components/TituloVeterinaria";
import "./App.css";

function App() {
  return (
    <section>
      <Container>
        <TituloVeterinaria />
        <FormularioVeterinaria /  >
      </Container>
    </section>
  );
}

export default App;
