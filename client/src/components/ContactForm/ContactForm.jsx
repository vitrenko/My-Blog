import style from "./ContactForm.module.scss";

import { useFormik } from 'formik';
import * as yup from "yup";

import { TextField } from '@material-ui/core';
import { Button } from "@mui/material";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ContactForm = () => {
    const notify = () => toast.info('Thank you! We will contact you soon :)', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const validSchema = yup.object({
        email: yup
            .string("Enter your email")
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email')
            .required("Email is required"),
        message: yup
            .string()
            .min(5, 'Message should be at least 5 characters long')
            .required("Message is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: "", 
            message: "",
        },
        validationSchema: validSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
            notify();
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