import { useState } from "react";
import axios from "axios";

import { Button, TableRow, TableCell } from '@mui/material';

function TableRowPostItem({
        thumbnail, 
        title, 
        body,
        tag,
        categories,
        _id,
        fetchPosts
    }) {
    
    const MAIN_URL = import.meta.env.VITE_APP_API_URL;
    const [editing, setEditing] = useState(false);


    const handleEditing = () => {
        setEditing(true);        
    };

    const handleUpdatedDone = (e) => {
        if (e.key === 'Enter') {
            e.target.blur();
        }
    };

    const currentEditedPost = {};

    const handleBlur = (e) => {
        const { target: {name, value}} = e;        
        currentEditedPost[name] = value;
    };

    const handleSaving = async () => {
        await axios.patch(`${MAIN_URL}/posts/${_id}`, currentEditedPost);
        setEditing(false);
        fetchPosts();
    }

    const handleDelete =  () => {
        axios.delete(`${MAIN_URL}/posts/${_id}`);
        fetchPosts();
    }

    let viewMode = {};
    let editMode = {};

    if (editing) {
        viewMode.display = "none";
    } else {
        editMode.display = "none";
    }

    return (
        <TableRow>
            <TableCell>
                <img src={thumbnail} style={{maxWidth: 200}} alt={title} />
            </TableCell>
            <TableCell>                
                <span style={viewMode}>{title}</span>
                <input 
                    type="text"
                    defaultValue={title}
                    name="title"
                    style={editMode}
                    onBlur={handleBlur}
                    onKeyDown={handleUpdatedDone}
                />
            </TableCell>
            <TableCell>
                <span style={viewMode}>{body}</span>
                <input 
                    type="text"
                    defaultValue={body}
                    name="body"
                    style={editMode}
                    onBlur={handleBlur}
                    onKeyDown={handleUpdatedDone}
                />
            </TableCell>
            <TableCell>
                <span style={viewMode}>{tag}</span>
                <input 
                    type="text"
                    defaultValue={tag}
                    name="tag"
                    style={editMode}
                    onBlur={handleBlur}
                    onKeyDown={handleUpdatedDone}
                />                                
            </TableCell>
            <TableCell>
                <span style={viewMode}>{categories}</span>
                <input 
                    type="text"
                    defaultValue={categories}
                    name="categories"
                    style={editMode}
                    onBlur={handleBlur}
                    onKeyDown={handleUpdatedDone}
                /> 
            </TableCell>
            <TableCell>
                <Button variant="contained" style={viewMode} onClick={handleEditing}>Edit</Button>
                <Button variant="contained" style={editMode} onClick={handleSaving}>Save</Button>
                <Button variant="outlined" style={editMode}>Cancel</Button>
            </TableCell>
            <TableCell>
                <Button variant="contained" onClick={handleDelete}>Delete</Button>
            </TableCell>
        </TableRow>
    )
}

export default TableRowPostItem;