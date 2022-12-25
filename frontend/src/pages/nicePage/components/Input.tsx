import React from "react";
import { Input as InputField } from "antd";
import { FieldInputProps, FormikProps } from "formik";
import Error from "./error";

const Input: React.FC<InputProps> = ({
  field: { name, value, onChange, onBlur, disabled },
  form: { errors, touched, submitCount, values },
  label,
  placeholder,
}) => {
  console.log("the value and values======", errors, touched, submitCount);
  const hasError = errors[name] && touched[name];

  return (
    <div>
      <label>{label}</label>
      <InputField
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {hasError && <Error message={errors && errors[name]} />}
    </div>
  );
};

export default Input;

interface InputProps {
  field: any;
  form: any;
  label: string;
  placeholder: string;
}
