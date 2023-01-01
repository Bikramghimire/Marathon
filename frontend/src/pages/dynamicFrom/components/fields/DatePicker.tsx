import { DatePicker } from "antd";
import React, { useState } from "react";
import dayjs from "dayjs";

const Date: React.FC<InputProps> = ({
  field: { name, value, onChange },
  form: { errors, touched, values, setFieldValue },
  label,
  placeholder,
}) => {
  const [dateValue, setDateValue] = useState(null);
  const handleChange = (date: any, dateString: any) => {
    setFieldValue(name, date);
  };
  return (
    <div>
      <DatePicker
        name={name}
        onChange={handleChange}
        picker="month"
        format="YYYY/MM"
        value={value}

        // value={value}
      />
    </div>
  );
};

export default Date;
interface InputProps {
  field: any;
  form: any;
  label: string;
  placeholder: string;
}
