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
                    <div className="banner"><img className="banner_img" src="https://edamam-product-images.s3.amazonaws.com/web-img/952/95235d5ebcf4181b9b7407ed65ff6569.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCzSQgwfVDajp7FUWfJcIBk9x4HJ58TNk5aWMhGT4AQkwIgOQSBUpji0Fz6SrgjH9LXA%2BJxevarQZ9iGEDkFiHlJSYq2wQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDOCsIijBSkOaR3uTUyqvBNb9UQ8RWZ%2FV3%2FLZb9RZcFaPVC9TU6rsJ%2F5T9Y4ApMqG9frwUC0mN%2Fh5qXajzDCwiV41UenI0G9EyFHEN8vT1aCeIFEpDEVrF1jNc6bafJ2brteLqjHTzGp2T0v92BIDg00oiuF97bPvaXUJpJZj7C5wi8BwuDIqHRuqcxFufIjhW%2ByO21PraKDINN%2Bn1VO1SeleCACTOR44UOuGRrKWjCSQ1evWGSACM7OSFxsDuUS%2BSKfDUjGbi9Js0qEPqtB7j2bYHOs0eHd0jpyte9sCU2ZCtv3A6qHQsvQooGKdJmKV%2FY9JMhXRVvADpd1NPIOKvCn5o5g3Hw6i6S1Ugte7QVNuiw2eGp3DzTNtAR%2FnI1rlcrmDnV6cF1sO6h5sozJomB3W8tJnMkkenOTKIlU1aaDyxeaWDrAq5u6eyBLe6omf5OJHsbJgjBxJz0ltXFVoFYUIgt1j1nMENS81KRMcyqw86qE1YeIEfELKQiWLfE%2FV8M57zBG0yJ9D53eTyRnLly7AZ4LiPEEger9Pfxl6oBuCNqGUo0EjhLZeXjTahN0WH3Xh2qxAgEU0RIy2qlxwcSuoIM8HnYAHGcOuhJKlhCFAYy6a6jB5D7xnDJYeOxiAi%2BPBXSws80KWGSt%2Fzbpa0sFGuYjqdTt6O3BLUx%2BmG951M57DQsXy0ZmbluI8ALjRrSnQwMIjfHtasGnK3p6eJNMOsKQpCb7qlDZPFdAua62%2Bpm9cCPcT0SCpfzAA4q4wwrumlQY6qQG0v1f7F51LZrhe5iMoHIbjO%2FExO3LejLeI9SAgUSGH2x4ndevZJToUZmdtKcOL5Y13%2BF2Aq%2FXt2TJF1iCvLtfrC5%2BcMqcFfxGRsduvm7YVa7snBh7%2BVByBt%2FbvEuADqCx0aRMDy8xH7zDwdBadfdxhjctr9XlWpThF4LBEz6elReXl4P7aMj1xjg%2B1iW7Oh5qB71a8L%2Bjg%2F1Jc4iiwEYVpkJTADfUruxpq&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220615T094024Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFKKVSUIJE%2F20220615%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4027ed0962e554297b43cd1adaa75cb9480411efe788cd420ee259d88909ca6c" alt="icon" target="_blank" /></div>
                    <div className="banner"><img className="banner_img" src="https://edamam-product-images.s3.amazonaws.com/web-img/adf/adf0d1e50d6ab82c373984230682fb3e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIHg%2Fqcm2vwt0yj1eBxUeY0uAkiDpHpcHSG35oj7GRzDaAiEAjuYz%2BSpcam83UWtvfDuoSS8h0k11I6UPKrBi5Pny88wq2wQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDKH0URfWKvKl9DLjeSqvBCQhjdlt3oVY4LwlZxBj20Z0rODVtT1kXKVYv%2FbxJO4pEFrk%2BNpSRYibHaUumkC8GGRmWOIWXMf6Zed%2FWCfZRX1nsdB2XwiVtqI11zhDoVPKJGOxN4152ghumzDzlZ4g1KqmrTPgcNS6FtcU%2FXB94qRr%2FhCTdN1TYQf54RjpcbBKt4x1mBCnuhz8nqqE46tg8TP%2BXXR%2FglF7C1WRYw8n%2Baxrv%2FIzWzK8MRAVkqdfKyVKLIj%2F650WEISqiYbyOdzazQd6zPcjPcmt2ofv5%2FOu14VTZa%2F5l704z%2BtAhz1XV4LXYc1k8p8mTVrA3pVeAMBilFVVx3noRWv3ogFezkDdarHc40xQ%2F7UG%2FKesXywRisLu0%2Basm1Ba2RJLXbWvAdh0Gl6OSiVFjlrlhOdH0tXEjmrL3TGe3nFiyqZV1JxW%2Fu03QENcrDaElMu7x9dpb06aLsUGWEEdQ1eEBqH9J%2BceQwcJTcPKleepYXuWbdsQZPPg%2FQEgFipEshW9PB7JxL1ojJCoJC4qQMi8qISKrJcgDOy8zQ58qnNGz%2Bxx%2FgIcKghqbLN9t2C4sEF3c7hmrbrH3k7D1Ubk971XKQsI7R7K%2F%2F9d2Y%2FoqWbBCik8GVAmAWXzwN07E8VuZfQ%2B9HIfOEmqHEJF8emuBIfaWCLnOpaFjS2KC%2FJSEOiRESJHV19WRnqnKehjyWjMbTcGLo2M%2FYkl7%2Bo6i6jXKOgkUXAJYQos1eiPDirLcpBC4oI3igr0odEw77amlQY6qQFqN7OUJ7v8rO3Gi5%2BalhqFNPwkMa27qfABTDcdmfpDSHhaQSyZfxesCsSHADmFaxVv%2Bxo1Nh8whX1b5gs3bw%2B1f9L%2B2VMpZ04ecQvPB4msdgn6NtclEtCb1IXsHzIEmECznvmdIqPklG%2BS%2BkmO3sV3ze5Q62M%2BrjE%2FZpXCwKcgevzFdVUwvbNZ6GOXbywUjQFZA4maEKnbN%2FRzJ6NlPjQKmoVJGTIdyG4X&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220615T095017Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIX3RA4W%2F20220615%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=12cec384a9a9550c57be22b924eed3f991ea947a020c13160c56c9cbb283239f" alt="icon" target="_blank" /></div>
                    <div className="banner"><img className="banner_img" src="https://edamam-product-images.s3.amazonaws.com/web-img/283/283bc8e7aa1f26d03ca9c963ebc200c1.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCzSQgwfVDajp7FUWfJcIBk9x4HJ58TNk5aWMhGT4AQkwIgOQSBUpji0Fz6SrgjH9LXA%2BJxevarQZ9iGEDkFiHlJSYq2wQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDOCsIijBSkOaR3uTUyqvBNb9UQ8RWZ%2FV3%2FLZb9RZcFaPVC9TU6rsJ%2F5T9Y4ApMqG9frwUC0mN%2Fh5qXajzDCwiV41UenI0G9EyFHEN8vT1aCeIFEpDEVrF1jNc6bafJ2brteLqjHTzGp2T0v92BIDg00oiuF97bPvaXUJpJZj7C5wi8BwuDIqHRuqcxFufIjhW%2ByO21PraKDINN%2Bn1VO1SeleCACTOR44UOuGRrKWjCSQ1evWGSACM7OSFxsDuUS%2BSKfDUjGbi9Js0qEPqtB7j2bYHOs0eHd0jpyte9sCU2ZCtv3A6qHQsvQooGKdJmKV%2FY9JMhXRVvADpd1NPIOKvCn5o5g3Hw6i6S1Ugte7QVNuiw2eGp3DzTNtAR%2FnI1rlcrmDnV6cF1sO6h5sozJomB3W8tJnMkkenOTKIlU1aaDyxeaWDrAq5u6eyBLe6omf5OJHsbJgjBxJz0ltXFVoFYUIgt1j1nMENS81KRMcyqw86qE1YeIEfELKQiWLfE%2FV8M57zBG0yJ9D53eTyRnLly7AZ4LiPEEger9Pfxl6oBuCNqGUo0EjhLZeXjTahN0WH3Xh2qxAgEU0RIy2qlxwcSuoIM8HnYAHGcOuhJKlhCFAYy6a6jB5D7xnDJYeOxiAi%2BPBXSws80KWGSt%2Fzbpa0sFGuYjqdTt6O3BLUx%2BmG951M57DQsXy0ZmbluI8ALjRrSnQwMIjfHtasGnK3p6eJNMOsKQpCb7qlDZPFdAua62%2Bpm9cCPcT0SCpfzAA4q4wwrumlQY6qQG0v1f7F51LZrhe5iMoHIbjO%2FExO3LejLeI9SAgUSGH2x4ndevZJToUZmdtKcOL5Y13%2BF2Aq%2FXt2TJF1iCvLtfrC5%2BcMqcFfxGRsduvm7YVa7snBh7%2BVByBt%2FbvEuADqCx0aRMDy8xH7zDwdBadfdxhjctr9XlWpThF4LBEz6elReXl4P7aMj1xjg%2B1iW7Oh5qB71a8L%2Bjg%2F1Jc4iiwEYVpkJTADfUruxpq&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220615T095510Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFKKVSUIJE%2F20220615%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=12e0a908de86b98f5a525e5be398680c3d840b6d2d084ce4067ddfcbc844029d" alt="icon" target="_blank" /></div>
                    <div className="banner"><img className="banner_img" src="https://edamam-product-images.s3.amazonaws.com/web-img/a15/a153424aa647c15d1a94f20d9536b3ad.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIHg%2Fqcm2vwt0yj1eBxUeY0uAkiDpHpcHSG35oj7GRzDaAiEAjuYz%2BSpcam83UWtvfDuoSS8h0k11I6UPKrBi5Pny88wq2wQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDKH0URfWKvKl9DLjeSqvBCQhjdlt3oVY4LwlZxBj20Z0rODVtT1kXKVYv%2FbxJO4pEFrk%2BNpSRYibHaUumkC8GGRmWOIWXMf6Zed%2FWCfZRX1nsdB2XwiVtqI11zhDoVPKJGOxN4152ghumzDzlZ4g1KqmrTPgcNS6FtcU%2FXB94qRr%2FhCTdN1TYQf54RjpcbBKt4x1mBCnuhz8nqqE46tg8TP%2BXXR%2FglF7C1WRYw8n%2Baxrv%2FIzWzK8MRAVkqdfKyVKLIj%2F650WEISqiYbyOdzazQd6zPcjPcmt2ofv5%2FOu14VTZa%2F5l704z%2BtAhz1XV4LXYc1k8p8mTVrA3pVeAMBilFVVx3noRWv3ogFezkDdarHc40xQ%2F7UG%2FKesXywRisLu0%2Basm1Ba2RJLXbWvAdh0Gl6OSiVFjlrlhOdH0tXEjmrL3TGe3nFiyqZV1JxW%2Fu03QENcrDaElMu7x9dpb06aLsUGWEEdQ1eEBqH9J%2BceQwcJTcPKleepYXuWbdsQZPPg%2FQEgFipEshW9PB7JxL1ojJCoJC4qQMi8qISKrJcgDOy8zQ58qnNGz%2Bxx%2FgIcKghqbLN9t2C4sEF3c7hmrbrH3k7D1Ubk971XKQsI7R7K%2F%2F9d2Y%2FoqWbBCik8GVAmAWXzwN07E8VuZfQ%2B9HIfOEmqHEJF8emuBIfaWCLnOpaFjS2KC%2FJSEOiRESJHV19WRnqnKehjyWjMbTcGLo2M%2FYkl7%2Bo6i6jXKOgkUXAJYQos1eiPDirLcpBC4oI3igr0odEw77amlQY6qQFqN7OUJ7v8rO3Gi5%2BalhqFNPwkMa27qfABTDcdmfpDSHhaQSyZfxesCsSHADmFaxVv%2Bxo1Nh8whX1b5gs3bw%2B1f9L%2B2VMpZ04ecQvPB4msdgn6NtclEtCb1IXsHzIEmECznvmdIqPklG%2BS%2BkmO3sV3ze5Q62M%2BrjE%2FZpXCwKcgevzFdVUwvbNZ6GOXbywUjQFZA4maEKnbN%2FRzJ6NlPjQKmoVJGTIdyG4X&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220615T100205Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIX3RA4W%2F20220615%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ee1f959a3eab9244c71896f83187640c9f9ccfe29480fbb2c64402dc993f37b3" alt="icon" target="_blank" /></div>
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
                                    <a href="#">Online</a>
                                </li>

                                <li>
                                    <a href="#">Print</a>
                                </li>

                                <li>
                                    <a href="#">Alternative Ads</a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav__item nav__item--extra">
                            <h2 className="nav__title">Technology</h2>

                            <ul className="nav__ul nav__ul--extra">
                                <li>
                                    <a href="#">Hardware Design</a>
                                </li>

                                <li>
                                    <a href="#">Software Design</a>
                                </li>

                                <li>
                                    <a href="#">Digital Signage</a>
                                </li>

                                <li>
                                    <a href="#">Automation</a>
                                </li>

                                <li>
                                    <a href="#">Artificial Intelligence</a>
                                </li>

                                <li>
                                    <a href="#">IoT</a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav__item">
                            <h2 className="nav__title">Legal</h2>

                            <ul className="nav__ul">
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>

                                <li>
                                    <a href="#">Terms of Use</a>
                                </li>

                                <li>
                                    <a href="#">Sitemap</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div className="legal">
                        <p>&copy; 2022 Something. All rights reserved.</p>

                        <div className="legal__links">
                            <span>Made by <span className="heart">Anuj</span> remotely from Anywhere</span>
                        </div>
                    </div>
                </footer>
        </>
    );
}
export default App;