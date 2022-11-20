import { HomeOutlined, LoginOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const items = [
  {
    label: "Home",
    key: "Home",
    icon: <HomeOutlined />,
  },
  {
    label: "Login",
    key: "login",
    icon: <LoginOutlined />,
  },
  {
    label: "Register",
    key: "register",
    icon: <UserOutlined />,
  },
];

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Logo = styled.div`
  font-size: 29px;
  cursor: pointer;
`;
const Header = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e: any) => {
    setCurrent(e.key);
  };
  return (
    <HeaderWrapper>
      <Logo>
        <Link to="/">Ecommerce App</Link>
      </Logo>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </HeaderWrapper>
  );
};

export default Header;
