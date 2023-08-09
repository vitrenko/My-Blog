import { useReducer, createContext } from "react";
import jwtDecode from "jwt-decode";

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
});

function authReducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
            }
        case "LOGOUT":
            return {
                ...state,
                user: null,
            }
        default:
            return state;
    }
}

const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    
    function login(userData) {
        localStorage.setItem("jwtDecode", userData.token);
        dispatch({
            type: "LOGIN",
            payload: userData,
        })
    }

    function logout() {
        localStorage.removeItem("jwtDecode");
        dispatch({type: "LOGOUT"});
    }

    return (
        <AuthContext.Provider
            value={{user: state.user, login, logout}}
            {...props}
        />
    );

}

export { AuthContext, AuthProvider };
