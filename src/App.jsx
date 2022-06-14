import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import RecipeTile from "./RecipeTile";
import "./RecipeTile.css";
const App = () => {
    const [ingridient, setIngridient] = useState("");
    const [recipes, setRecipes]=useState([]);
    const appId = "93f08e6c";
    const appKey = "845926c2891a96f161565fa47ade63f0";
    var url = `https://api.edamam.com/search?q=${ingridient}&app_id=${appId}&app_key=${appKey}&&calories=591-722&health=alcohol-free`;
    async function getRecipe() {
        const recipe = await Axios.get(url);
        setRecipes(recipe.data.hits);
        console.log(recipe.data.hits);
    }
    const onSubmit= (e) =>{
        e.preventDefault();
        getRecipe();
    };

    return (
        <>
            <div className="app">
                <div className="header">
                    <h1 className="main_heading">Recipe Maniaaa</h1>
                    <img className="icon" src="" alt="Icon" />
                </div>
                <div className="search_container">
                    <form className="search_form" onSubmit={onSubmit}>
                        <p className="search_heading">Search your Recipe</p>
                        <input
                            type="text"
                            style={{textAlign:"center"}}
                            placeholder="Enter ingridient"
                            value={ingridient}
                            onChange={(e) => { setIngridient(e.target.value) }}
                        />
                        <input className ="search_button" type="submit" value="Search"  />
                    </form>
                </div>
                <div className="recipe_conatainer">
                     {
                        recipes.map((recipe)=>{
                            return <RecipeTile recipe= {recipe}/>
                            }
                     )}
                </div>
            </div>
        </>
    );
}
export default App;