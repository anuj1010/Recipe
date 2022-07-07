import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeTile from './RecipeTile';
import "./Home.css";

const Favorite = () => {
    const [elements, setElements]=useState([]);

    useEffect(()=>{
      const val = JSON.parse(localStorage.getItem('favorite'));
      setElements(val);
      console.log(val);
  },[]);

    return (
       <>
         <Header/>
           <div className='recipe_container'>
           
            {elements.map((recipe,indx)=>{
               return(
                <RecipeTile
                    recipe={recipe}
                    key={indx}
                    favorite={elements}
                    // show={show}
                />)
            })}

            </div>

         <Footer/>

       </>
    )
}
export  default Favorite;
