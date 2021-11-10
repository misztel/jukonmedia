import React from 'react';
import axios from "axios";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import InputField from './FormFields/Input/Input';
import Textarea from './FormFields/Textarea/Textarea';
import Button from '../Basic/Button';
import Col from '../Basic/Col';
import Row from '../Basic/Row';

const validateSchema = Yup.object().shape({
  name: Yup.string()
    .max(40, 'Too Long!')
    .required('Required!'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required!'),
  phone: Yup.string()
    .min(4, 'Too Short!')
    .max(18, 'Too Long!')
    .required('Required!'),
  message: Yup.string()
    .min(10, 'Too Short!')
    .max(38, 'Too Long!')
    .required('Required!'),
});

const StyledForm = styled(Form)`
  width: 100%;
`;

const StyledInfoSuccess = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  font-weight: 600;
  color: #fff;
  background-color: ${({ theme }) => theme.infoColor.success};
`;

const StyledInfoError = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  font-weight: 600;
  color: #fff;
  background-color: ${({ theme }) => theme.infoColor.danger};
`;

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mailSent: false,
      error: null,

    };
    this.onChange = this.onChange.bind(this);
  }

  onChange = (value) => {
    console.log("Captcha value:", value);
  }

  render() {
    return (
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          message: '',
        }}
        validationSchema={validateSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('sending...');
          axios({
            method: "post",
            url: 'https://server387625.nazwa.pl/dev/jukonmedia/api/contact/index.php', //change this to correct endpoint
            headers: { "content-type": "application/json" },
            data: {
              mailSent: this.state.mailSent,
              error: this.state.error,
              name: values.name,
              email: values.email,
              phone: values.phone,
              msg: values.message
            }
          })
            .then(result => {
              console.log(result);
              if (result.data.sent) {
                this.setState({
                  mailSent: result.data.sent
                });
                this.setState({ error: false });
              } else {
                this.setState({ error: true });
              }
            })
            .catch(error => this.setState({ error: error.message }));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <Row>
              <Col md={4}>
                <InputField type="text" name="name" customplaceholder="Imię" />
              </Col>
              <Col md={4}>
                <InputField
                  type="email"
                  name="email"
                  customplaceholder="Email"
                />
              </Col>
              <Col md={4}>
                <InputField
                  type="tel"
                  name="phone"
                  customplaceholder="Numer Telefonu"
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Textarea name="message" customplaceholder="Wiadomość" />
              </Col>
              <Button
                round="5px"
                margin="30px 0"
                width="100%"
                type="submit"
                className="button arrow_right"
                disabled={isSubmitting}
              >
                Wyślij
              </Button>
              <div style={{ width: '100%', display: 'flex' }}>
                {this.state.mailSent && <StyledInfoSuccess>Wiadomość poprawnie wysłana</StyledInfoSuccess>}
                {this.state.error && <StyledInfoError>Błąd wysyłania wiadomości</StyledInfoError>}
              </div>
            </Row>
          </StyledForm>
        )}
      </Formik>
    );
  }
}

export default ContactForm;
