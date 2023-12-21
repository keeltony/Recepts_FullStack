import {useParams} from 'react-router-dom';

function Recipes(){
    const {id} = useParams();
    return(
        <div>
            {id}
            One recept
        </div>
    )
}

export default Recipes;