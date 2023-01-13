import { Button, Modal } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid red;
  max-width: 600px;
  width: 100%;
  margin: 30px auto;
  height: 300px;
`;
const Enchance = () => {
  const [educationalHistory, setEducationalHistory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleClick = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const fetchEducationHistory = async () => {
    const resData = await axios.get("http://localhost:3000/educationalHistory");
    console.log("the data is ===", resData.data);
    setEducationalHistory(resData.data);
  };
  useEffect(() => {
    fetchEducationHistory();
  }, []);
  return (
    <Container>
      <h4>EducationalHistory</h4>
      <Button onClick={handleClick}>ADD</Button>
      <Modal
        title="add/delete/edit"
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
      />
      {}
    </Container>
  );
};

export default Enchance;
