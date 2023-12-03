import { useState, useEffect } from "react";
import TableRowPostItem from "../../../components/TableRowPostItem/TableRowPostItem";
import PostAPI from "../../../API/postAPI";
import { 
    TableContainer,
    Table,
    TableCell,
    TableHead,
    TableRow,
    TableBody,
    Paper
} from "@mui/material";

function DashboardPosts() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const res = await PostAPI.getMyPosts();
            setPosts(res.data.data);
            
        } catch(err) {
            console.log(err);
        }            
    };
    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <TableContainer component={Paper} variant="outlined" sx={{ margin: '0 auto', minWidth: 650, maxWidth: 1490 }}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Body</TableCell>
                            <TableCell>Tag</TableCell>
                            <TableCell>Categories</TableCell>
                            <TableCell>Edit post</TableCell>
                            <TableCell>Delete post</TableCell>
                        </TableRow>                  
                    </TableHead>
                    <TableBody>
                        {posts.map((post) => (
                            <TableRowPostItem 
                                {...post} 
                                fetchPosts={fetchPosts}
                                key={post.slug} 
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        
    );
}

export default DashboardPosts;