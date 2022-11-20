import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../nav";

interface IChildrenPropsType {
  children?: React.ReactNode;
}

const Layouts: React.FC<IChildrenPropsType> = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layouts;
