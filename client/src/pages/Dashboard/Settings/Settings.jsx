import { useEffect, useState } from "react"
import UserAPI from "../../../API/userAPI";
import TableRowUserItem from "../../../components/Users/TableRowUserItem";
import { 
    TableContainer,
    Table,
    TableCell,
    TableHead,
    TableRow,
    TableBody,
    
    Paper
} from "@mui/material";

const Settings = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const res = await UserAPI.getUsers();
            setUsers(res.data);
        } catch(err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const updateUserEntity = async (payload) => {
        await UserAPI.updateUser(payload);
        await fetchUsers();
    }

    const deleteUserEntity = async (payload) => {
        await UserAPI.deleteUser(payload);
        await fetchUsers();
    }
        

    return (
        <>
            <h1>List of Users</h1>
                <TableContainer component={Paper} variant="outlined" sx={{ margin: '0 auto', minWidth: 650, maxWidth: 1490 }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>User First name</TableCell>
                                <TableCell>User Last name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Edit user</TableCell>
                                <TableCell>Delete user</TableCell>
                            </TableRow>                  
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRowUserItem 
                                    {...user} 
                                    updateUser={updateUserEntity}
                                    key={user._id} 
                                    deleteUser={deleteUserEntity}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


        </>
    )
};

export default Settings;