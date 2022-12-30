import { DatePicker } from "antd";
import React from "react";

const Date = () => {
  const handleChange = (date: any, dateString: any) => {
    console.log(date, dateString);
  };
  return (
    <div>
      <DatePicker onChange={handleChange} picker="month" />
    </div>
  );
};

export default Date;
