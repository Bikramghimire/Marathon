import React from "react";
import styled from "styled-components";
const Container = styled.div``;
const Nav = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Logo = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: red;
`;
const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  border: 1px solid red;
  justify-content: space-around;
`;
const Challenge3 = () => {
  return (
    <Container>
      <Nav>
        <Logo />
        <NavItems>
          <p>contact</p>
          <p>Work</p>
          <p>Portfolio</p>
        </NavItems>
      </Nav>
    </Container>
  );
};

export default Challenge3;
