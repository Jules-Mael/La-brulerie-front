import produitApi from "../Service/produitApi";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const ProduitsPage = () => {

    const [produits, setProduits] = useState([]);


    const fetchProduits = async () => {
        try {
            const _produits = await produitApi.getProduits();
            setProduits(_produits)

        } catch ($error) {
            console.log($error)
        }
    }

    useEffect(() => {
        fetchProduits();
    }, [])


    return (
        <>
            <h1 className="text-center">Liste des produits :</h1>

            <div className="container">
                <div className="row">
                    {produits.map((produit) => {
                        return (
                            <div className="col-md-4 col-sm-6 mb-3" key={produit.idProduit}>
                                <div className="card text-center mt-3">
                                    <img src="https://www.lepressoirdesgourmands.fr/2006-full_default/panier-garni-l-exception-.jpg" className="card-img-top" alt="..."/>
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
        </>
    )
}

export default ProduitsPage;