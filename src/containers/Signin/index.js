import React from "react";
import { Form, Button, Container , Row ,Col } from "react-bootstrap";
import Layout from "../../components/Layout";

/**
 * @author
 * @function Signin
 **/

const Signin = (props) => {
  return (
    <>
      <Container>
        <Row style={{marginTop : "50px"}}>
          <Col md={{span: 6 , offset :3}}>
            <Form>
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
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signin;
