import categorieApi from "../Service/categorieApi";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const CategoriesPage = () => {

    const [categories, setCategories] = useState([]);


    const fetchCategories = async () => {
        try {
            const _categories =await categorieApi.getCategories();
            setCategories(_categories)

        } catch ($error) {
            console.log($error)
        }
    }

    useEffect(() => {
        fetchCategories();
    },[])

    return (
      <>
          <h1 className="text-center">Page de toutes les catégories : </h1>

          <div className="container">
              <div className="row">
                  {categories.map((categorie) => {
                      return (
                      <div className="col-md-4 col-sm-6 mb-3" key={categorie.idCategorie}>
                          <div className="card text-center mt-3">
                              <img src="https://www.cafeshenri.fr/sites/default/files/the_delicieux.jpg" className="card-img-top" alt="..."/>
                              <div className="card-body">
                                  <h5 className="card-title">
                                      {categorie.libelleCategorie}
                                  </h5>
                                  <Link to={`/categorie/${categorie.libelleCategorie}`}
                                        className="btn btn-primary m-2">Choisir cette catégorie</Link>
                              </div>
                          </div>
                      </div>
                      )
                  })}
              </div>
          </div>
      </>
    );
}

export default CategoriesPage;