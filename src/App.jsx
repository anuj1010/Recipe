import React, { useState } from "react";
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

    homeRecipe();


    return (
        <>
            <div className="app">
                <div className="header">
                    <h1 className="main_heading">Recipe Maniaaa</h1>
                    <img className="icon" src={require("./images/salad.png")} alt="Icon" />
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

                <div className="banner_container">
                    <div className="banner"><img className="banner_img" src={require("./images/1.jpg")} alt="icon" target="_blank" /></div>
                    <div className="banner"><img className="banner_img" src={require("./images/2.jpg")} alt="icon" target="_blank" /></div>
                    <div className="banner"><img className="banner_img" src={require("./images/3.jpg")} alt="icon" target="_blank" /></div>
                    <div className="banner"><img className="banner_img" src={require("./images/4.jpg")} alt="icon" target="_blank" /></div>
                </div>

                {recipeHeading ? <div className="recipe_heading">
                    All Recipes related to {ingridient} are shown below.
                </div> : ""}
                <div className="recipe_container">
                    {
                        recipes.map((recipe, indx) => {
                            return <RecipeTile
                                recipe={recipe}
                                key={indx}
                            />
                        }
                        )}
                </div>
                <div className="home_container">
                    <p className="home_heading">Where our expertise is still a family tradition.</p>
                    <div className="recipe_container">
                        {
                            homeDisplay.map((recipe, indx) => {
                                return <RecipeTile recipe={recipe} key={indx} />
                            })}
                    </div>
                </div>
            </div>
                <footer className="footer">
                    <div className="footer__addr">
                        <h1 className="footer__logo">Something</h1>

                        <h2>Contact</h2>

                        <address>
                            5534 Somewhere In. The World 22193-10212

                                <a className="footer__btn" href="mailto:example@gmail.com">Email Us</a>
                        </address>
                    </div>

                    <ul className="footer__nav">
                        <li className="nav__item">
                            <h2 className="nav__title">Media</h2>

                            <ul className="nav__ul">
                                <li>
                                    <a href="https://github.com/anuj1010">Online</a>
                                </li>

                                <li>
                                    <a href="https://github.com/anuj1010">Print</a>
                                </li>

                                <li>
                                    <a href="https://github.com/anuj1010">Alternative Ads</a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav__item nav__item--extra">
                            <h2 className="nav__title">Technology</h2>

                            <ul className="nav__ul nav__ul--extra">
                                <li>
                                    <a href="https://github.com/anuj1010">Hardware Design</a>
                                </li>

                                <li>
                                    <a href="https://github.com/anuj1010">Software Design</a>
                                </li>

                                <li>
                                    <a href="https://github.com/anuj1010">Digital Signage</a>
                                </li>

                                <li>
                                    <a href="https://github.com/anuj1010">Automation</a>
                                </li>

                                <li>
                                    <a href="https://github.com/anuj1010">Artificial Intelligence</a>
                                </li>

                                <li>
                                    <a href="https://github.com/anuj1010">IoT</a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav__item">
                            <h2 className="nav__title">Legal</h2>

                            <ul className="nav__ul">
                                <li>
                                    <a href="https://github.com/anuj1010">Privacy Policy</a>
                                </li>

                                <li>
                                    <a href="https://github.com/anuj1010">Terms of Use</a>
                                </li>

                                <li>
                                    <a href="https://github.com/anuj1010">Sitemap</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div className="legal">
                        <p>&copy; 2022 Something. All rights reserved.</p>

                        <div className="legal__links">
                            <span>Made by <span className="heart"><a href="https://github.com/anuj1010">Anuj</a></span> remotely from Anywhere</span>
                        </div>
                    </div>
                </footer>
        </>
    );
}
export default App;