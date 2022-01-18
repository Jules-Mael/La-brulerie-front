import React, {useContext, useState} from "react";
import AuthApi from "../Service/authApi";
import AuthContext from "../context/authContext";




const LoginPage = ({ history}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const context = useContext(AuthContext);

    const handleSubmit = async e => {
        try {
            e.preventDefault();
            const token = await AuthApi.login(username,password);
            localStorage.setItem("token",token);
            context.setIsAuthenticated(true);
            history.replace("/");
        }catch (e) {
            alert("Indentifiants invalides")
            console.log(e)
        }
    }

    return (
        <>
            <h1 className="text-center">Page de connexion</h1>
            <form onSubmit={handleSubmit}>
                <div className="text-center mx-auto mt-5" style={{width:35 + '% '}}>
                    <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label">Identifiant : </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="username"  value={username} required
                                   onChange={e=>setUsername(e.target.value)}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Mot de passe : </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="password " value={password} required
                                   onChange={e => setPassword(e.target.value) }/>
                        </div>
                    </div>
                    <div className="m-2">
                        <button className="btn btn-outline-success text-center" type="submit">Connexion</button>
                    </div>
                </div>
            </form>

        </>

    )
}

export default LoginPage;