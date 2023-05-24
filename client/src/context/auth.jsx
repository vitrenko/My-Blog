import { useReducer, createContext } from "react";
import jwtDecode from "jwt-decode";
import { allComments } from '../../../server/controllers/posts';

const initialState = {
    user: null,
}

if (localStorage.getItem("jwtDecode")) {
    const decodeToken = jwtDecode(localStorage.getItem("jwtDecode"));

    if (decodeToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("jwtDecode");
    } else {
        initialState.user = decodeToken;
    }
}

const AuthContext = createContext({
    user: null,
    login: userData => {},
    logout: () => {},
});

function authReducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
            }
    }
}