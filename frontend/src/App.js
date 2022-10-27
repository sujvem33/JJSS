import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import Navbar from "./components/Navbar"
import { getUser } from "./utilities/users-services";
import Allproducts from "./pages/Allproducts";
import Men from "./pages/Men"
import Women from "./pages/Women"
import Girl from "./pages/Girl"
import Boy from "./pages/Boy"


const App = () => {
  
 
  
  return (
    <main className="App">
      
        <>
          <Navbar  />
          <Routes>
          <Route path="/api/home" element={<Allproducts />} />
          <Route path="/api/products/:gender" element={<Allproducts />} />
          {/* <Route path="/api/products/girl" element={<Girl />} />
          <Route path="/api/products/men" element={<Men />} />
          <Route path="/api/products/women" element={<Women />} />
          <Route path="/orders" element={<OrderHistoryPage />} /> */}
          </Routes>
        </>
     
    </main>
  );
};


export default App;