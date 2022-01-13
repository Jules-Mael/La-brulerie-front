import produitApi from "../Service/produitApi";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const DetailProduitPage = () => {

    const {idProduit} = useParams();
    const [produit, setProduit] = useState([]);
    const [libelleCategorie, setLibelleCategorie] = useState([]);


    const fetchProduitById = async () => {
        try {
            const _produit = await produitApi.getProduitById(idProduit);
            setProduit(_produit)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProduitById();
    }, [])

    const fetchLibelleCategorie = async () => {
        try {
            const _libelleCategorie = await produitApi.findCategorieByProduit(idProduit);
            setLibelleCategorie(_libelleCategorie)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() =>{
        fetchLibelleCategorie();
    }, [])


    return (
        <div className="text-center">
            <h1>{produit.libelleProduit}</h1>
            <h5>Categorie : {libelleCategorie}</h5>
            <h5>Prix : {produit.prixUnitaireHt} €</h5>

            {(produit.descriptionProduit && (
                <p>Description : {produit.descriptionProduit}</p>
            ))}

        </div>
    )
}

export default DetailProduitPage;