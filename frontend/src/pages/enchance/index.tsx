import { Button, Modal } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddEditForm from "./components/AddEdit";

const Container = styled.div`
  border: 1px solid red;
  max-width: 600px;
  width: 100%;
  margin: 30px auto;
`;
const Enchance = () => {
  const [educationalHistory, setEducationalHistory] = useState([]);
  const [educationState, setEducationalState] = useState({
    school: "",
    field: "",
    address: "",
  });
  const [formState, setFormState] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmits = async (values: any, id: any) => {
    setIsModalOpen(false);
    console.log("the values===", values);
    await axios.post("http://localhost:3000/educationalHistory", values);
    fetchEducationHistory();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleAddClick = () => {
    setFormState("add");
    setIsModalOpen(true);
  };
  const handleEditClick = () => {
    setFormState("edit");
    setIsModalOpen(true);
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
      <Button onClick={handleAddClick}>ADD</Button>
      <Modal
        title="add/delete/edit"
        open={isModalOpen}
        onCancel={handleCancel}
        // onOk={handleOk}
        // footer={[
        //   formState === "add" ? (
        //     <Button key="submit" type="primary" onClick={handleAddClick}>
        //       ADD
        //     </Button>
        //   ) : (
        //     <Button key="submit" type="primary" onClick={handleEditClick}>
        //       EDIT
        //     </Button>
        //   ),
        //   <Button key="submit" type="primary" onClick={handleCancel}>
        //     Cancel
        //   </Button>,
        // ]}
      >
        <AddEditForm
          educationState={educationState}
          formState={formState}
          handleSubmits={handleSubmits}
        />
      </Modal>
      {educationalHistory?.map((item: any) => {
        return (
          <div style={{ padding: "20px", margin: "20px" }} key={item.id}>
            <div>
              <p>{item.school}</p>
              <p>{item.field}</p>
              <p>{item.address}</p>
            </div>
            <button onClick={handleEditClick}>edit</button>
          </div>
        );
      })}
    </Container>
  );
};

export default Enchance;
