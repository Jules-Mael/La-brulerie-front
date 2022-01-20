import React, {useContext} from "react";
import AuthContext from "../context/authContext";
import jwtDecode from "jwt-decode";

const AccueilPage = () => {

    const context = useContext(AuthContext);
    let payload = ""
    if (context.isAuthenticated) payload = jwtDecode(localStorage.getItem("token"));

    return(
        <>
            {
                context.isAuthenticated && (
                    <h1 className="text-center fs-2">Bienvenue {payload["prenom"]} ! <br/> Faites votre choix parmis nos catégories ! </h1>
                ) || (
                    <h1 className="text-center fs-2">Bienvenue à la brûlerie ! <br/> Faites votre choix parmis nos catégories ! </h1>
                )
            }
        </>
    );

}

export default AccueilPage;