import React, { useState } from "react";
import Form from "./form";
import Form1 from "./form1";

const NiceForm = () => {
  const [steps, setSteps] = useState(0);
  return (
    <div>
      <></>
      {steps === 0 ? <Form /> : <Form1 />}
      {steps === 0 ? (
        <button onClick={() => setSteps((prev) => prev + 1)}>next</button>
      ) : (
        <>
          <button onClick={() => setSteps((prev) => prev - 1)}>previous</button>
          <button>finished</button>
        </>
      )}
    </div>
  );
};

export default NiceForm;
