import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "../../../pages/Blog/Blog.module.scss";

const PostItem = (props) => {
    const postId = props.id ?? useParams()['id'];
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const postData = await axios.get(props.url + postId);
            setPost(postData.data);
        };
        getPost();
    }, []);

    return (
        <div className={style.postWrap}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
};

export default PostItem;