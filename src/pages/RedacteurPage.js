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

            <ul className="list-unstyled ms-5">
                {
                    redacteurs.map(redacteur =>{
                        console.log("redacteur", redacteur)
                        return (
                            <li key={redacteur.idEmploye} className="mb-2">{redacteur.nom} {redacteur.prenom}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default RedacteurPage;