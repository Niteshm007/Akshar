import React, { useState } from "react";
import "./CForm.scss"; // Import the relevant CSS for styling
import { MdLocationPin } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";

export default function CForm() {
  // Form state to handle input values and error validation
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    companyName: "",
    product: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes and reset error state when input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation for required fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted successfully:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      companyName: "",
      product: "",
      address: "",
    });
    setErrors({});
  };

  return (
    <div className="CForm m-t">
      <div className="container">
        <div className="row justify-content-center">
          {/* Left column for contact information */}
          <div className="col-md-6">
            <div className="cf-l m-t">
              <div className="cf-up">
                <h2 align="center">Get In Touch</h2>
                <p>
                  If you’ve got questions or ideas you would like to share, send
                  a message. For anything more specific, please use one of the
                  addresses listed below.
                </p>
              </div>

              <div className="cf-dn">
                <div className="row">
                  <div className="col-md-6 mt-4">
                    <div className="cfd-cont">
                      <h3>Factory Address</h3>
                      <p>
                        Plot No 22,23 Narnarayan Industrial Estate, Opp.
                        Bentlay’s Company, Vill. Kubadthal Ahmedabad Indore
                        Highway, Daskroi, Ahmedabad – 382430, Gujarat, INDIA
                      </p>
                      <a href="https://maps.app.goo.gl/ikYR29rPe6pZpNbMA">
                        <MdLocationPin className="icn" /> Find Us On Map
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
                    <div className="cfd-cont">
                      <h3>Admin</h3>
                      <p>
                        <FaPhoneFlip /> +91 90992 00223
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mt-4">
                    <div className="cfd-cont">
                      <h3>Marketing</h3>
                      <p>
                        <FaPhoneFlip /> +91 90992 00227
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
                    <div className="cfd-cont">
                      <h3>Export</h3>
                      <p>
                        <FaPhoneFlip /> +91 90992 00228
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mt-4">
                    <div className="cfd-cont">
                      <h3>Account</h3>
                      <p>
                        <FaPhoneFlip /> +91 90992 00337
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
                    <div className="cfd-cont">
                      <h3>Purchase</h3>
                      <p>
                        <FaPhoneFlip /> +91 90992 00338
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="cfd-cont mt-4">
                    <h3>Our Email</h3>
                    <p>foilamglobal@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column for contact form */}
          <div className="col-md-6 m-t">
            <div className="cf-frm-cont" align="center">
              <h3>Free Quotes</h3>
              <p>
                After we get some information from you, we’ll set up a time to
                discuss your requirements in further detail.
              </p>
            </div>
            <div className="cf-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {/* First and Last Name */}
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className={`form-control ${
                        errors.firstName ? "is-invalid" : ""
                      }`}
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors.firstName}</div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className={`form-control ${
                        errors.lastName ? "is-invalid" : ""
                      }`}
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors.lastName}</div>
                  </div>
                </div>

                <div className="row">
                  {/* Phone and Email */}
                  <div className="col-md-6 mb-3">
                    <input
                      type="tel"
                      className={`form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors.phone}</div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors.email}</div>
                  </div>
                </div>

                <div className="row">
                  {/* Company Name and Product */}
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className={`form-control ${
                        errors.companyName ? "is-invalid" : ""
                      }`}
                      name="companyName"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors.companyName}</div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <select
                      className={`form-control ${
                        errors.product ? "is-invalid" : ""
                      }`}
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select Product
                      </option>
                      <option value="product1">Product 1</option>
                      <option value="product2">Product 2</option>
                      <option value="product3">Product 3</option>
                    </select>
                    <div className="invalid-feedback">{errors.product}</div>
                  </div>
                </div>

                {/* Address */}
                <div className="mb-3">
                  <textarea
                    className={`form-control ${
                      errors.address ? "is-invalid" : ""
                    }`}
                    name="address"
                    placeholder="Address"
                    rows="8"
                    value={formData.address}
                    onChange={handleChange}
                  ></textarea>
                  <div className="invalid-feedback">{errors.address}</div>
                </div>

                {/* Submit Button */}
                <div className="col-12" align="Center">
                    <button className="fbtn" type="submit">
                      Submit
                    </button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
