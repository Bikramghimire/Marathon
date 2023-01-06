// import Select from "rc-select";
import React from "react";
import AsyncSelect from "react-select/async";
export const Reselect = () => {
  async function search(criteria: string) {
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${criteria}`
    );
    const body = await response.json();
    return body.results.map((result: any) => {
      return {
        value: result.name,
        label: result.name,
      };
    });
  }

  const loadoptionsfun = async (inputvalue: any) => {
    const ans = await search(inputvalue);
    console.log("result===", ans);
    return ans;
    // return ans.filter((items: any) => items.includes(inputvalue));

    // return ans;
    // console.log("the input value=====", inputvalue);
  };
  return (
    <div style={{ padding: "30px" }}>
      <>hello</>
      <AsyncSelect isClearable loadOptions={loadoptionsfun} />
    </div>
  );
};
