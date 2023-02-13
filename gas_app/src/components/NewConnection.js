import React, { useState } from "react";
import "../css/newConnection.css";

const NewConnection = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    maritalStatus: "",
    dateOfBirth: "",
    nationality: "",
    fatherName: "",
    motherName: "",
    address1: "",
    address2: "",
    landmark: "",
    city: "",
    pincode: "",
    state: "",
    district: "",
    emailId: "",
    phoneNumber: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to submit form data here
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "120px" }}>
      <h3>New Connection Form</h3>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="maritalStatus">Marital Status:</label>
        <select id="maritalStatus" name="maritalStatus" onChange={handleChange}>
          <option value="">Select Marital Status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
        </select>
      </div>
      <div>
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="nationality">Nationality:</label>
        <select id="nationality" name="nationality" onChange={handleChange}>
          <option value="">Select Nationality</option>
          <option value="indian">Indian</option>
          <option value="american">American</option>
          <option value="british">British</option>
        </select>
      </div>
      <div>
        <label htmlFor="fatherName">Father's Name:</label>
        <input
          type="text"
          id="fatherName"
          name="fatherName"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="motherName">Mother's Name:</label>
        <input
          type="text"
          id="motherName"
          name="motherName"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="address1">Address 1:</label>
        <input
          type="text"
          id="address1"
          name="address1"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="address2">Address 2:</label>
        <input
          type="text"
          id="address2"
          name="address2"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="landmark">Landmark:</label>
        <input
          type="text"
          id="landmark"
          name="landmark"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="pincode">Pincode:</label>
        <input
          type="text"
          id="pincode"
          name="pincode"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="state">State:</label>
        <input type="text" id="state" name="state" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="district">District:</label>
        <input
          type="text"
          id="district"
          name="district"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="emailId">Email Id:</label>
        <input
          type="email"
          id="emailId"
          className="emailInput1"
          name="emailId"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewConnection;
