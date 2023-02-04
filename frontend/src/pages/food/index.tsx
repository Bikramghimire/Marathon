import React from "react";
import Login from "../auth/signin";
import Signup from "./Auth/SignUp";
import { useAuth } from "../../RootProvider";
import { useNavigate } from "react-router-dom";

const Food = () => {
  const auth = useAuth();
  auth.login();
  const navigate = useNavigate();
  return (
    <div>
      <p>this is the home page for the food applications</p>
      <button onClick={() => navigate("/logout")}>logout</button>
    </div>
  );
};
export default Food;
// Initialize Firebase
