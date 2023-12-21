import {Route, Routes} from 'react-router-dom';

import Navigation from './Navigation';
import Category from './Category';
import Recipes from './Recipes';
import './style/Main.css';



function Main() {
    return(
        <div className='main'>
            <Navigation />

            <Routes>
                <Route path='/category/:category' element={<Category />}/>
                <Route path='/recept/:id' element={<Recipes />} />
                
            </Routes>
        </div>
    )
}

export default Main;