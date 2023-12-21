import { Link } from 'react-router-dom';
import './style/Navigation.css';

function Navigation(){
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