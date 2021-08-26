import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import CustomField from './CustomField';
import Button from '../Basic/Button';

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
            <div>
              <div className="input_wrap">
                <CustomField type="text" name="name" customplaceholder="Name" />
              </div>
            </div>
            <div className="input_wrap">
              <CustomField
                type="email"
                name="email"
                customplaceholder="Email"
              />
            </div>
            <div className="input_wrap">
              <CustomField
                type="tel"
                name="phone"
                customplaceholder="Phone Number"
              />
            </div>
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
