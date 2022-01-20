import React, {useContext} from "react";
import {Link} from "react-router-dom";
import AuthContext from "../context/authContext";
import jwtDecode from "jwt-decode";
import AuthApi from "../Service/authApi";


const Header = ({history}) => {

    const context = useContext(AuthContext);
    let payload = ""
    if (context.isAuth) payload = jwtDecode(localStorage.getItem("token"));

    const handleLogOut = () => {
        AuthApi.logOut()
        context.setIsAuthenticated(false);
        history.push("/login")
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">La Brûlerie</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/categories">Catégories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/produits">Produits</Link>
                        </li>
                        {
                            context.idRole >= 1 && (
                                <li>
                                    <p>Rubrique et article</p>
                                </li>
                            )
                        }
                        {
                            context.idRole === 2 && (
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/redacteurs">Rédacteurs</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div>
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            {
                                context.isAuthenticated && (
                                    <button onClick={handleLogOut} className="nav-link btn btn-outline-warning" >Déconnexion</button>
                                ) || (
                                    <Link className="nav-link btn btn-outline-primary me-2" to="/login">Connexion</Link>
                                )
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;