import { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom'

import './style/Category.css'

function Category(){
    const {category} = useParams();
    const [Recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/recipes')
        .then(require => require.json())
        .then(require => setRecipes(require))
    }, [])
    

    return(
       <ul className='category_main'>
            {Recipes.map((elem) => {
                return(
                    <li>
                        <Link to='asd'><h2>{elem['name']}</h2></Link>
                        <h4>{elem['description']}</h4>
                        <p>{elem['category']}</p>
                    </li>
                )
            })}
       </ul>
    )
}

export default Category;