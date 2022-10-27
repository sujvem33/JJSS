import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import Navbar from "./components/Navbar"
import Allproducts from "./pages/Allproducts";
import Detail from "./pages/Detail"


const App = () => {
  return (
    <main className="App">  
        <>
          <Navbar  />
          <Routes>
          <Route path="/api/products" element={<Allproducts />} />
          <Route path="/api/products/:gender" element={<Detail />} />
          </Routes>
        </>
    </main>
  );
};


export default App;