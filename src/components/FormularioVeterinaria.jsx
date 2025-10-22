import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormularioVeterinaria = () => {
  return (
    <article>
      <div className="border p-3 bg-white">
        <h2>Llenar el formulario para crear la cita</h2>
      </div>
      <Form className="shadow-lg rounded border p-3 bg-info">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </article>
  );
};

export default FormularioVeterinaria;
