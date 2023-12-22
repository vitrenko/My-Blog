import { Gateway } from "../config/axios"

class UserAPI {
    getUser = (id) => Gateway.get(`/user/${id}`);
    getUsers = () => Gateway.get("/user/list");
    updateUser = (user, payload) => Gateway.patch(`/user/${user._id}`, payload);
    deleteUser = (id) => Gateway.delete(`/user/${id}`);
}

export default new UserAPI();