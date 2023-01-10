import React from "react";
import { useState, useEffect } from "react";

const initialData = {
  username: "",
  email: "",
  password: ""
};
export default function SignUp() {
  const [formValues, setFormValues] = useState(initialData);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]:value});
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  },[formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };


  return (
    <div>
    {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}
      <form onSubmit={handleSubmit} id="signUpForm">
        <h1 className="signUpHeading">Sign Up</h1>
        <label className="nameLabel">Username</label>
        <br />
        <input
          className="nameInp"
          type="text"
          name="username"
          placeholder="Enter your name"
          value={formValues.username}
          onChange={handleChange}
        />
        <p className="alertWarning">{ formErrors.username }</p>
        <br />
        <label className="emailLabel">Email</label>
        <br />
        <input
          className="emailInp"
          type="text"
          name="email"
          placeholder="Enter your email"
          value={formValues.email}
          onChange={handleChange}
          />
        <p className="alertWarning">{ formErrors.email }</p>
        <br />
        <label className="passwordLabel">Password</label>
        <br />
        <input
          className="passwordInp"
          type="password"
          name="password"
          placeholder="Create password"
          value={formValues.password}
          onChange={handleChange}
          />        
        <p className="alertWarning">{ formErrors.password }</p>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
