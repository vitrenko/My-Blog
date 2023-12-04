import { useEffect, useState } from "react";
import axios from "axios";
import CTA from "../components/CTA/CTA";
import Popup from "../components/Popup/Popup";
import { PropagateLoader } from "react-spinners";
import Profile from "./Profile/Profile";

const Home = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchPosts = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
                setPhotos(res.data);
                setLoading(false);
            } catch(err) {
                console.log(err);
            }
            
        };
        fetchPosts();

    }, []);

    const [popup, setPopup] = useState(false);
    
    const color = "#428ede";

    const renderPosts = (posts) => {
        return posts.map((post) => (
            <li key={post.id}>{post.title}</li>
        ));
    };


    return (
        <>
            <CTA onClick={() => setPopup(!popup)} />
            <Popup popup={popup} setPopup={setPopup}>
                HELLO EVERYBODY
            </Popup>
            <h1>Home</h1>
            <PropagateLoader 
                color={color}
                loading={loading}
                cssOverride={{display: "flex", placeContent: "center", marginTop: 50}}
            />
            <ul>
                {renderPosts(photos)}
            </ul>
        </>
    )
};

export default Home;