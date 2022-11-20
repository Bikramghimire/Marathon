import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import Layouts from "../component/layouts";
import Login from "../pages/auth/Login";
import Home from "../pages/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </>
  )
);
