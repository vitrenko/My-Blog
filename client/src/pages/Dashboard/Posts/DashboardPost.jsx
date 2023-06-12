import { useState } from "react";
import axios from "axios";

function DashboardPost() {
    const [newPost, setNewPost] = useState({
        title: "",
        body: "",
        tag: "",
        categories: [],
        slug: "",
        thumbnail: null,
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewPost((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const {name, files} = e.target;
        setNewPost((prevState) => ({
            ...prevState,
            [name] : files[0],
        }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            Object.entries(newPost).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    value.forEach((item) => {
                        formData.append(key, item);
                    })
                } else {
                    formData.append(key, value);
                }
            });
            const res = await axios.post("http://localhost:5000/posts", formData, {
                headers: {
                    "content-Type": "multipart/form-data",
                },
            });
        } catch (error) {
            console.error("Error", error)
        }
    };

    const handleCategoriesChange = (e) => {
        const {value} = e.target;
        setNewPost((prevState) => ({
            ...prevState,
            categories: value.split(","),
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                value={newPost.title} 
                onChange={handleChange} 
                placeholder="Title" 
            />
            <input 
                type="text" 
                name="body" 
                value={newPost.body} 
                onChange={handleChange} 
                placeholder="Body" 
            />
            <input 
                type="text" 
                name="tag" 
                value={newPost.tag} 
                onChange={handleChange} 
                placeholder="Tag" 
            />
            <input 
                type="text" 
                name="categories" 
                value={newPost.categories} 
                onChange={handleCategoriesChange} 
                placeholder="Categories" 
            />
            <input 
                type="text" 
                name="slug" 
                value={newPost.slug} 
                onChange={handleChange} 
                placeholder="Slug" 
            />
            <input type="file" name="thumbnail" onChange={handleFileChange} />

            <button type="submit">Submit</button>
        </form>
    )
    
};

export default DashboardPost;