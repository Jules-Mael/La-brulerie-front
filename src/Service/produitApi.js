import axios from "../config/axios";

const getProduits = () => {
    return axios
        .get("produits")
        .then(response => response.data)
}

const getProduitById = (idProduit) => {
    return axios
        .get(`produit/${idProduit}`)
        .then(response => response.data)
}

const findProduitsByCategorie = (categorie) => {
    return axios
        .get(`categorie/${categorie}`)
        .then(response => response.data);
};

const findCategorieByProduit = (idProduit) => {
    return axios
        .get(`produits/${idProduit}`)
        .then(response => response.data)
}

export default {getProduits, getProduitById, findProduitsByCategorie, findCategorieByProduit};