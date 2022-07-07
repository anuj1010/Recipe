import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { useEffect, useState } from 'react';
import "./RecipeTile.css";

function RecipeTile({ recipe, id, show, favorite }) {

    const [state, setState] = useState(false);
    // const [isFav, setIsFav] = useState([]);





    useEffect(() => { 
        
        // const val = JSON.parse(localStorage.getItem('favorite'));
        // setIsFav(val);

         if(favorite.includes(recipe)){
            setState(true);
         }
    },[favorite]);






    return (
        <div className="tiles">
            <div className='icon_div' onClick={() => show(recipe)}>
                <FavoriteSharpIcon className='icon' style={{ color: state ? 'red' : 'grey' }} />
            </div>
            <img className='tile_image' alt='recipe' src={recipe["recipe"]["image"]} />
            <p className='tile_title'>{recipe["recipe"]["label"]}</p>
            <a className='recipe_button' href={recipe["recipe"]["shareAs"]} rel="noopener noreferrer" target="_blank">Get Recipe</a>
        </div>
    )
}

export default RecipeTile;
