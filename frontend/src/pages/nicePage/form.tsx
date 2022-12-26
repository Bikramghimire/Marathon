import { Field, Formik, Form as FormikForm, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import * as Yup from "yup";
const Form = ({ firstInitialValues, setFirstInitialValues }: any) => {
  const firstValidator = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
  });
  console.log("the state value=====", firstInitialValues);
  useEffect(() => {}, []);
  return (
    <Formik
      initialValues={firstInitialValues}
      onSubmit={(values) => {
        console.log("this is the form triggered");
        alert(JSON.stringify(values));
        setFirstInitialValues(values);
      }}
      validationSchema={firstValidator}
    >
      {({ handleSubmit, values }) => {
        return (
          <FormikForm onSubmit={handleSubmit}>
            <Field
              component={Input}
              name="name"
              label="Name"
              placeholder="pls write your name"
            />
            <Field
              component={Input}
              name="email"
              label="Email"
              placeholder="pls write your email address"
            />
            <button type="submit">submit</button>
          </FormikForm>
        );
      }}
    </Formik>
  );
};

export default Form;
