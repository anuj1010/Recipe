import React from 'react'

function RecipeTile({recipe}) {

    return (
        <div>
            <img src={recipe["recipe"]["image"]} />
            <p>{recipe["recipe"]["label"]}</p>
        </div>
    )
}

export default RecipeTile
