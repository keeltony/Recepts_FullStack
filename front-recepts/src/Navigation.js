import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './style/Navigation.css';

function Navigation(){
    const [Category, setCategory] = useState('Загрузка...');
    
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/category/', {
            mode: 'cors'
        }).then(response => response.json)
        .then(response => console.log(response))

    }, [])

    return(
        <nav className='category_table'>
            <ul>
                <li>
                    <Link to='/'>Все</Link>
                </li>
                <li>
                    <Link to='/category/first'>Первое</Link> 
                </li>
                
            </ul>
        </nav>
    )
}

export default Navigation;