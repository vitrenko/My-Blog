import { useState } from "react";
import style from "./ContactForm.module.scss";

const ContactForm = () => {
    const [contactData, setContactData] = useState({
        email: "",
        message: "",
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setContactData(prevValues => ({...prevValues, [name]: value }));
    };

    const handleSubmit = e => e.preventDefault();

    return (
        <form onSubmit={handleSubmit} className={style.formContainer}>
            <label>
                Your email:
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter your e-mail"
                    value={contactData.email}
                    onChange={handleChange}
            />
            </label>
            <label>
                Please type your message for us:
                <textarea 
                    name="message" 
                    rows="10" 
                    placeholder="Leave your ideas here" 
                    value={contactData.message}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;