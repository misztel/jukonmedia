import React from 'react';
import { Formik, Form, Field } from 'formik';
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
    .min(10, 'Too Short!')
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

export default class OrderModal extends React.Component {
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
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <Row>
              <Col md={4}>
                <InputField type="text" name="name" customplaceholder="Name" />
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
                  customplaceholder="Phone Number"
                />
              </Col>
            </Row>
            <Col md={12}>
              <Textarea name="message" customplaceholder="Message" />
            </Col>
            <Button
              round="5px"
              margin="30px 0"
              width="100%"
              type="submit"
              className="button arrow_right"
              disabled={isSubmitting}
            >
              CONTINUE
            </Button>
          </StyledForm>
        )}
      </Formik>
    );
  }
}
