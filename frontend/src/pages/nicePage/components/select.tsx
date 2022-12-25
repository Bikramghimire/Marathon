import React from "react";
import { Select } from "antd";

// const handleChange = (value: string) => {
//   console.log(`selected ${value}`);
// };

const SelectField: React.FC<InputProps> = ({
  field: { name, value, onChange, onBlur, disabled },
  form: { errors, touched, submitCount, values },
  label,
  placeholder,
}) => {
  console.log("the values are=======", values);
  return (
    <>
      <Select
        name={name}
        value={value}
        style={{ width: 120 }}
        onChange={onChange}
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
