import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: green;
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

const TestButton = ({ children, className }: any) => {
  return <Button className={className}>{children}</Button>;
};
export default TestButton;
