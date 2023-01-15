import React from "react";
import { Form, Route, Routes } from "react-router-dom";
import "./App.css";
import Layouts from "./component/layouts";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/signin";
import Signup from "./pages/auth/signup";
import Card from "./pages/Card";
import Dynamic from "./pages/dynamicFrom";
import Home from "./pages/Home";
import NiceForm from "./pages/nicePage";
import { Reselect } from "./pages/reselect";
import Cloud from "./pages/useRef";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/formik" element={<Form />} />
          <Route path="/niceform" element={<NiceForm />} />
          <Route path="/card" element={<Card />} />
          <Route path="/dynamicform" element={<Dynamic />} />
          <Route path="/reactselect" element={<Reselect />} />
          <Route path="/ref" element={<Cloud />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
