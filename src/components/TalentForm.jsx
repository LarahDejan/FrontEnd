import "./TalentForm.css";
import React, { useState } from "react";
import bgImage from "../assets/background.jpg";

const TalentForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        talent: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

   const containerStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.talent) {
            alert("Please select a talent before submitting.");
            return;
        }

        console.log("Form Data submitted:", formData);

        // Reset form after submission
        setFormData({
            name: "",
            age: "",
            email: "",
            talent: "",
        });
        
        alert("Thank you for registering!");
    };

    return (
     <div style={containerStyle}>
            <div className="form-card">
                <h1>Talent Form for PUPBC</h1>
                <p>Fill out the details below if you are interested</p>
                
                <form onSubmit={handleSubmit}>
                    {/* Name Input Field */}
                    <div className="form-field">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="e.g. Juan Dela Cruz"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Age Input Field */}
                    <div className="form-field">
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            placeholder="Enter your age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email Input Field */}
                    <div className="form-field">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="username@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Talent Selection Field */}
                    <div className="form-field">
                        <label htmlFor="talent">Primary Talent</label>
                        <select
                            id="talent"
                            name="talent"
                            value={formData.talent}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>
                                Select your talent
                            </option>
                            <option value="singing">Singing</option>
                            <option value="dancing">Dancing</option>
                            <option value="poetry">Poetry</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="submit-btn">
                        Submit Application
              </button>
                </form>
            </div>
        </div>
    );
};

export default TalentForm;