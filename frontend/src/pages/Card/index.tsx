import React from "react";
import styled from "styled-components";
import perfume from "../../assets/perfume.jpg";
const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: 400px;
  margin: 30px auto;
  border-radius: 16px;
  border: 1px solid #ddd;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
const ImageWrapper = styled.img`
  max-width: 50%;
  height: 100%;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
`;

const SubTitle = styled.h5``;

const ContentWrapper = styled.div`
  padding: 22px;
`;
const Title = styled.h2`
  line-height: 1.5rem;
  padding: 26px 0px;
`;
const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;
const Cost = styled.h3`
  color: hsl(158, 36%, 37%);
  font-size: 30px;
`;
const ActualCost = styled.div`
  text-decoration-line: line-through;
`;

const AddToCart = styled.button`
  padding: 16px 30px;
  outlined: none;
  font-size: 16px;
  font-weight: 700;
  color: white;
  background-color: hsl(158, 36%, 37%);
  border: none;
  border-radius: 8px;
  width: 260px;
  justify-content: center;
  &:hover {
    background-color: hsl(228, 12%, 48%);
  }
`;
const Paragraph = styled.p``;
const Card = () => {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper src={perfume} alt="perfume-img" />
        <ContentWrapper>
          <SubTitle>PERFUME</SubTitle>
          <Title>Gabriellle Essence Eau De Parfum</Title>
          <Paragraph>
            this the frontend Css application for the development of the
            application in the name of the lord. change the science and physic
            and biology
          </Paragraph>
          <Price>
            <Cost>$149.99</Cost>
            <ActualCost>169.99</ActualCost>
          </Price>
          <AddToCart>Add To Cart</AddToCart>
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default Card;
