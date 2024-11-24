import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMedicine() {
  const [medicine, setMedicine] = useState({
    id: "",
    name: "",
    company: "",
    price: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMedicine({ ...medicine, [name]: value });
  };

  const handleAddMedicine = (e) => {
    e.preventDefault();
    const storedMedicines = JSON.parse(localStorage.getItem("medicines")) || [];
    const newMedicine = { ...medicine, id: Date.now() };
    storedMedicines.push(newMedicine);
    localStorage.setItem("medicines", JSON.stringify(storedMedicines));
    navigate("/medicines");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Add Medicine</h2>
      <form onSubmit={handleAddMedicine}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={medicine.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="company" className="form-label">
            Company
          </label>
          <input
            type="text"
            className="form-control"
            id="company"
            name="company"
            value={medicine.company}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={medicine.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Medicine
        </button>
      </form>
    </div>
  );
}

export default AddMedicine;
