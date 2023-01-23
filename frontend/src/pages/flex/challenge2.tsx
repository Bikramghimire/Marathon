import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  padding: 20px;
`;
const Box = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid red;
`;
const Challenge2 = () => {
  return (
    <Container>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </Container>
  );
};

export default Challenge2;
