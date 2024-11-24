import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const users = [
      {
        email: "xyz@gmail.com",
        password: "xyz123",
        roleName: "Admin",
        roleId: 1,
      },
      {
        email: "abc@gmail.com",
        password: "abc123",
        roleName: "MedicalOwner",
        roleId: 2,
      },
      {
        email: "user@gmail.com",
        password: "user123",
        roleName: "User",
        roleId: 3,
      },
    ];
    localStorage.setItem("users", JSON.stringify(users));
  }, []);

  const navigate = useNavigate();
  const handleLogin = (e) => {
    if ((email != "", email != null && password != "", password != null)) {
      e.preventDefault();
      const localUsers = JSON.parse(localStorage.getItem("users"));
      const result = localUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (result) {
        console.log(
          `Logged in as ${result.roleName} with Role ID: ${result.roleId}`
        );
        const medicines = [
          { id: 1, name: "Paracetamol", company: "XYZ Pharma", price: 10 },
          { id: 2, name: "Ibuprofen", company: "ABC Pharma", price: 20 },
          { id: 3, name: "Amoxicillin", company: "MedLife", price: 30 },
          { id: 4, name: "Aspirin", company: "PharmaCorp", price: 15 },
        ];
        localStorage.setItem("currentUser", JSON.stringify(result));
        localStorage.setItem("medicines", JSON.stringify(medicines));
        navigate("/medicines");
      } else {
        console.log("Invalid email or password");
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center">Login</h4>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
