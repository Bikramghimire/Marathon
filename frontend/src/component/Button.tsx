import React from "react";
import styled from "styled-components";
interface IPropsType {
  children?: React.ReactNode;
  paddingX?: string;
  paddingY?: string;
  bg: string;
  color?: string;
  br?: string;
  type?: string;
}

const CustomButton: React.FC<IPropsType> = ({
  children,
  paddingX,
  paddingY,
  bg,
  color,
  br,
  type,
}) => {
  const ButtonStyle = styled.button`
    ${() =>
      type === "outline"
        ? `
    padding: ${paddingX}px ${paddingY}px;
    background-color: ${bg};
    color: ${color};
    border: 1px solid ${color};
    border-radius: ${br}px;
    cursor: pointer;
    outline: none;
    &:hover {
      color: ${bg};
      background: ${color};
      border-color: white;
      transition: all 0.2s linear;
    }`
        : `
        padding: ${paddingX}px ${paddingY}px;
        background-color: ${color};
        color: ${bg};
        border: 1px solid ${color};
        border-radius: ${br}px;
        cursor: pointer;
        outline: none;
        &:hover {
          color: ${color};
          background: ${bg};
          border:1px solid ${color}
          transition: all 0.2s linear;
        }`}
  `;

  return <ButtonStyle>{children}</ButtonStyle>;
};

export default CustomButton;
