import PostList from "../../components/Posts/PostList/PostList";

const Blog = () => {
    return (
        <>
            <h1>Blog</h1>
            <PostList url="https://jsonplaceholder.typicode.com/posts/" />
        </>
    )
};

export default Blog;