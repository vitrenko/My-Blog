import { useContext } from "react";
import axios from "axios";

import { AuthContext } from "../../context/auth";

import { useFormik } from 'formik';
import * as yup from "yup";

import { Box, Button, TextField } from "@mui/material";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function Registration() {
	const { login } = useContext(AuthContext);
	const BASE_URL = "http://localhost:5000/user/registration";

	const validSchema = yup.object({
        email: yup
            .string("Enter your email")
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email')
            .required("Email is required"),
        password: yup
            .string()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/, 'Password should minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character')
            .required("Password is required"),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Passwords must match'),
		firstName: yup
            .string()
            .min(2, 'First name should be at least 2 characters long')
            .required("First name is required"),
		lastName: yup
            .string()
            .min(2, 'Last name should be at least 5 characters long')
            .required("Last name is required"),
    });

	const notify = () => toast.success("Registred! Welcome!", {
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});

    const formik = useFormik({
        initialValues: {
            email: "", 
            password: "",
			confirmPassword: "",
			firstName: "",
			lastName: "",
        },
        validationSchema: validSchema,
        onSubmit: async (values, { resetForm }) => {
			try {
				setTimeout(()=> result && login(result), 3000)
				const response = await axios.post(BASE_URL, values);
				const result = response.data;
				notify();
									
			} catch (error) {
				console.error("Error:", error);
			}
            resetForm();
			
        },
    });


	return (
		<>
			<Box sx={{maxWidth: 600, margin: "0 auto"}}>
				<form style={{display: "flex", flexDirection: "column", alignItems: "center"}} onSubmit={formik.handleSubmit}>
					<TextField
						style={{margin: "10px"}}
						fullWidth
						name="email"
						label="Your email"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.email && Boolean(formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
					/>
					<TextField
						style={{margin: "10px"}}
						fullWidth
						type="password"
						name="password"
						label="Your password"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.password && Boolean(formik.errors.password)}
						helperText={formik.touched.password && formik.errors.password}
					/>
					<TextField
						style={{margin: "10px"}}
						fullWidth
						type="password"
						name="confirmPassword"
						label="Confirm your password"
						value={formik.values.confirmPassword}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
						helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
					/>
					<TextField
						style={{margin: "10px"}}
						fullWidth
						name="firstName"
						label="First name"
						value={formik.values.firstName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.firstName && Boolean(formik.errors.firstName)}
						helperText={formik.touched.firstName && formik.errors.firstName}
					/>
					<TextField
						style={{margin: "10px"}}
						fullWidth
						name="lastName"
						label="Last name"
						value={formik.values.lastName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.lastName && Boolean(formik.errors.lastName)}
						helperText={formik.touched.lastName && formik.errors.lastName}
					/>
					<Button variant="contained" type="submit">Submit</Button>
				</form>
			</Box>
			
		</>
		
	);
}

export default Registration;
