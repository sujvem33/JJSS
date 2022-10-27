import React from "react";
import { Link, useParams} from "react-router-dom";

const Navbar = ({}) => {

  return (
    <nav>
     
      <Link to="/api/products">Home</Link> <br />
      <Link to="/api/products/men">Men</Link> <br />
      <Link to="/api/products/women">Women</Link> <br />
      <Link to="/api/products/girl">Girl</Link> <br />
      <Link to="/api/products/boy">Boy</Link> <br />
 
    </nav>
  );
};

export default Navbar;