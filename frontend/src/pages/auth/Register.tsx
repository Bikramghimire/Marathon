import { UserOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const RegisterStyleWrapper = styled.div`
  width: 500px;
  height: 100vh;
  margin: 100px auto;
`;

const Register = () => {
  const [useEmail, setUseEmail] = useState("");
  return (
    <RegisterStyleWrapper>
      <Input.Group>
        <Input
          size="large"
          style={{ width: "70%" }}
          placeholder="@gmail.com"
          prefix={<UserOutlined />}
          value={useEmail}
          onChange={(e) => setUseEmail(e.target.value)}
        />
        <Button size="large" type="primary">
          Submit
        </Button>
      </Input.Group>
    </RegisterStyleWrapper>
  );
};

export default Register;
