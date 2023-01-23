import React from "react";
import styled from "styled-components";
import TestButton from "./components/button";
import Search from "./components/search";

const ModifiedTestButton = styled(TestButton)`
  background-color: red;
  font-size: 2rem;
  font-weight: bold;
`;

const Reusable = () => {
  return (
    <div>
      <p>this is reuseable</p>
      <ModifiedTestButton>Click Me</ModifiedTestButton>
      <Search />
    </div>
  );
};

export default Reusable;
