

import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import NewOrderPage from "./pages/NewOrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import Navbar from "./components/Navbar"
import { getUser } from "./utilities/users-services";


const App = () => {
  
  const [user, setUser] = useState(getUser());
 
  return (
    <main className="App">
      {user ? (
        <>
          <Navbar user={user} />
          <Routes>
            <Route path="/orders/new/:id" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
};


export default App;