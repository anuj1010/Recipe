import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import RecipeTile from "./RecipeTile";
import "./RecipeTile.css";
const App = () => {
    const [ingridient, setIngridient] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [recipeHeading, setRecipeHeading] = useState(false);
    const [homeDisplay, setHomeDisplay] = useState([]);
    const appId = "93f08e6c";
    const appKey = "845926c2891a96f161565fa47ade63f0";
    var url = `https://api.edamam.com/search?q=${ingridient}&app_id=${appId}&app_key=${appKey}&from=0&to=30&health=alcohol-free`;
    var homeUrl = `https://api.edamam.com/search?q=paneer&app_id=${appId}&app_key=${appKey}&from=0&to=18&health=alcohol-free`;
    async function getRecipe() {
        const recipe = await Axios.get(url);
        setRecipes(recipe.data.hits);
        console.log(recipe.data.hits);
    }
    async function homeRecipe() {
        const result = await Axios.get(homeUrl);
        const homeresult = result.data.hits;
        setHomeDisplay(homeresult);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        getRecipe();
        setRecipeHeading(true);
    };
    useEffect(() => {
        homeRecipe();
    },[homeRecipe()]);

    return (
        <>
            <div className="app">
                <div className="header">
                    <h1 className="main_heading">Recipe Maniaaa</h1>
                    <img className="icon" src="" alt="Icon" />
                </div>
                <div className="search_container">
                    <p className="search_tagline">The variety on your plate...</p>
                    <form className="search_form" onSubmit={onSubmit}>
                        <p className="search_heading">Search your Recipe</p>
                        <input
                            type="text"
                            style={{ textAlign: "center", borderRadius: "4px", padding: "10px", outline: "none", backgroundColor: "rgb(255,255,255,.8)" }}
                            placeholder="Enter ingridient"
                            value={ingridient}
                            onChange={(e) => { setIngridient(e.target.value) }}
                        />
                        <input className="search_button" type="submit" value="Search" />
                    </form>
                </div>
                {recipeHeading ? <div className="recipe_heading">
                    All Recipes related to {ingridient} are shown below.
                </div> : ""}
                <div className="recipe_container">
                    {
                        recipes.map((recipe) => {
                            return <RecipeTile recipe={recipe} />
                        }
                        )}
                </div>
                <div className="home_container">
                    <p className="home_heading">Where our expertise is still a family tradition.</p>
                    <div className="recipe_container">
                        {
                            homeDisplay.map((recipe) => {
                                return <RecipeTile recipe={recipe} />
                            }
                            )}
                    </div>
                </div>
            </div>
            <div className="footer">

            </div>
        </>
    );
}
export default App;