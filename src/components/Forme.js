import {Form,Button} from "react-bootstrap";
import "./Form.css";
function FormDisabledInputExample() {
  return (
    <>
      <Form.Group className="mb-3 ">
        <Form.Label style={{ fontSize: "20px", fontFamily: "bold" }}>
          Please Login
        </Form.Label>
        <Form.Control placeholder="Enter Your USERID" type="text" name="First Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Enter Your PASSWORD" type="password" />
      </Form.Group>
      <Button>LOGIN</Button>
    </>
  );
}

export default FormDisabledInputExample;
