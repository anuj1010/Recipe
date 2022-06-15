import React from 'react'

function RecipeTile({recipe}) {

    return (
        <div className="tiles">
            <img className='tile_image' alt='recipe' src={recipe["recipe"]["image"]} />
            <p className='tile_title'>{recipe["recipe"]["label"]}</p>
            <a className='recipe_button' href={recipe["recipe"]["shareAs"]} rel="noopener noreferrer" target="_blank">Get Recipe</a>
        </div>
    )
}

export default RecipeTile;
