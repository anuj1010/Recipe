import React from 'react'
import "../Home.css";
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
                <div className="header">
                    <Link to="/" className="main_heading">Recipe Maniaaa</Link>
                    <div className="header_right">
                        <div className="header_favorite">
                            <FavoriteSharpIcon className="header_favicon" />
                            <Link className="favorite" to="/favorite">Favorites</Link>
                        </div>
                        <img className="icon_header" src={require("../images/salad.png")} alt="Icon" />
                    </div>
                </div>
            </>
            )
}
            export default Header;