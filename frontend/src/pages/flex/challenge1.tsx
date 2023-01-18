import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const Box = styled.div`
  border: 1px solid red;
  height: 200px;
  width: 200px;
  background-color: aliceblue;
`;
const Challenge1 = () => {
  return (
    <Container>
      <Box />
    </Container>
  );
};

export default Challenge1;
