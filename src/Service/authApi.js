import axios from "../config/axios";
import jwtDecode from "jwt-decode";

const login = (mail, password) => {
    return axios.post("/login_check", {"username": mail, "password": password})
        .then(response => response.data.token);
}

const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    if (token) {
        const payload = jwtDecode(token);
        return payload["exp"]*1000 > new Date().getTime()
    } return false;
}

const logOut = () => {
    localStorage.removeItem("token");
}

export default { login, isAuthenticated, logOut }