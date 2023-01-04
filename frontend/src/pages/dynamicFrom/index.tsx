import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import useAPI from "../../hooks/api";
import DatePicker from "./components/fields/DatePicker";
import InputField from "./components/fields/InputField";
import Spinners from "./components/fields/spinner";
import makeRequest from "../../utils/request";

// import Spinner from "./components/fields/Spinner";
import AddEditForm from "./containers/AddForm";

const Dynamic = () => {
  const [formState, setFormState] = useState("");
  const [rentalHistoryData, setRentalHistoryData] = useState([]);
  const [getRentalHistory, { data: rentalHistory, loading }] = useAPI();
  const [
    getRentalHistoryByID,
    { data: rentalHistoryById, loading: loadingid },
  ] = useAPI();
  const [rentalState, setRentalState] = useState({
    landlordName: "",
    landlordEmail: "",
    addressProperty: "",
    startingDate: "",
    endingDate: "",
  });

  const handleGetRentalHistory = () => {
    getRentalHistory({
      method: "get",
      url: "rentalHistory",
    });
  };
  useEffect(() => {
    handleGetRentalHistory();
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
    setRentalState({
      landlordName: "",
      landlordEmail: "",
      addressProperty: "",
      startingDate: "",
      endingDate: "",
    });
  };
  const callback = async (id: number) => {
    const config = { url: `rentalHistory/${id}` };
    const res = await makeRequest(config);
    setRentalState(res);
    showModal();
  };
  return (
    <div style={{ backgroundColor: "#A9A9A9", width: "100%", height: "100vh" }}>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AddEditForm
          rentalState={rentalState}
          formState={formState}
          handleCancel={handleCancel}
        />
      </Modal>

      <h3>Rental History</h3>
      <button
        onClick={() => {
          showModal();
          setFormState("addForm");
        }}
      >
        Add RentalHistory
      </button>
      {loading ? <Spinners /> : null}
      {rentalHistory?.map((item: any) => {
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
            <button
              onClick={() => {
                callback(item.id);
                setFormState("editForm");
              }}
            >
              edit
            </button>
            <button>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Dynamic;
