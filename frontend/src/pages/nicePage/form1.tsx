import { Field, Formik, Form as FormikForm, ErrorMessage, Form } from "formik";
import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import * as Yup from "yup";
import SelectField from "./components/select";
const Form1 = ({ firstInitialValues, setFirstInitialValues }: any) => {
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
    <Formik
      initialValues={firstInitialValues}
      onSubmit={(values) => {
        console.log("this is the form triggered");
        alert(JSON.stringify(values));
        setFirstInitialValues(values);
      }}
    >
      <Form>
        <Field component={SelectField} name="studentOrNot" />
      </Form>
    </Formik>
  );
};

export default Form1;
