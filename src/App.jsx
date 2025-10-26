import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import FormularioVeterinaria from "./components/FormularioVeterinaria";
import TituloVeterinaria from "./components/TituloVeterinaria";
import CitasVeterinaria from "./components/CitasVeterinaria";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) =>{
    const nuevaCita = [...citas,cita]
    setCitas(nuevaCita);
    localStorage.setItem("citasKey", JSON.stringify(nuevaCita));
  }

  useEffect(()=>{
    const citasStorage = JSON.parse(localStorage.getItem("citasKey"));
    setCitas(citasStorage);
  },[])
  

  return (
    <section>
      <Container>
        <TituloVeterinaria />
        <FormularioVeterinaria  agregarCita={agregarCita} />
        <CitasVeterinaria />
      </Container>
    </section>
  );
}

export default App;
