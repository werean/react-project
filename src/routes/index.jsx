import { Routes, Route } from "react-router-dom";

//import { toast } from "react-toastify";
import Page404 from "../pages/Page404";
import Login from "../pages/Login/Index";
import Register from "../pages/Register/Index";
import Photos from "../pages/Photos/Index";
import Students from "../pages/Students/Index";
import Student from "../pages/Student/Index";
import MyRoute from "./MyRoute";

export default function Routers() {
  return (
    <Routes>
      <Route path="/login" element={<MyRoute element={<Login />} isClosed={false} />} />
      <Route path="/register" element={<MyRoute element={<Register />} isClosed={false} />} />
      <Route path="/" element={<MyRoute element={<Students />} isClosed={false} />} />
      <Route path="/student/:id/edit" element={<MyRoute element={<Student />} isClosed />} />
      <Route path="/student/" element={<MyRoute element={<Student />} isClosed />} />
      <Route path="/photos/:id" element={<MyRoute element={<Photos />} />} isClosed />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
