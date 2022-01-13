//import './App.css';

import Header from "./components/header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage";
import AccueilPage from "./pages/AccueilPage";
import ErrorPage from "./pages/ErrorPage";
import ProduitsPage from "./pages/ProduitsPage";
import DetailProduitPage from "./pages/DetailProduitPage";
import ProduitOfCategoriePage from "./pages/ProduitOfCategoriePage";
import LoginPage from "./pages/LoginPage";
import {useState} from "react";
import authApi from "./Service/authApi";
import AuthenticatedContext from "./context/authContext";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(authApi.isAuthenticated());

    const AuthentifiatedContextValue = {
        isAuthenticated: isAuthenticated,
        setIsAuthenticated: setIsAuthenticated,
    }

  return (
      <AuthenticatedContext.Provider value={AuthentifiatedContextValue}>
          <BrowserRouter>
              <Header/>
              <Switch>
                  <Route exact path="/" component={AccueilPage}/>
                  <Route exact path="/categories" component={CategoriesPage}/>
                  <Route path="/categorie/:libelleCategorie" component={ProduitOfCategoriePage}/>
                  <Route exact path="/produits" component={ProduitsPage}/>
                  <Route path="/produits/:idProduit" component={DetailProduitPage}/>
                  <Route path="/login" component={LoginPage}/>
                  <Route component={ErrorPage}/>
              </Switch>
          </BrowserRouter>
      </AuthenticatedContext.Provider>
  );
}

export default App;
