import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import Layouts from "../component/layouts";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Form from "../pages/form";

import Home from "../pages/Home";
import NiceForm from "../pages/nicePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/formik" element={<Form />} />
        <Route path="/niceform" element={<NiceForm />} />
      </Route>
    </>
  )
);
