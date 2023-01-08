import React, { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const timeIDRef = useRef(0);
  const startHandler = () => {
    // if (timeIDRef.current) {
    //   return;
    // }
    // @ts-ignore
    timeIDRef.current = setInterval(() => setCount((c) => c + 1), 1000);
  };
  console.log("the count value===", count);
  console.log("the timeidref=====", timeIDRef);
  const stopHandler = () => {
    clearInterval(timeIDRef.current);
    timeIDRef.current = 0;
  };

  useEffect(() => {
    return () => clearInterval(timeIDRef.current);
  }, []);

  return (
    <div>
      <p>{count}s</p>
      <button onClick={startHandler}>start</button>
      <button onClick={stopHandler}>end</button>
    </div>
  );
};

export default StopWatch;
