import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import DatePicker from "./components/fields/DatePicker";
import InputField from "./components/fields/InputField";
import AddEditForm from "./containers/AddForm";

const Dynamic = () => {
  const [rentalHistoryData, setRentalHistoryData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/rentalHistory")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setRentalHistoryData(data);
      })
      .catch((err) => console.log("the error===", err));
  }, []);
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
      {rentalHistoryData?.map((item: any) => {
        return (
          <div
            style={{
              width: "400px",
              height: "100px",
              padding: "20px",
              border: "1px solid red",
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              justifyContent: "space-around",
            }}
          >
            <div>
              <h3>{item.landlordName}</h3>
              <h3>{item.landlordEmail}</h3>
              <p>{item.propertyAddress}</p>
              <>{dayjs(item.startingDate).format("YYYY-MM")}</>
            </div>
            <button>edit</button>
            <button>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Dynamic;
