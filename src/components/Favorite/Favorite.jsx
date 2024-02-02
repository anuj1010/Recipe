import React, { useEffect, useState } from "react";
import RecipeTile from "../RecipeTile/RecipeTile";
import "../Home/Home.css";

const Favorite = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const val = JSON.parse(localStorage.getItem("favorite"));
    setElements(val);
  }, []);

  return (
    <>
      <div className="recipe_container">
        {elements.map((recipe, indx) => {
          return (
            <RecipeTile
              recipe={recipe}
              key={indx}
              favorite={elements}
              // show={show}
            />
          );
        })}
      </div>
    </>
  );
};
export default Favorite;
