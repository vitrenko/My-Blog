import { useContext, useEffect, useState } from "react"
import UserAPI from "../../API/userAPI";
import { AuthContext } from "../../context/auth";
import { Button } from '@mui/material';

const Profile = () => {
    const [user, setUser] = useState({});
    const {user: userFromContext} = useContext(AuthContext);
    console.log(userFromContext);
    const userID = userFromContext?._id ?? sessionStorage.getItem("userID");

    const [editing, setEditing] = useState(false);
    const handleEditing = () => setEditing(true);        

    const handleUpdatedDone = (e) => {
        if (e.key === 'Enter') {
            e.target.blur();
        }
    };

    const currentEditedUser = {};
    const handleBlur = (e) => {
        const { target: {name, value}} = e;        
        currentEditedUser[name] = value;
    };

    const handleSaving = async () => {
        console.log(currentEditedUser);
        await UserAPI.updateUser(user, currentEditedUser);
        setEditing(false);
    }

    const handleCancel = () => setEditing(false);

    const handleDelete =  () => {
        UserAPI.deleteUser(userID);
    }

    let viewMode = {};
    let editMode = {};

    if (editing) {
        viewMode.display = "none";
    } else {
        editMode.display = "none";
    }

    useEffect(() => {
        const fetchUser = async (id) => {
            try {
                const res = await UserAPI.getUser(id);
                setUser(res.data);
            } catch(err) {
                console.log(err);
            }
        };

        fetchUser(userID);
    }, []);


    return (
        <>
            <h1>User Profile</h1>
            <div style={{display: "flex", flexDirection: "column"}}>
                <span style={viewMode}>First Name: {user.firstName}</span>
                <input 
                    type="text"
                    defaultValue={user.firstName}
                    name="firstName"
                    style={editMode}
                    onBlur={handleBlur}
                    onKeyDown={handleUpdatedDone}
                />
                <span style={viewMode}>Last Name: {user.lastName}</span>
                <input 
                    type="text"
                    defaultValue={user.lastName}
                    name="lastName"
                    style={editMode}
                    onBlur={handleBlur}
                    onKeyDown={handleUpdatedDone}
                />
                <span style={viewMode}>Email: {user.email}</span>
                <input 
                    type="text"
                    defaultValue={user.email}
                    name="email"
                    style={editMode}
                    onBlur={handleBlur}
                    onKeyDown={handleUpdatedDone}
                />
            </div>
            <Button variant="contained" style={viewMode} onClick={handleEditing}>Edit</Button>
            <Button variant="contained" style={editMode} onClick={handleSaving}>Save</Button>
            <Button variant="outlined" style={editMode} onClick={handleCancel}>Cancel</Button>
            <Button variant="contained" color="error" onClick={handleDelete}>Delete account</Button>
        </>
    )
};

export default Profile;