import React from 'react';
import Home from "./Home";
import Favorite from './Favorite';

import { Route,Routes, BrowserRouter } from 'react-router-dom';
 
const App = () => {
    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/favorite' element={<Favorite/>}/>
          </Routes>
          </BrowserRouter>
        </>
    )
}
export default App;