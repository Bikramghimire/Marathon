import React from "react";
import { Select } from "antd";

const SelectField: React.FC<InputProps> = ({
  field: { name, value, onChange, onBlur, disabled },
  form: { errors, touched, submitCount, values, setFieldValue },
  label,
  placeholder,
}) => {
  const handleChange = (value: any) => {
    setFieldValue(name, value);
  };
  return (
    <>
      <Select
        value={value}
        style={{ width: 120 }}
        onChange={handleChange}
        onBlur={onBlur}
        options={[
          {
            value: "yes",
            label: "YES",
          },
          {
            value: "no",
            label: "NO",
          },
        ]}
      />
    </>
  );
};

export default SelectField;
interface InputProps {
  field: any;
  form: any;
  label: string;
  placeholder: string;
}
