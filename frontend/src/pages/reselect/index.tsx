// import Select from "rc-select";
import React from "react";
import AsyncSelect from "react-select/async";
export const Reselect = () => {
  const loadoptionsfun = (inputvalu: any) => {
    console.log("the input value=====", inputvalu);
  };
  return (
    <div style={{ padding: "30px" }}>
      <AsyncSelect isClearable loadOptions={loadoptionsfun} />
    </div>
  );
};
