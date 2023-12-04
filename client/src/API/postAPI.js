import { Gateway, Placeholder } from "../config/axios"

class PostAPI {
    getMyPosts = () => Gateway.get("/posts");
    getPlaceholderPosts = () => Placeholder.get("/posts");
    addPost = (post) => Gateway.post("/posts", post);
}

export default new PostAPI();