//import './App.css';

import Header from "./components/header";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage";
import AccueilPage from "./pages/AccueilPage";
import ErrorPage from "./pages/ErrorPage";
import ProduitsPage from "./pages/ProduitsPage";
import DetailProduitPage from "./pages/DetailProduitPage";
import ProduitOfCategoriePage from "./pages/ProduitOfCategoriePage";
import LoginPage from "./pages/LoginPage";
import {useEffect, useState} from "react";
import authApi from "./Service/authApi";
import AuthenticatedContext from "./context/authContext";
import AuthApi from "./Service/authApi";
import RedacteurPage from "./pages/RedacteurPage";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(authApi.isAuthenticated());
    const [idRole, setIdRole] = useState();

    useEffect(() => {
        if (isAuthenticated) {
            const payload = AuthApi.getPayload();
            setIdRole(payload["idRole"])
        } else {
            setIdRole(0);
        }
    }, [isAuthenticated])

    const AuthentifiatedContextValue = {
        isAuthenticated: isAuthenticated,
        setIsAuthenticated: setIsAuthenticated,

        idRole: idRole,
        setIdRole: setIdRole,
    }

    const HeaderWithRouter = withRouter(Header);

  return (
      <AuthenticatedContext.Provider value={AuthentifiatedContextValue}>
          <BrowserRouter>
              <HeaderWithRouter/>
              <Switch>
                  <Route exact path="/" component={AccueilPage}/>
                  <Route exact path="/categories" component={CategoriesPage}/>
                  <Route path="/categorie/:libelleCategorie" component={ProduitOfCategoriePage}/>
                  <Route exact path="/produits" component={ProduitsPage}/>
                  <Route path="/produits/:idProduit" component={DetailProduitPage}/>
                  <Route path="/login" component={LoginPage}/>
                  <Route path="/redacteurs" component={RedacteurPage}/>
                  <Route component={ErrorPage}/>
              </Switch>
          </BrowserRouter>
      </AuthenticatedContext.Provider>
  );
}

export default App;
