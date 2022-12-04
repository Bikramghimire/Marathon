import React from "react";
import styled from "styled-components";
interface IPropsType {
  children?: React.ReactNode;
  paddingX?: string;
  paddingY?: string;
  bg: string;
  color?: string;
  br?: string;
  type: any;
  buttontypes?: string;
  open?: boolean;
  setOpen?: (paa: boolean) => void;
  size?: string;
}

const CustomButton: React.FC<IPropsType> = ({
  children,
  paddingX,
  paddingY,
  bg,
  color,
  br,
  buttontypes,
  type,
  open,
  setOpen,
  size,
}) => {
  const ButtonStyle = styled.button`
    ${() =>
      buttontypes === "outline"
        ? `
        width:${size}px;
    padding: ${paddingX}px ${paddingY}px;
    background-color: ${bg};
    color: ${color};
    border: 1px solid ${color};
    border-radius: ${br}px;
    cursor: pointer;
    outline: none;
    transition: all 0.2s linear;
    &:hover {
      color: ${bg};
      background: ${color};
      border-color: white;
     
    }`
        : `
        width:${size}px;
        padding: ${paddingX}px ${paddingY}px;
        background-color: ${color};
        color: ${bg};
        border: 1px solid ${color};
        border-radius: ${br}px;
        cursor: pointer;
        outline: none;
        transition: all 0.2s linear;
        &:hover {
          color: ${color};
          background: ${bg};
          border:1px solid ${color}
        }`}
  `;
  const handleOpen = (open: boolean | undefined): void => {
    console.log("tie is clicked");
    setOpen?.(!open);
  };

  return (
    <ButtonStyle type={type} onClick={() => handleOpen(open)}>
      {children}
    </ButtonStyle>
  );
};

export default CustomButton;
