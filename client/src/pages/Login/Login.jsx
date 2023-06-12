import { useContext, useState } from "react";
import axios from "axios";

import { AuthContext } from "../../context/auth";

function Login() {
	const { login } = useContext(AuthContext);
	const BASE_URL = "http://localhost:5000/user/login";

	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = userData;
		try {
			const response = await axios.post(BASE_URL, {
				email,
				password,
			});
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
				value={userData.email}
				onChange={handleChange}
			/>
			<input
				type="password"
				name="password"
				placeholder="Password"
				value={userData.password}
				onChange={handleChange}
			/>
			<button type="submit">Submit</button>
		</form>
	);
}

export default Login;
