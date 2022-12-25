import { Field, Formik, Form as FormikForm, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import * as Yup from "yup";
import SelectField from "./components/select";
const Form1 = () => {
  //   const [firstInitialValues, setFirstInitialValues] = useState({
  //     name: "",
  //     email: "",
  //   });
  //   const firstValidator = Yup.object({
  //     name: Yup.string()
  //       .max(15, "Must be 15 characters or less")
  //       .required("Required"),
  //     email: Yup.string().email("Invalid email address").required("Required"),
  //   });
  useEffect(() => {}, []);
  return (
    // <Formik
    //   initialValues={firstInitialValues}
    //   onSubmit={() => {
    //     console.log("this is the form triggered");
    //   }}
    //   validationSchema={firstValidator}
    // >
    //   {() => {
    //     return (
    //       <FormikForm>
    //         <Field
    //           component={Input}
    //           name="name"
    //           label="Name"
    //           placeholder="pls write your name"
    //         />
    //         <Field
    //           component={Input}
    //           name="email"
    //           label="Email"
    //           placeholder="pls write your email address"
    //         />
    //       </FormikForm>
    //     );
    //   }}
    // </Formik>
    <Formik
      initialValues={{ studentOrNot: "" }}
      onSubmit={() => console.log("hello")}
    >
      <Field component={SelectField} name="studentOrNot" />
    </Formik>
  );
};

export default Form1;
