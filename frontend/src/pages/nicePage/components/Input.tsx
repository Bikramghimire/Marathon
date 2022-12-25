import React from "react";
import { Input as InputField } from "antd";
import { FieldInputProps, FormikProps } from "formik";

const Input: React.FC<InputProps> = ({
  field: { name, value, onChange, onBlur, disabled },
  form: { errors, touched, submitCount, values },
  label,
  placeholder,
}) => {
  console.log("the value and values======", value, values);
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
