import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditMedicine() {
  const { id } = useParams();
  const [medicine, setMedicine] = useState({
    id: "",
    name: "",
    company: "",
    price: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedMedicines = JSON.parse(localStorage.getItem("medicines")) || [];
    const currentMedicine = storedMedicines.find((med) => med.id === parseInt(id));
    if (currentMedicine) {
      setMedicine(currentMedicine);
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMedicine({ ...medicine, [name]: value });
  };

  const handleUpdateMedicine = (e) => {
    e.preventDefault();
    const storedMedicines = JSON.parse(localStorage.getItem("medicines")) || [];
    const updatedMedicines = storedMedicines.map((med) =>
      med.id === medicine.id ? medicine : med
    );
    localStorage.setItem("medicines", JSON.stringify(updatedMedicines));
    navigate("/medicines");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Edit Medicine</h2>
      <form onSubmit={handleUpdateMedicine}>
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
          Update Medicine
        </button>
      </form>
    </div>
  );
}

export default EditMedicine;
