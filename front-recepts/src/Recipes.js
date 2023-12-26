import { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom'

import './style/Category.css'

function Category(){
    const {id} = useParams();
    const [Recipes, setRecipes] = useState([]);
    useEffect(() => {
        if(typeof(id) === 'undefined'){
        fetch('http://127.0.0.1:8000/recipes')
        .then(require => require.json())
        .then(require => setRecipes(require))
        }else{
            fetch(`http://127.0.0.1:8000/recipes/${id}`)
            .then(require => require.json())
            .then(require => setRecipes(require))
        }
    }, [id])
    

    return(
       <ul className='category_main'>
            {Recipes.map((elem) => {
                return(
                    <li>
                        <Link to={`/recept/${elem['id']}`}><h2>{elem['name']}</h2></Link>
                        <h4>{elem['description']}</h4>
                    </li>
                )
            })}
       </ul>
    )
}

export default Category;