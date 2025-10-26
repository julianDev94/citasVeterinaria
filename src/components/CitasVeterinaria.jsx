import { Button, Card, Col, Row, Form } from "react-bootstrap";

const CitasVeterinaria = () => {
  return (
    <section className="my-3">
      <h4 className="border p-3 text-center rounded shadow-lg">No hay Citas</h4>
      <article className="border p-3 bg-secondary">
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Header className="d-flex">
                  <div className="circulo-img me-3">
                    <p></p>
                  </div>
                  <div>
                    <p>Mascota: Firulas</p>
                    <p>Dueño: Pepe</p>
                  </div>
                </Card.Header>
                <Card.Body className="bg-info">
                  <Card.Text>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={2}>
                        Fecha:
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="dd/mm/yyyy" />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={2}>
                        Hora:
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="hh:mm" />
                      </Col>
                    </Form.Group>
                  
                   <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalEmail"
                    >
                      <Form.Label column sm={2}>
                        Sintomas:
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="describir sintomas" />
                      </Col>
                    </Form.Group>
                  </Card.Text>
                  
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
