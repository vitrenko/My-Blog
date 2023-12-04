import { useEffect, useState } from "react";
import Post from "./Post";
import PostAPI from "../../API/postAPI";

const Blog = () => {
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
        <>
            <h1>Blog</h1>
            {posts.map((post) => (
                <Post 
                    key={post.slug}
                    {...post}
                />
            ))}
        </>
    )
};

export default Blog;