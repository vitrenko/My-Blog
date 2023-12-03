import { Gateway } from "../config/axios"

class UserAPI {
    getUser = (id) => Gateway.get(`/user/${id}`);
    getUsers = () => Gateway.get("/user/list");
    updateUser = (payload) => Gateway.patch(`/user/${payload._id}`, payload);
    deleteUser = (id) => Gateway.delete(`/user/${id}`);
}

export default new UserAPI();