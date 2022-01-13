import produitApi from "../Service/produitApi";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

const ProduitOfCategoriePage = () => {

    const {libelleCategorie} = useParams();
    const [produits, setProduits] = useState([]);


    const fetchProduitByCategorie = async () => {
        try {
            const _produits = await produitApi.findProduitsByCategorie(libelleCategorie);
            setProduits(_produits)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProduitByCategorie();
    }, [])


    return (
        <div className="text-center">
            <h1>Liste des produits de la catégorie {libelleCategorie}</h1>


            { (produits.length >0) ? (

                <ul className="list-unstyled ms-5">

                    {produits.map(produit => {
                        return (
                            <li key={produit.idProduit} className="mb-2">
                                <Link className="btn btn-primary" to={`/produits/${produit.idProduit}`} role="button">{produit.libelleProduit}</Link>
                            </li>
                        )
                    }
                    )}
                </ul>
                ) : (
                <h1 className="badge bg-warning fs-3 mt-5">/!\Pas de produit pour cette catégorie /!\</h1>
                )
            }


        </div>
    )
}

export default ProduitOfCategoriePage;