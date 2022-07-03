import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeTile from './RecipeTile';
import "./Home.css";

const Favorite = () => {
    const [elements, setElements]=useState([]);
    // const [arr, setArr] = useState();
 
    // const remove =(rem)=>{
    // setArr(elements.filter((val)=>{
    //     return val != rem;
    //  }));
    // }

    useEffect(()=>{
      const val = JSON.parse(localStorage.getItem('favorite'));
      setElements(val);
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
                    color={'red'}
                /> )
            })}

            </div>

         <Footer/>

       </>
    )
}
export  default Favorite;
