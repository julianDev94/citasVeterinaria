import { Button, Card, Col, Row, Form } from "react-bootstrap";

const CitasVeterinaria = () => {
  return (
    <section className="my-3">
      <h4 className="border p-3 text-center rounded shadow-lg">No hay Citas</h4>
      <article className="border p-3 bg-secondary">
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Header className="d-flex">
                  <div className="circulo-img me-3">
                    <img />
                  </div>
                  <div>
                    <div>Mascota: Firulas</div>
                    <div>Dueño: Pepe</div>
                  </div>
                </Card.Header>
                <Card.Body className="bg-info">
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalFecha"
                  >
                    <Form.Label column sm={2} md={4}>
                      Fecha:
                    </Form.Label>
                    <Col sm={10} md={8}>
                      <Form.Control type="text" placeholder="dd/mm/yyyy" />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalHora"
                  >
                    <Form.Label column sm={2} md={4}>
                      Hora:
                    </Form.Label>
                    <Col sm={10} md={8}>
                      <Form.Control type="text" placeholder="hh:mm" />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalSintomas"
                  >
                    <Form.Label column sm={2} md={4}>
                      Sintomas:
                    </Form.Label>
                    <Col sm={10} md={8}>
                      <Form.Control
                        type="text"
                        placeholder="describir sintomas"
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
