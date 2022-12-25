import React from "react";
import styled from "styled-components";

const ErrorMessageStyle = styled.div`
  color: red;
`;

const Error = ({ message }: any) => {
  return (
    <ErrorMessageStyle>
      <>{message}</>
    </ErrorMessageStyle>
  );
};

export default Error;
