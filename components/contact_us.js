import { Card, Form, Button, InputGroup, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Insira seu nome"),
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("Preencha o campo de email"),
  message: yup.string().required("Escreve uma mensagem"),
});

export default function ContactUsComponent() {
  return (
    <Card className="bg-white p-3">
      <h2 className="bg-white text-primary">Você tem alguma dúvida?</h2>
      <p className="bg-white">
        <small className="bg-white">
          Se desejar entrar em contato conosco, sinta-se à vontade para entrar
          em contato aqui.
        </small>
      </p>

      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        className="bg-white"
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate className="bg-white" onSubmit={handleSubmit}>
            <Form.Group
              hasValidation
              className="bg-white pb-3"
              controlId="formBasicName"
            >
              <Form.Label className="bg-white text-primary">
                <small className="bg-white">
                  <b className="bg-white">Nome*</b>
                </small>
              </Form.Label>
              <InputGroup className="bg-white" hasValidation>
                <Form.Control
                  className="bg-white"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback className="bg-white" type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group className="bg-white pb-3" controlId="formBasicEmail">
              <Form.Label className="bg-white text-primary">
                <small className="bg-white">
                  <b className="bg-white">Endereço de Email*</b>
                </small>
              </Form.Label>
              <InputGroup className="bg-white" hasValidation>
                <Form.Control
                  className="bg-white"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback className="bg-white" type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="bg-white pb-3" controlId="formBasicPassword">
              <Form.Label className="bg-white text-primary">
                <small className="bg-white">
                  <b className="bg-white">Escreva a mensagem*</b>
                </small>
              </Form.Label>
              <InputGroup className="bg-white" hasValidation>
                <Form.Control
                  className="bg-white"
                  type="text"
                  as="textarea"
                  name="message"
                  rows={3}
                  value={values.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                ></Form.Control>
                <Form.Control.Feedback className="bg-white" type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Button className="w-25 text-white p-2" variant="info" type="submit">
              Enviar
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
}
