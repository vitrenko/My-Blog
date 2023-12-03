import { Gateway, Placeholder } from "../config/axios"

class PostAPI {
    getMyPosts = () => Gateway.get("/posts");
    getPlaceholderPosts = () => Placeholder.get("/posts");
}

export default new PostAPI();