import React, { useState } from "react";


const Adhikari = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;

    const value = event.target.value;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    
      <div className=" flex justify-center align-middle bg-black">
        <div className="bg-red-200  gap-5 px-8 py-10">
          <h2 className="text-2xl mt-14 mb-8">Register</h2>
          <div className="card-body py-md-4">
            <form>
              <div className="px-2 py-2">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="username"
                  placeholder="Name"
                  autoComplete="off"
                  value={formData.username}
                  onChange={handleInput}
                />
              </div>
              <div className="px-2 py-2">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInput}
                />
              </div>

              <div className="px-2 py-2">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                  value={formData.password}
                  onChange={handleInput}
                />
              </div>
              <div className="px-2 py-2">
                <input
                  type="password"
                  className="form-control"
                  id="confirm-password"
                  name="confirm_password"
                  placeholder="confirm-password"
                  autoComplete="off"
                  value={formData.confirm_password}
                  onChange={handleInput}
                />
              </div>
              <div className="d-flex flex-row align-items-center justify-items-center">
                <button className="bg-blue-700 mt-4 rounded-md px-2 py-2">Create Account</button>
              </div>
            </form>
            
          </div>
          <div>
        </div>
        <p className="mt-10">{`My name is ${formData.username} and email is ${formData.email}`}</p>
            </div>
      </div>

  );
};



export default Adhikari;