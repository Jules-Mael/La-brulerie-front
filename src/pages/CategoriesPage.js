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
          <h1 className="text-center">Page des catégories</h1>

          <ul className="list-unstyled ms-5">
              {
                  categories.map(categorie =>{
                      return (
                          <li key={categorie.idCategorie} className="mb-2"><Link className="btn btn-primary" to={`/categorie/${categorie.libelleCategorie}`} role="button">{categorie.libelleCategorie}</Link></li>
                      )
                  })
              }
          </ul>
      </>
    );
}

export default CategoriesPage;