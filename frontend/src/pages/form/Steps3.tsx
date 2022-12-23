import { Form } from "antd";
import ErrorList from "antd/es/form/ErrorList";
import { Field, Formik } from "formik";
import React from "react";

const Steps3 = () => {
  return (
    <div>
      <p>this is the steps3</p>
      <Formik
        initialValues={{ email: "", firstName: "", lastName: "" }}
        onSubmit={(values) => {
          console.log("fdsakjfkjsaf");
          setTimeout(() => {
            alert(JSON.stringify(values));
          }, 400);
        }}
        validate={(values: any) => {
          const errors = { firstName: "", lastName: "", email: "" };
          if (!values.firstName) {
            errors.firstName = "required";
          } else if (values.firstName.length > 15) {
            errors.firstName = "must be 15 characters or less";
          }
          if (!values.lastName) {
            errors.lastName = "required";
          } else if (values.lastName.length > 15) {
            errors.lastName = "must be 15 charaters or less";
          }
          if (!values.email) {
            errors.email = "required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "invalid email address";
          }
          return errors;
        }}
      >
        {({ handleChange, handleSubmit, values, errors }) => {
          console.log("the values area======", values);
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">email:</label>
                <Field name="email" type="email" />
                {errors.email && <p>{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="firstName">firstName:</label>
                <Field name="firstName" type="text" />
                {errors.firstName && <p>{errors.firstName}</p>}
              </div>
              <div>
                <label htmlFor="lastname">lastName:</label>
                <Field name="lastName" type="text" />
                {errors.firstName && <p>{errors.lastName}</p>}
              </div>
              <button type="submit">submitting</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Steps3;
