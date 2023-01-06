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
import Card from "../pages/Card";
import AutoSearch from "../pages/debounce";
import Dynamic from "../pages/dynamicFrom";
import Form from "../pages/form";

import Home from "../pages/Home";
import NiceForm from "../pages/nicePage";
import { Reselect } from "../pages/reselect";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/formik" element={<Form />} />
        <Route path="/niceform" element={<NiceForm />} />
        <Route path="/card" element={<Card />} />
        <Route path="/dynamicform" element={<Dynamic />} />
        <Route path="/debounce" element={<AutoSearch />} />
        <Route path="/reactselect" element={<Reselect />} />
      </Route>
    </>
  )
);
