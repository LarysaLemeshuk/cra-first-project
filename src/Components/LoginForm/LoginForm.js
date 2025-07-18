import React, { Component } from 'react';
import { SIGN_UP_SCHEMA } from '../../schemas';

import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialState = {
  firsName: '',
  lastName: '',
  email: '',
  password: '',
};

function SignUpForm(props) {
  const handelSubmitToFormik = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialState}
      onSubmit={handelSubmitToFormik}
      validationSchema={SIGN_UP_SCHEMA}
    >
      {(formikProps) => {
        return (
          <Form style={{ display: 'flex', flexDirection: 'column' }}>
            <Field name="firstName" placeholder="Type your firstName" />
            <ErrorMessage name="firstName" component="p" />
            <Field name="lastName" placeholder="Type your lastName" />
            <ErrorMessage name="lastName" component="p" />
            <Field name="email" placeholder="Type your email" />
            <ErrorMessage name="email" component="p" />
            <Field name="password" placeholder="Type your password" />
            <ErrorMessage name="password" component="p" />
            <button type="submit">Send</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignUpForm;
