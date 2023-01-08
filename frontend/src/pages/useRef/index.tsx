import axios from "axios";
import React, { useState, useEffect } from "react";

const Cloud = () => {
  const [selectFile, setSelectFile] = useState();
  const [preview, setPreview] = useState<string | undefined>();
  const handleChange = (e: any) => {
    console.log("the enviroment=====", e.target.files[0]);
    setSelectFile(e.target.files[0]);
  };
  useEffect(() => {
    if (!selectFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectFile);

    console.log("the url object url=====", objectUrl);

    objectUrl && setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectFile]);

  const uploadFile = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ygn8vdji");
    let data = "";
    await axios
      .post("https://api.cloudinary.com/v1_1/da8ejwpyk/image/upload")
      .then((data) => console.log("dadfas===", data));
  };

  const handleSubmit = () => {
    if (selectFile) {
      console.log("the fiels===", selectFile);
    }

    uploadFile(selectFile);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      {selectFile && (
        <img
          src={preview}
          alt="ll"
          style={{ width: "200px", height: "200px" }}
        />
      )}
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Cloud;
