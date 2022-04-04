import {useEffect, useState} from "react";
import redacteurApi from "../Service/redacteurApi";

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
                            <li key={redacteur.idEmploye} className="mb-2">{redacteur.nom} {redacteur.prenom} btn modifier, reset le mdp et suppr</li>
                        )
                    })
                }
            </ul>
            <p>Un bouton crée</p>
        </>
    )
}

export default RedacteurPage;