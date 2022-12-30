import { Button } from "antd";
import { Field, Form, Formik } from "formik";
import React from "react";
import Date from "../components/fields/DatePicker";
import InputField from "../components/fields/InputField";

const AddEditForm = () => {
  return (
    <Formik
      initialValues={
        {
          // landlordName: "",
          // landlordEmail: "",
          // addressProperty: "",
          // startingDate: "",
          // endingDate: "",
        }
      }
      onSubmit={() => {
        alert("hello");
      }}
      enableReinitialize
    >
      {({ handleSubmit }) => {
        return (
          <Form onSubmit={handleSubmit}>
            {fields
              .filter((item) => item.catergory === "rentalHistory")
              .map((item) => {
                return (
                  <>
                    <Field
                      name={item.name}
                      label={item.label}
                      component={item.component}
                      placeholder={item.placeholder}
                    />
                  </>
                );
              })}
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};
//     {/* {({ handleSubmit }) =>
//         {fields.filter(item=> item.category==="rentalHistory").map(item =>{
//             return(
//                 <Form onSubmit={handleSubmit}>
//                 <Field
//                   name="landlordName"
//                   label="landlordName"
//                   component={InputField}
//                 />

//                 <button type="submit">submit</button>
//               </Form>
//             )
//         }
//         )
//     }
//     </Formik>
//   ) */}

export default AddEditForm;

const fields = [
  {
    name: "landlordName",
    label: "LandLordName",
    component: InputField,
    placeholder: "please mention your user name",
    catergory: "rentalHistory",
  },
  {
    name: "landlordEmail",
    label: "LandLordEmail",
    component: InputField,
    placeholder: "please mention your email",
    catergory: "rentalHistory",
  },
  {
    name: "propertyAddress",
    label: "PropertyAddress",
    component: InputField,
    placeholder: "please mention your date",
    catergory: "rentalHistory",
  },
  {
    name: "startingDate",
    label: "StartingDate",
    component: InputField,
    placeholder: "please mention your start date",
    catergory: "rentalHistory",
  },
  {
    name: "endingDate",
    label: "Ending Date",
    component: InputField,
    placeholder: "please mention your end date",
    catergory: "rentalHistory",
  },
  {
    name: "course",
    label: "Course",
    component: InputField,
    placeholder: "please mention your education course",
    catergory: "eductionalHistory",
  },
  {
    name: "school",
    label: "School",
    component: InputField,
    placeholder: "please mention your education school",
    catergory: "eductionalHistory",
  },
  {
    name: "educationStartDate",
    label: "Starting Date",
    component: Date,
    placeholder: "please mention your start date",
    catergory: "eductionalHistory",
  },
  {
    name: "educationEndDate",
    label: "Ending Date",
    component: Date,
    placeholder: "please mention your end date",
    catergory: "eductionalHistory",
  },
];
