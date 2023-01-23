import Item from "antd/es/list/Item";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  border: 1px solid red;
  height: 100vh;
  margin: 0px auto;
  display: flex;
`;

const Tabbing = styled.div`
  border: 1px solid red;
  flex: 1;
  & > p {
    padding: 20px;
  }
`;

const Content = styled.div`
  border: 1px solid green;
  flex: 1;
  & > p {
    padding: 20px;
  }
`;
const tabbing = [
  {
    name: "first steps",
    key: 1,
    content: "this is the content of first steps",
  },
  {
    name: "second steps",
    key: 2,
    content: "this is the content of second steps",
  },
  {
    name: "third steps",
    key: 3,
    content: "this is the content of third steps",
  },
];
const Tabs = () => {
  const [activeKey, setActiveKey] = useState<number>(1);
  return (
    <Container>
      <Tabbing>
        {tabbing.map((item) => {
          return (
            <p key={item.key} onClick={() => setActiveKey(item.key)}>
              {item.name}
            </p>
          );
        })}
      </Tabbing>
      <Content>
        {tabbing
          .filter((item) => item.key === activeKey)
          .map((item) => {
            return <p key={item.key}>{item.content}</p>;
          })}
      </Content>
    </Container>
  );
};

export default Tabs;
