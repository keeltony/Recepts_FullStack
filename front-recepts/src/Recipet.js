import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

function Recipes(){
    const {id} = useParams();

    const [Recipet, setRecipet] = useState([]);
    
    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/recipt/${id}`, {
        }).then(response => response.json())
        .then(response => setRecipet(response))

    }, [])

    return(
        <div>
            {Recipet.map((elem) => {
                return(
                    <div>
                        <h2>{elem.name}</h2>
                        <p>{elem.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Recipes;