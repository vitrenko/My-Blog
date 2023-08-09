import { useContext } from "react";
import axios from "axios";

import { useFormik } from 'formik';
import * as yup from "yup";

import { AuthContext } from "../../context/auth";
import { Button, TextField } from "@mui/material";

function Login() {
	const { login } = useContext(AuthContext);
	const BASE_URL = "http://localhost:5000/user/login";

	const validSchema = yup.object({
        email: yup
            .string("Enter your email")
            .email('Please enter a valid email')
            .required("Email is required"),
		password: yup
            .string()
            .min(8, 'Password should be at least 8 characters long')
            .required("Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: "", 
            password: "",
        },
        validationSchema: validSchema,
        onSubmit: async (values, { resetForm }) => {
			try {
				
				const response = await axios.post(BASE_URL, values);
				const result = response.data;
				result && login(result);
									
			} catch (error) {
				console.error("Error:", error);
			}
            resetForm();
			
        },
    });

	return (
		<form style={{width: 600, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center"}} onSubmit={formik.handleSubmit}>
			<TextField
				style={{margin: "30px 20px 10px"}}
				fullWidth
				name="email"
				label="Enter your email"
				value={formik.values.email}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={formik.touched.email && Boolean(formik.errors.email)}
				helperText={formik.touched.email && formik.errors.email}
			/>
			<TextField
				style={{margin: "30px 20px 10px"}}
				fullWidth
				name="password"
				label="Enter your password"
				type="password"
				value={formik.values.password}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={formik.touched.password && Boolean(formik.errors.password)}
				helperText={formik.touched.password && formik.errors.password}
			/>
			<Button sx={{margin: "30px"}} variant="contained" type="submit">Log In</Button>
		</form>
	);
}

export default Login;
