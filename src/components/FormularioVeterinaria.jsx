import { Form, Col, Row, Button } from "react-bootstrap";
import { useState } from "react";

const FormularioVeterinaria = ({agregarCita}) => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombreDuenio, setNombreDuenio] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintoma, setSintoma] = useState("");

  const handlerSubmit = (e)=>{
    e.preventDefault();
    const cita ={
      nombreMascota,
      nombreDuenio,
      fecha,
      hora,
      sintoma
    }
    agregarCita(cita);
  }

  return (
    <article>
      <div className="border p-3 bg-white shadow-lg mb-4 rounded">
        <h4>Llenar el formulario para crear la cita</h4>
      </div>
      <Form
        className="border shadow-lg p-3 rounded bg-info"
        onSubmit={handlerSubmit}
      >
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formPlaintextNombreMascota"
        >
          <Form.Label column sm="2" className=" fw-bold">
            Nombre de mascota:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Nombre de mascota"
              required
              minLength={3}
              maxLength={30}
              onChange={(e) => setNombreMascota(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formPlaintextNombreDueño"
        >
          <Form.Label column sm="2" className=" fw-bold">
            Nombre de dueño:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Nombre de dueño"
              required
              minLength={3}
              maxLength={30}
              onChange={(e) => setNombreDuenio(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 d-flex"
          controlId="formPlaintextFecha"
        >
          <Form.Label column sm="2" className=" fw-bold">
            Fecha:
          </Form.Label>
          <Col sm="4">
            <Form.Control
              type="date"
              placeholder="dd/mm/yy"
              required
              onChange={(e) => setFecha(e.target.value)}
            />
          </Col>
          <Form.Label column sm="1" className=" fw-bold">
            Hora:
          </Form.Label>
          <Col sm="5">
            <Form.Control
              type="time"
              placeholder="hh:mm"
              required
              onChange={(e) => setHora(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextSintomas">
          <Form.Label column sm="2" className=" fw-bold">
            Sintomas:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Describir sintomas"
              required
              minLength={3}
              maxLength={50}
              onChange={(e) => setSintoma(e.target.value)}
            />
          </Col>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Agregar nueva cita
          </Button>
        </div>
      </Form>
    </article>
  );
};

export default FormularioVeterinaria;
