import { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/auth";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Box, Button, TextField } from "@mui/material";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function Registration() {
	const { login } = useContext(AuthContext);
	const BASE_URL = "http://localhost:5000/user/registration";
	const { register, handleSubmit, formState: { errors } } = useForm();

	// const validSchema = yup.object({
    //     email: yup
    //         .string("Enter your email")
    //         .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email')
    //         .required("Email is required"),
    //     password: yup
    //         .string()
    //         .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/, 'Password should minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character')
    //         .required("Password is required"),
	// 	confirmPassword: yup
	// 		.string()
	// 		.oneOf([yup.ref('password'), null], 'Passwords must match'),
	// 	firstName: yup
    //         .string()
    //         .min(2, 'First name should be at least 2 characters long')
    //         .required("First name is required"),
	// 	lastName: yup
    //         .string()
    //         .min(2, 'Last name should be at least 5 characters long')
    //         .required("Last name is required"),
    // });

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

    const onSubmit = async (data) => {
		console.log(data);

		try {
			let result = {};
			setTimeout(() => result && login(result), 3000)
			const response = await axios.post(BASE_URL, data);
			result = response.data;
			notify();
								
		} catch (error) {
			console.error("Error:", error);
		}		
    };


	return (
		<>
			<Box sx={{maxWidth: 600, margin: "0 auto"}}>
				<form style={{display: "flex", flexDirection: "column", alignItems: "center"}} onSubmit={handleSubmit(onSubmit)}>
					<TextField
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
								message: "Please enter a valid email"
							}	
						})}
						style={{margin: "10px"}}
						fullWidth
						label="Your email"
            required
					/>
					<TextField
						{...register("password", {
							required: "Password is required",
							pattern: {
								value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
								message: "Password should minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
							}
							
						})}
						style={{margin: "10px"}}
						fullWidth
            type="password"
						label="Your password"
						required
						error={errors?.password ? !!errors?.password : false}
            // helperText="Password should minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
						// errors={errors.password && errors.password.message} 
					/>
          <ErrorMessage errors={errors} name="password" />
					{/* <span className="Mui-error"> {errors.password && errors.password.message}</span> */}
					<TextField
						{...register("confirmPassword", {
							required: true,
              validate: (value) => {
                if (watch('password') != value) {
                  return "Your passwords do not match";
                }
              },
							
						})}
						style={{margin: "10px"}}
						fullWidth
						type="password"
						name="confirmPassword"
						label="Confirm your password"

					/>
					<TextField
						{...register("firstName", {
							required: "firstName is required",
							// pattern: {
							// 	value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
							// 	message: "Please enter a valid email"
							// }
							
						})}
						style={{margin: "10px"}}
						fullWidth
						name="firstName"
						label="First name"

					/>
					<TextField
						{...register("lastName", {
							required: "lastName is required",
							// pattern: {
							// 	value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
							// 	message: "Please enter a valid email"
							// }
							
						})}
						style={{margin: "10px"}}
						fullWidth
						name="lastName"
						label="Last name"

					/>
					<Button variant="contained" type="submit">Submit</Button>
				</form>
			</Box>
			
		</>
		
	);
}

export default Registration;
