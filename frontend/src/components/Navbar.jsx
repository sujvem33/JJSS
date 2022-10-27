import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({}) => {

  return (
    <nav>
     
      <Link to="/api/home">Home</Link> <br />
      {/* <Link to="/api/products/:gender">Men
      </Link> <br /> */}
      
      
    </nav>
  );
};

export default Navbar;