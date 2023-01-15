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
    id: "",
    school: "",
    field: "",
    address: "",
  });
  const [formState, setFormState] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmits = async (values: any) => {
    setIsModalOpen(false);
    console.log("the values===", values);
    if (values.id) {
      await axios.patch(
        `http://localhost:3000/educationalHistory/${values.id}`,
        values
      );
    } else {
      await axios.post("http://localhost:3000/educationalHistory", values);
    }
    fetchEducationHistory();
  };
  const handleAddEditClick = async (id: any) => {
    if (id === undefined) {
      setFormState("add");
      setEducationalState({
        id: "",
        school: "",
        field: "",
        address: "",
      });
    }
    if (id) {
      setFormState("edit");
      const data = await axios.get(
        `http://localhost:3000/educationalHistory/${id}`
      );
      console.log("the data is===", data);
      setEducationalState(data.data);
    }
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
      <Button onClick={() => handleAddEditClick(undefined)}>ADD</Button>
      <Modal
        title="add/delete/edit"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
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
            <button onClick={() => handleAddEditClick(item.id)}>edit</button>
          </div>
        );
      })}
    </Container>
  );
};

export default Enchance;
