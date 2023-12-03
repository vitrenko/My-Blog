import { Gateway,  } from "../config/axios"

class PostAPI {
    getMyPosts = () => Gateway.get("/posts");
    getPlaceholderPosts = () => Placeholder.get("/posts");
}

export default new PostAPI();