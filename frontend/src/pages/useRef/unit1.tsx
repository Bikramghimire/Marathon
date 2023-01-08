import React, { useRef } from "react";

const Reference = () => {
  const ref = useRef(0);

  const countHandle = () => {
    ref.current++;
    console.log("the ref values=====", ref.current);
  };
  console.log("ref renders");
  return (
    <div>
      <p>useREf</p>
      <button onClick={() => countHandle()}>click to count</button>
    </div>
  );
};

export default Reference;
