import React, { useState } from "react";

import { signUp } from "../utilities/users-services"


const SignUpForm = ({ setUser }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");


  const disable = password !== confirm;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmChange = (e) => {
    setConfirm(e.target.value);
  };
  const handleErrorChange = (e) => {
    setError(e.target.value);
  };


  const handleFormSubmission = async (e) => {
    e.preventDefault();

  
    const state = { name, email, password, confirm, error };
    try {
     
      const formData = { ...state };

      delete formData["confirm"];
      delete formData["error"];

   
      const user = await signUp(formData);

      
      console.log(user);
      setUser(user.data);
    } catch (error) {
      setError("Sign Up Failed - Try Again");
    }
  };

  return (
    <div>
      <div className="form-container">
        <form
          autoComplete="off"
          onSubmit={(e) => {
            return handleFormSubmission(e);
          }}
        >
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              return handleNameChange(e);
            }}
            value={name}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              return handleEmailChange(e);
            }}
            value={email}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              return handlePasswordChange(e);
            }}
            value={password}
            required
          />
          <label>Confirm</label>
          <input
            type="password"
            name="confirm"
            onChange={(e) => {
              return handleConfirmChange(e);
            }}
            value={confirm}
            required
          />
          <button type="submit" disabled={disable}>
            SIGN UP
          </button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
};


export default SignUpForm;