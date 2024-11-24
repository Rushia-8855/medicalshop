import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function MedicineList() {
  const [medicines, setMedicines] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get currentUser from localStorage
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(storedUser);

    // Get the medicines from localStorage
    const storedMedicines = JSON.parse(localStorage.getItem("medicines")) || [];
    setMedicines(storedMedicines);
  }, []);

  const deleteMedicine = (id) => {
    const updatedMedicines = medicines.filter((medicine) => medicine.id !== id);
    localStorage.setItem("medicines", JSON.stringify(updatedMedicines));
    setMedicines(updatedMedicines);
  };

  const isAdmin = currentUser?.roleName === "Admin";
  const isMedicalOwner = currentUser?.roleName === "MedicalOwner";
  const isUser = currentUser?.roleName === "user";
  console.log(isAdmin, isMedicalOwner, isUser);
  return (
    <div className="container mt-5  ">
      <h3 className="text-center">
        {currentUser ? currentUser.roleName : "Guest"}
      </h3>
      <h2 className="text-center">Medicine List</h2>

      {(isAdmin || isMedicalOwner) && (
        <Link to="/addMedicine" className="btn btn-success">
          Add Medicine
        </Link>
      )}

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <tr key={medicine.id}>
              <td>{medicine.id}</td>
              <td>{medicine.name}</td>
              <td>{medicine.company}</td>
              <td>{medicine.price}</td>

              <td>
                {(isAdmin || isMedicalOwner) && (
                  <Link
                    to={`/editMedicine/${medicine.id}`}
                    className="btn btn-warning me-2"
                  >
                    Edit
                  </Link>
                )}
                {(isAdmin || isUser) && (
                  <button
                    disabled={isUser}
                    className="btn btn-danger"
                    onClick={() => deleteMedicine(medicine.id)}
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicineList;
