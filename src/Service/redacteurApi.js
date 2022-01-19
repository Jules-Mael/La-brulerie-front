import axios from "../config/axios";

const getRedacteurs = () => {
    return axios
        .get("redacteurs")
        .then(response => response.data)
}

export default {getRedacteurs};