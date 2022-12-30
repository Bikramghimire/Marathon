import { Modal } from "antd";
import React, { useState } from "react";
import DatePicker from "./components/fields/DatePicker";
import InputField from "./components/fields/InputField";
import AddEditForm from "./containers/AddForm";

const Dynamic = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div style={{ backgroundColor: "#A9A9A9", width: "100%", height: "100vh" }}>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AddEditForm />
      </Modal>

      <h3>Rental History</h3>
      <button onClick={showModal}>Add RentalHistory</button>
    </div>
  );
};

export default Dynamic;
