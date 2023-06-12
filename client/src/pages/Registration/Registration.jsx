import { useState, useContext } from "react";
import axios from "axios";

import { AuthContext } from "../../context/auth";

function Registration() {
	const { login } = useContext(AuthContext);
	const BASE_URL = "http://localhost:5000/user/registration";

	const [formData, setFormData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
		firstName: "",
		lastName: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(BASE_URL, formData);
			const result = response.data;
			result && login(result);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="email"
				placeholder="Email"
				value={formData.email}
				onChange={handleChange}
			/>
			<input
				type="password"
				name="password"
				placeholder="Password"
				value={formData.password}
				onChange={handleChange}
			/>
			<input
				type="password"
				name="confirmPassword"
				placeholder="Confirm Password"
				value={formData.confirmPassword}
				onChange={handleChange}
			/>
			<input
				type="text"
				name="firstName"
				placeholder="First Name"
				value={formData.firstName}
				onChange={handleChange}
			/>
			<input
				type="text"
				name="lastName"
				placeholder="Last Name"
				value={formData.lastName}
				onChange={handleChange}
			/>
			<button type="submit">Submit</button>
		</form>
	);
}

export default Registration;
