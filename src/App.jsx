import React from "react";
import Home from "./components/Home/Home";
import Favorite from "./components/Favorite/Favorite";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;
