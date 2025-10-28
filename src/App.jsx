import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import FormularioVeterinaria from "./components/FormularioVeterinaria";
import TituloVeterinaria from "./components/TituloVeterinaria";
import CitasVeterinaria from "./components/CitasVeterinaria";
import "./App.css";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) => {
    const nuevaCita = [...citas, cita];
    setCitas(nuevaCita);
    localStorage.setItem("citasKey", JSON.stringify(nuevaCita));
  };

  const borrarCita = (indice) => {
    Swal.fire({
      title: "Esta seguro de eliminar la cita?",
      text: "Si eliminas la cita, tendras que volver a crearla",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3dd81eff",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado!",
          text: "La cita a sido eliminada",
          icon: "success",
        });
        const citaBorrada = citas.filter((_, index) => indice !== index);
        setCitas(citaBorrada);
        localStorage.setItem("citasKey", JSON.stringify(citaBorrada));
      }
    });
  };

  useEffect(() => {
    const citasStorage = JSON.parse(localStorage.getItem("citasKey")) || [];
    setCitas(citasStorage);
  }, []);

  return (
    <section>
      <Container>
        <TituloVeterinaria />
        <FormularioVeterinaria agregarCita={agregarCita} />
        <CitasVeterinaria citas={citas} borrarCita={borrarCita} />
      </Container>
    </section>
  );
}

export default App;
