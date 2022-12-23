import { Form } from "antd";
import { Field, Formik } from "formik";
import React from "react";

const Steps3 = () => {
  return (
    <div>
      <p>this is the steps3</p>
      <Formik
        initialValues={{ email: "", firstName: "", lastName: "" }}
        onSubmit={(values) => {
          setTimeout(() => {
            alert(JSON.stringify(values));
          }, 400);
        }}
      >
        {({ handleChange, handleSubmit, values }) => {
          console.log("the values area======", values);
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">email:</label>
                <Field name="email" type="email" />
              </div>
              <div>
                <label htmlFor="firstname">firstName:</label>
                <Field name="firstName" type="text" />
              </div>
              <div>
                <label htmlFor="lastname">lastName:</label>
                <Field name="lastName" type="text" />
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
