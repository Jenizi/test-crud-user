import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Toast from "../components/Toast/Toast";
// import { Registration } from "../pages";

const Router: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/registration" element={<Registration />} />*/}
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toast />
    </>
  );
};

export default Router;
