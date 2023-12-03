import { useContext, useEffect, useState } from "react"
import PostAPI from "../../API/postAPI";
import { AuthContext } from "../../context/auth";

const Profile = () => {
    const [user, setUser] = useState({});
    const {user: userFromContext} = useContext(AuthContext);
    const userID = userFromContext?._id ?? sessionStorage.getItem("userID");

    useEffect(() => {
        const fetchUser = async (id) => {
            try {
                const res = await PostAPI.getUser(id);
                setUser(res.data);
                console.log(res.data);
            } catch(err) {
                console.log(err);
            }
        };

        fetchUser(userID);
    }, []);


    return (
        <>
            <h1>User Profile</h1>
            <div>
                <div>First Name: {user.firstName}</div>
                <div>Last Name: {user.lastName}</div>
                <div>Email: {user.email}</div>
            </div>
        </>
    )
};

export default Profile;