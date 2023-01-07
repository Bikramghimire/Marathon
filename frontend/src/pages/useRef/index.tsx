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
      <button>submit</button>
    </div>
  );
};

export default Cloud;
