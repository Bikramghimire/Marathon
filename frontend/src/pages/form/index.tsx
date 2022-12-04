import React, { useState } from "react";
import CustomButton from "../../component/Button";
import Forms from "../../component/Form";
const Form = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <CustomButton
        paddingX="10"
        paddingY="20"
        bg="white"
        color="#664e96"
        br="20"
        type="contained"
        open={open}
        setOpen={setOpen}
      >
        Open Form
      </CustomButton>
      <CustomButton
        paddingX="10"
        paddingY="20"
        bg="white"
        color="#664e96"
        br="20"
        type="contained"
      >
        Open Form
      </CustomButton>
      {open ? <Forms setOpen={setOpen} /> : ""}
    </div>
  );
};

export default Form;
