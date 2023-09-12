// RegisterForm.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_APP_API_URL;

export default function RegisterForm() {
    const [registeration, setRegistration] = useState({ 
        username: "",
        first_name: "", 
        last_name: "", 
        email: "",
        // password: "",
        phone: "", 
        address_1: "", 
        address_2: "", 
        city: "", 
        zipcode: "", 
        type: "buyer",
    }); 

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setRegistration({ ...registeration, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

    return (
        <div className="h-full w-full flex justify-center items-center">
            <h1 className="text-4xl">Register Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={registeration.username}
                    onChange={handleFormChange}
                    required 
                />

                <label htmlFor="first_name">First Name:</label>
                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={registeration.first_name}
                    onChange={handleFormChange}
                />

                <label htmlFor="last_name">Last Name:</label>
                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={registeration.last_name}
                    onChange={handleFormChange}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={registeration.email}
                    onChange={handleFormChange}
                    required
                />

                <label htmlFor="phone">Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                />

                <label htmlFor="address_1">Address Line 1:</label>
                <input
                    type="text"
                    id="address_1"
                    name="address_1"
                    value={registeration.address_1}
                    onChange={handleFormChange}
                />

                <label htmlFor="address_2">Address Line 2:</label>
                <input
                    type="text"
                    id="address_2"
                    name="address_2"
                    value={registeration.address_2}
                    onChange={handleFormChange}
                />

                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={registeration.city}
                    onChange={handleFormChange}
                />

                <label htmlFor="zipcode">Zipcode:</label>
                <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    value={registeration.zipcode}
                    onChange={handleFormChange}
                />

                <label htmlFor="type">User Type:</label>
                <input
                    id="buyer"
                    name="buyer"
                    value={registeration.type}
                    onChange={handleFormChange}
                />
                    <input type="submit" value="Register" />
                </form>
        </div>
    );
}
}
