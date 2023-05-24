import { useEffect, useState } from "react";
import axios from "axios";
import CTA from "../components/CTA/CTA";
import Popup from "../components/Popup/Popup";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPosts(res.data);
            } catch(err) {
                console.log(err);
            }
            
        };
        fetchPosts();
    }, []);

    const [popup, setPopup] = useState(false);


    return (
        <>
            <CTA onClick={() => setPopup(!popup)} />
            <Popup popup={popup} setPopup={setPopup}>
                HELLO EVERYBODY
            </Popup>
            <h1>Home</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.body}</li>
                ))}
            </ul>
        </>
    )
};

export default Home;