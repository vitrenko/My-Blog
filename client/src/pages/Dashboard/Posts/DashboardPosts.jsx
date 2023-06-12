import { useState, useEffect } from "react";
import axios from "axios";
import style from "./DashboardPosts.module.scss";

function DashboardPosts(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(props.url);
                setPosts(res.data.data);
                
            } catch(err) {
                console.log(err);
            }
            
        };
        fetchPosts();
    }, []);


    return (
        <div>
            <table className={style.postTable}>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Tag</th>
                        <th>Categories</th>
                        <th>Edit post</th>
                        <th>Delete post</th>
                    </tr>                  
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.slug}>
                            <td>
                                <img src={post.thumbnail} alt={post.title} />
                            </td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>{post.tag}</td>
                            <td>{post.categories}</td>
                            <td>
                                <button>Edit</button>
                            </td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DashboardPosts;