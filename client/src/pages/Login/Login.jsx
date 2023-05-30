import { useContext } from "react";

import { AuthContext } from "../../context/auth";

function Login() {
    const context = useContext(AuthContext);
    const handleSubmit = async e => {
        e.preventDefault();
        const result = await (
            await fetch("http://localhost:5000/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: "test@test1.com",
                    password: "1111"
                }),
            })
        ).json();

        if (result) {
            console.log(result);
            context.login(result);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login;