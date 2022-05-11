import {useEffect, useState} from "react";
import redacteurApi from "../Service/redacteurApi";
import {Link} from "react-router-dom";

const RedacteurPage = () => {

    const [redacteurs, setRedacteur] = useState([]);


    const fetchRedacteurs = async () => {
        try {
            const _redacteurs =await redacteurApi.getRedacteurs();
            setRedacteur(_redacteurs)

        } catch ($error) {
            console.log($error)
        }
    }

    useEffect( () => {
        fetchRedacteurs();
    },[])


    return (
        <>
            <h1 className="text-center">Liste des rédacteurs :</h1>


            <ul className="list-unstyled ms-5 mt-5 text-center">
                {
                    redacteurs.map(redacteur =>{
                        return (
                            <>
                                <span>
                                    <li key={redacteur.idEmploye} className="mb-2 mt-3">{redacteur.nom} {redacteur.prenom}</li>
                                    <button className="btn btn-sm btn-outline-success text-center m-1">
                                        Modifier
                                    </button>
                                    <button className="btn btn-sm btn-outline-success text-center m-1">
                                        Réinitialiser le mot de passe
                                    </button>
                                    <button className="btn btn-sm btn-outline-danger text-center m-1">
                                        Supprimer
                                    </button>
                                </span>
                            </>

                        )
                    })
                }
            </ul>
        </>
    )
}

export default RedacteurPage;