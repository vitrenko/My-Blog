import { useState, useEffect } from "react";

import PostItem from "../PostItem/PostItem";

import axios from "axios";

const PostList = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(props.url);
                setPosts(res.data);
            } catch(err) {
                console.log(err);
            }
            
        };
        fetchPosts();
    }, [])

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <PostItem url={props.url} id={post.id} />
                    <a href={`posts/${post.id}`}>Go to this post</a>
                </div>
            ))}
        </div>
    );
};

export default PostList;