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

                <div className="container">
                    <div className="row">
                        {produits.map((produit) => {
                            return (
                                <div className="col-md-4 col-sm-6 mb-3" key={produit.idProduit}>
                                    <div className="card text-center mt-3">
                                        <img src="https://png.pngtree.com/png-vector/20190925/ourlarge/pngtree-tea-coffee-logo-badge-png-image_1737569.jpg" className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {produit.libelleProduit}
                                            </h5>
                                            <Link to={`/produits/${produit.idProduit}`}
                                                  className="btn btn-primary m-2">Détail</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                ) : (
                <h1 className="badge bg-warning fs-3 mt-5">/!\Pas de produit pour cette catégorie /!\</h1>
                )
            }


        </div>
    )
}

export default ProduitOfCategoriePage;