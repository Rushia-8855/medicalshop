import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../Login/LoginPage";
import MedicineList from "../MedicalShop/MedicineList";
import AddMedicine from "../MedicalShop/AddMedicine";
import EditMedicine from "../MedicalShop/EditMedicine";

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<LoginPage />} />
        <Route path="/medicines" element={<MedicineList />} />
        <Route path="/addMedicine" element={<AddMedicine />} />
        <Route path="/editMedicine/:id" element={<EditMedicine />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
