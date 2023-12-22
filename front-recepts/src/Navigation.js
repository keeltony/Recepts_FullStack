import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './style/Navigation.css';

function Navigation(){
    const [Category, setCategory] = useState([]);
    
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/category/', {
        }).then(response => response.json())
        .then(response => setCategory(response))

    }, [])


    return(
        <nav>
            <ul className='category_table'>
                <h3>Категории</h3>
                <li>
                    <Link to='/category'>Все</Link>
                </li>
                {Category.map((elem) => {
                    return(
                        <li>
                            <Link to='//'>{elem['name']}</Link>
                        </li>
                    )
                })}         
            </ul>
        </nav>
    )
}

export default Navigation;