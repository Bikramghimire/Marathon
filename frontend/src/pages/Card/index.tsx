import React from "react";
import styled from "styled-components";
import perfume from "../../assets/perfume.jpg";
const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: 500px;
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
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default Card;
