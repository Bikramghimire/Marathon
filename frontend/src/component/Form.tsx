import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import React from "react";
import styled from "styled-components";
import CustomButton from "./Button";
const FormStyle = styled.div`
  width: 50%;
  margin: 50px auto;
  transition: all 9s linear;
`;
const FormikStyle = styled(FormikForm)`
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 10px;
  position: relative;
`;
const FieldStyle = styled(Field)`
  width: 70%;
  height: 2.2rem;
  font-size: 20px;
  border: 2px solid #dddd;
  border-radius: 10px;
  text-indent: 5%;
  &:focus {
    outline: none;
  }
  margin: 10px 0px;
`;
const LabelFieldStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: none;
  cursor: pointer;
  position: relative;
  top: 10px;
  left: 99%;
`;
interface FromsType {
  setOpen: (params: boolean) => void;
}
const Forms: React.FC<FromsType> = ({ setOpen }) => {
  return (
    <FormStyle>
      <CloseButton onClick={() => setOpen(false)}>
        <FontAwesomeIcon icon={"xmark"} />
      </CloseButton>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {}}
      >
        {({}) => (
          <FormikStyle>
            <LabelFieldStyle>
              <label style={{ marginRight: "20px" }}>First Name:</label>
              <FieldStyle type="email" name="email" />
            </LabelFieldStyle>
            <ErrorMessage name="email" component="div" />
            <LabelFieldStyle>
              <label style={{ marginRight: "20px" }}>First Name:</label>
              <FieldStyle type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </LabelFieldStyle>

            <CustomButton
              paddingX="10"
              paddingY="20"
              bg="white"
              type="submit"
              color="#2596be"
              br="5"
              buttontypes="contained"
              size="300"
            >
              Submit
            </CustomButton>
          </FormikStyle>
        )}
      </Formik>
    </FormStyle>
  );
};

export default Forms;
