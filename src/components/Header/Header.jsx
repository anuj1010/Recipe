import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("home");
  return (
    <>
      <div className="navBar">
        <div className="logoContainer">
          <Link to="/">
            <img className="logo" src={logo} />
          </Link>
        </div>
        <ul className="navMenu">
          <Link className="navLink" to="/">
            <li onClick={() => setActive("home")}>Home</li>
            {active === "home" ? <hr /> : null}
          </Link>

          <Link className="navLink" to="/favorite">
            <li onClick={() => setActive("favorite")}>Favorites</li>
            {active === "favorite" ? <hr /> : null}
          </Link>

          <Link className="navLink" to="/">
            <li onClick={() => setActive("about")}>About Us</li>
            {active === "about" ? <hr /> : null}
          </Link>
        </ul>
      </div>

      {/* <div className="header">
        <Link to="/">
          <img className="logo" src={logo} />
        </Link>
        <div className="header_right">
          <div className="header_favorite">
            <FavoriteSharpIcon className="header_favicon" />
            <Link className="favorite" to="/favorite">
              Favorites
            </Link>
          </div>
          <img className="icon_header" src={salad} alt="Icon" />
        </div>
      </div> */}
    </>
  );
};
export default Header;
