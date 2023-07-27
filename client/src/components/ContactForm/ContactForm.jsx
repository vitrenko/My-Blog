import { useState } from "react";
import style from "./ContactForm.module.scss";

import { useFormik } from 'formik';
import * as yup from "yup";

import { TextField } from '@material-ui/core';
import { Button } from "@mui/material";


const ContactForm = () => {
    const [contactData, setContactData] = useState({
        email: "",
        message: "",
    });

    const validSchema = yup.object({
        email: yup
            .string("Enter your email")
            .email('Please enter a valid email')
            .required("Email is required"),
        message: yup
            .string()
            .min(5, 'Message should be at least 5 characters long')
            .required("Message is required"),
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setContactData(prevValues => ({...prevValues, [name]: value }));
    };

    const formik = useFormik({
        initialValues: {
            email: "", 
            message: "",
        },
        validationSchema: validSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
        },
    });

    return (     
        <form style={{width: 600, margin: "0 auto"}} onSubmit={formik.handleSubmit} className={style.formContainer}>
            <TextField
                style={{margin: "30px 20px 10px"}}
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
                style={{margin: "10px 20px 20px"}}
                fullWidth
                name="message"
                label="Leave your ideas here" 
                value={formik.values.message}
                multiline
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
            />
            <Button sx={{margin: "30px"}} variant="contained" type="submit">Send</Button>
        </form>      
    );
};

export default ContactForm;