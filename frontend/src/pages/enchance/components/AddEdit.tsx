import { Button } from "antd";
import { Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import useAPI from "../../../hooks/api";
import Input from "./InputField";
import Date from "./DatePicker";

const AddEditForm = ({ educationState, formState, handleSubmits }: any) => {
  return (
    <Formik
      initialValues={educationState}
      onSubmit={(values: any, { resetForm }) => {
        // handleCancel();
        handleSubmits(values);
        resetForm();
      }}
      enableReinitialize={true}
    >
      {({ handleSubmit, resetForm, values }) => {
        console.log("the values are====", values);
        return (
          <Form onSubmit={handleSubmit}>
            {fields.map((item) => {
              return (
                <div key={item.name}>
                  <Field
                    name={item.name}
                    label={item.label}
                    component={item.component}
                    placeholder={item.placeholder}
                  />
                </div>
              );
            })}

            {formState === "edit" ? (
              <button type="submit">Edit</button>
            ) : formState === "add" ? (
              <button type="submit">Submit</button>
            ) : null}
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddEditForm;

const fields = [
  {
    name: "school",
    label: "school",
    component: Input,
    placeholder: "please mention your user name",
    catergory: "rentalHistory",
  },
  {
    name: "field",
    label: "field",
    component: Input,
    placeholder: "please mention your email",
    catergory: "rentalHistory",
  },
  {
    name: "address",
    label: "address",
    component: Input,
    placeholder: "please mention your date",
    catergory: "rentalHistory",
  },
  {
    name: "startingDate",
    label: "StartingDate",
    component: Date,
    placeholder: "please mention your start date",
    catergory: "rentalHistory",
  },
  {
    name: "endingDate",
    label: "Ending Date",
    component: Date,
    placeholder: "please mention your end date",
    catergory: "rentalHistory",
  },
  //   {
  //     name: "course",
  //     label: "Course",
  //     component: Input,
  //     placeholder: "please mention your education course",
  //     catergory: "eductionalHistory",
  //   },
  //   {
  //     name: "school",
  //     label: "School",
  //     component: Input,
  //     placeholder: "please mention your education school",
  //     catergory: "eductionalHistory",
  //   },
  //   {
  //     name: "educationStartDate",
  //     label: "Starting Date",
  //     component: Date,
  //     placeholder: "please mention your start date",
  //     catergory: "eductionalHistory",
  //   },
  //   {
  //     name: "educationEndDate",
  //     label: "Ending Date",
  //     component: Date,
  //     placeholder: "please mention your end date",
  //     catergory: "eductionalHistory",
  //   },
];
