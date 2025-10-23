import Button from "react-bootstrap/Button";
import {Form, Col, Row} from "react-bootstrap";

const FormularioVeterinaria = () => {
  return (
    <article>
      <div className="border p-3 bg-white shadow-lg mb-4 rounded">
        <h2>Llenar el formulario para crear la cita</h2>
      </div>
      <Form className="border shadow-lg p-3 rounded bg-info">
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Nombre de mascota:
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Nombre de mascota" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Nombre de dueño:
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Nombre de dueño" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 d-flex" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Fecha
        </Form.Label>
        <Col sm="4">
          <Form.Control type="password" placeholder="dd/mm/yy" />
        </Col>
        <Form.Label column sm="1">
          Hora
        </Form.Label>
        <Col sm="5">
          <Form.Control type="password" placeholder="hh:mm" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Sintomas:
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Describir sintomas" />
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
