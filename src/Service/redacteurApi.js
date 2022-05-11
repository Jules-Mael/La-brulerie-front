import axios from "../config/axios";

const getRedacteurs = () => {
    return axios
        .get("redacteurs")
        .then(response => response.data)
}

const deleteRedacteur = (idRedacteur) =>{
    return axios
        .post("redacteurs/delete/{idRedacteur}")
        .then(response => response.data)
}

export default {getRedacteurs, deleteRedacteur };