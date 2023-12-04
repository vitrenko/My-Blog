import { useState } from "react";
import { Button, TableRow, TableCell } from '@mui/material';

function TableRowUserItem({
        _id, 
        firstName,
        lastName, 
        email,
        updateUser,
        deleteUser
    }) {
    
    const [editing, setEditing] = useState(false);


    const handleEditing = () => {
        setEditing(true);        
    };

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
        const userPayload = {_id, ...currentEditedUser};
        await updateUser(userPayload);
        setEditing(false);
    }

    const handleCancel = () => {
        setEditing(false);
    };

    const handleDelete =  () => {
        deleteUser(_id);
        
    }

    let viewMode = {};
    let editMode = {
        width: "100%",
        resize: "vertical",
    };

    if (editing) {
        viewMode.display = "none";
    } else {
        editMode.display = "none";
    }

    return (
        <TableRow>
            <TableCell sx={{width: "20%"}}>               
                <span style={viewMode}>{firstName}</span>
                <input 
                    type="text"
                    defaultValue={firstName}
                    name="firstName"
                    style={editMode}
                    onBlur={handleBlur}
                    onKeyDown={handleUpdatedDone}
                />
            </TableCell>
            <TableCell sx={{width: "20%"}}>               
                <span style={viewMode}>{lastName}</span>
                <input 
                    type="text"
                    defaultValue={lastName}
                    name="lastName"
                    style={editMode}
                    onBlur={handleBlur}
                    onKeyDown={handleUpdatedDone}
                />
            </TableCell>
            <TableCell>
                <span style={viewMode}>{email}</span>
                <textarea 
                    type="text"
                    defaultValue={email}
                    name="email"
                    style={editMode}
                    onBlur={handleBlur}
                    onKeyDown={handleUpdatedDone}
                />
            </TableCell>
            <TableCell sx={{width: "15%"}}>
                <Button variant="contained" style={viewMode} onClick={handleEditing}>Edit</Button>
                <Button variant="contained" style={editMode} onClick={handleSaving}>Save</Button>
                <Button variant="outlined" style={editMode} onClick={handleCancel}>Cancel</Button>
            </TableCell>
            <TableCell sx={{width: "15%"}}>
                <Button variant="contained" onClick={handleDelete}>Delete</Button>
            </TableCell>
        </TableRow>
    )
}

export default TableRowUserItem;