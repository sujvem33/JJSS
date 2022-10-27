import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
import { allProducts } from "../utilities/products-services";

function Allproducts() {
  const [products, setproducts] = useState({});
  
  const getallProducts = async (e) => {
    const productsall = await allProducts();
    console.log(productsall);
    setproducts({
      list: productsall.data.allProducts,
    });
  };
  useEffect(() => {
    getallProducts();
  }, []);

  console.log(products.list);

  const productList = products.list
    ? products.list.map((element) => {
        return (
          <div key={element._id}>
            <h2>{element.name}</h2>
            <h2>{element.description}</h2>
            <h2>{element.category}</h2>
            <h2>{element.price}</h2>
            <h2><Link to={`/api/products/${element.gender}`}> {element.gender}</Link></h2>
            <img src={`${element.image}`} />
          </div>
        );
      })
    : [];

  return <div>{productList}</div>;
}
export default Allproducts;