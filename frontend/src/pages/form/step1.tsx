import { Formik } from "formik";
import React from "react";

const Step1 = () => {
  return (
    <div>
      <p>this is the formik</p>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={() => {
          setTimeout((values) => {
            alert(JSON.stringify(values, null, 2));
          });
        }}
        validate={(values) => {
          const errors = { email: "" };
          if (!values.email) {
            errors.email = "required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
            </form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default Step1;
