import { Field, Formik, Form as FormikForm, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import Input from "./components/Input";

const Form = () => {
  const [firstInitialValues, setFirstInitialValues] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {}, []);
  return (
    <Formik
      initialValues={firstInitialValues}
      onSubmit={() => {
        console.log("this is the form triggered");
      }}
    >
      {() => {
        return (
          <FormikForm>
            <Field
              component={Input}
              name="name"
              label="Name"
              placeholder="pls write your name"
            />
            <ErrorMessage component="div" name="name" />
            <Field
              component={Input}
              name="email"
              label="Email"
              placeholder="pls write your email address"
            />
            <ErrorMessage component="div" name="email" />
          </FormikForm>
        );
      }}
    </Formik>
  );
};

export default Form;
