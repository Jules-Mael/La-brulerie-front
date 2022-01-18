import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const RedacteurPage = () => {

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

            <ul className="list-unstyled ms-5">
                {
                    produits.map(produit =>{
                        return (
                            <li key={produit.idProduit} className="mb-2"><Link className="btn btn-primary" to={`/produits/${produit.idProduit}`} role="button">{produit.libelleProduit}</Link></li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default RedacteurPage;