import {Route, Routes} from 'react-router-dom';

import Category from './Category';
import Recipes from './Recipes';
import Recipet from './Recipet';
import './style/Main.css';



function Main() {
    return(
        <div className='main'>
            <Category />

            <Routes>
                <Route path='/recipes/:id' element={<Recipes />}/>
                <Route path='/recipes' element={<Recipes />}/>
             
                <Route path='/recept/:id' element={<Recipet />} />
                
            </Routes>
        </div>
    )
}

export default Main;