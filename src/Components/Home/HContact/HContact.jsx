import React, { useState } from "react";
import "./HContact.scss";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

export default function HContact() {
  // State for form inputs and errors
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    companyName: "",
    product: "",
    message: "",
  });

  const [errors, setErrors] = useState({}); // State for validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on change
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    return regex.test(email);
  };

  const isValidPhone = (phone) => {
    const regex = /^\d+$/; // Only digits
    return regex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    });

    // Email validation
    if (formData.email && !isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (formData.phone && !isValidPhone(formData.phone)) {
      newErrors.phone = "Phone number must be numeric";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set errors if any
      return;
    }

    // Add form submission logic here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      companyName: "",
      product: "",
      message: "",
    });
    setErrors({}); // Reset errors after submission
  };

  return (
    <div className="HContact">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="hc-left">
              <div className="hl-cont" align="center">
                <h3>Free Quotes</h3>
                <p>
                  After we get some information from you, we’ll set up a time to
                  discuss your requirements in further detail.
                </p>
              </div>

              <div className="hl-frm">
                <form
                  className="row g-3 needs-validation"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  {[
                    "firstName",
                    "lastName",
                    "phone",
                    "email",
                    "companyName",
                  ].map((field) => (
                    <div className="col-md-6 position-relative" key={field}>
                      <input
                        type={
                          field === "email"
                            ? "email"
                            : field === "phone"
                            ? "tel"
                            : "text"
                        }
                        className={`form-control ${
                          errors[field] ? "is-invalid" : ""
                        }`}
                        id={field}
                        name={field}
                        placeholder={
                          field === "companyName"
                            ? "Company Name"
                            : field === "firstName"
                            ? "First Name"
                            : field === "lastName"
                            ? "Last Name"
                            : field.charAt(0).toUpperCase() + field.slice(1)
                        }
                        value={formData[field]}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">
                        {errors[field] ||
                          `${
                            field.charAt(0).toUpperCase() + field.slice(1)
                          } is required`}
                      </div>
                    </div>
                  ))}

                  <div className="col-md-6 position-relative">
                    <select
                      className={`form-select custom-select ${
                        errors.product ? "is-invalid" : ""
                      }`}
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Choose a product...
                      </option>
                      <option value="product1">Ply Laminated Foil</option>
                      <option value="product2">Insulation Industries</option>
                      <option value="product3">Metalized Film Laminated Material</option>
                      <option value="product4">Barrier Film Insulation Material</option>
                      <option value="product5">Food & Baverages Industries</option>
                      <option value="product6">PE Coated Paper</option>
                    </select>
                    <div className="invalid-feedback">
                      {errors.product || "Please select a valid product."}
                    </div>
                  </div>

                  <div className="col-12">
                    <textarea
                      className={`form-control ${
                        errors.message ? "is-invalid" : ""
                      }`}
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      required
                    />
                    <div className="invalid-feedback">
                      {errors.message || "Please provide a message."}
                    </div>
                  </div>

                  <div className="col-12" align="Center">
                    <button className="fbtn" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="hc-right">
              <div className="hc-up" align="center">
                <h2>How To Contact Us</h2>
                <p>
                  If you’ve got questions or ideas you would like to share, send
                  a message. For anything more specific, please use one of our
                  addresses.
                </p>
              </div>

              <div className="hc-dn">
                <div className="down-cont d-flex gap-4">
                  <div>
                    <div className="hc-logo-o">
                      <div className="hc-logo-i">
                        <IoLocationOutline className="icon-style" />
                      </div>
                    </div>
                  </div>
                  <div className="cont">
                    <h3>Our Location</h3>
                    <p>
                      Plot No 69 Vivekanand Industrial Park, Nr. Shivbhumi Ind.
                      Park, Kubadthal, Ahmedabad Indore Highway, Ahmedabad -
                      Gujarat - India - 382430
                    </p>
                    <span>
                      <b>Find Us On Map</b>
                    </span>
                  </div>
                </div>

                <hr className="c-hr" align="center" />

                <div className="down-cont d-flex gap-4">
                  <div>
                    <div className="hc-logo-o">
                      <div className="hc-logo-i">
                        <FaPhone className="icon-style p-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="cont">
                    <h3>Direct Line Numbers</h3>
                    <p>Marketing: +91 90234 07993</p>
                  </div>
                </div>

                <hr className="c-hr" align="center" />

                <div className="down-cont d-flex gap-4">
                  <div>
                    <div className="hc-logo-o">
                      <div className="hc-logo-i">
                        <TfiEmail className="icon-style e-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="cont">
                    <h3>Our Email</h3>
                    <p>foilamglobal@gmail.com</p>
                  </div>
                </div>

                <hr className="c-hr" align="center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
