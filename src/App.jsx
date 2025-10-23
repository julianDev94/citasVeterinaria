import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import FormularioVeterinaria from "./components/FormularioVeterinaria";
import TituloVeterinaria from "./components/TituloVeterinaria";
import CitasVeterinaria from "./components/CitasVeterinaria";
import "./App.css";

function App() {
  return (
    <section>
      <Container>
        <TituloVeterinaria />
        <FormularioVeterinaria />
        <CitasVeterinaria />
      </Container>
    </section>
  );
}

export default App;
