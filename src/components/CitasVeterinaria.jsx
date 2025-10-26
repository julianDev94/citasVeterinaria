import { Button, Card, Col, Row, Form } from "react-bootstrap";

const CitasVeterinaria = ({ citas }) => {
  return (
    <section className="my-3">
      {citas.length === 0 ? (
        <h4 className="border p-3 text-center rounded shadow-lg">
          No hay Citas
        </h4>
      ) : (
        <h4 className="border p-3 text-center rounded shadow-lg">
          Citas existentes
        </h4>
      )}
      <article className="border p-3 bg-secondary">
        <Row xs={1} md={2} className="g-4">
          {citas.map((cita, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Header className="d-flex">
                  <div className="circulo-img me-3">
                    <img />
                  </div>
                  <div>
                    <div>Mascota: {cita.nombreMascota}</div>
                    <div>Dueño: {cita.nombreDuenio}</div>
                  </div>
                </Card.Header>
                <Card.Body className="bg-info">
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} md={4}>
                      Fecha:
                    </Form.Label>
                    <Col sm={10} md={8}>
                      <Form.Control
                        type="text"
                        placeholder="dd/mm/yyyy"
                        value={cita.fecha}
                        readOnly
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} md={4}>
                      Hora:
                    </Form.Label>
                    <Col sm={10} md={8}>
                      <Form.Control
                        type="text"
                        placeholder="hh:mm"
                        value={cita.hora}
                        readOnly
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} md={4}>
                      Sintomas:
                    </Form.Label>
                    <Col sm={10} md={8}>
                      <Form.Control
                        type="text"
                        placeholder="describir sintomas"
                        value={cita.sintoma}
                        readOnly
                      />
                    </Col>
                  </Form.Group>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-end">
                  <Button variant="danger">Borrar</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </article>
    </section>
  );
};

export default CitasVeterinaria;
