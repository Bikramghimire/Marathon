import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import Layouts from "../component/layouts";

import Register from "../pages/auth/Register";
import Card from "../pages/Card";
import AutoSearch from "../pages/debounce";
import Dynamic from "../pages/dynamicFrom";
import Form from "../pages/form";

import Home from "../pages/Home";
import NiceForm from "../pages/nicePage";
import { Reselect } from "../pages/reselect";
import Cloud from "../pages/useRef";
import InputFocus from "../pages/useRef";
import Reference from "../pages/useRef/unit1";

import Enchance from "../pages/enchance";
import Moment from "../pages/moment";
import Flex from "../pages/flex";
import Reusable from "../pages/reusable";
import Tabing from "../pages/tabs";
import Food from "../pages/food";
import Signup from "../pages/food/Auth/SignUp";
import Login from "../pages/food/Auth/Login";
import Logout from "../pages/food/Auth/Logout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layouts />}>
        <Route path="/" element={<Food />} />

        {/* <Route path="/register" element={<Register />} />
        <Route path="/formik" element={<Form />} />
        <Route path="/niceform" element={<NiceForm />} />
        <Route path="/card" element={<Card />} />
        <Route path="/dynamicform" element={<Dynamic />} />
        <Route path="/debounce" element={<AutoSearch />} />
        <Route path="/reactselect" element={<Reselect />} />
        <Route path="/ref" element={<Cloud />} />
        <Route path="/enhance" element={<Enchance />} />
        <Route path="/moment" element={<Moment />} />
        <Route path="/flex" element={<Flex></Flex>} />
        <Route path="/reusable" element={<Reusable />} />
        <Route path="/tab" element={<Tabing />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </>
  )
);
