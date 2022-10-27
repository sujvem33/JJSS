import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
import {eachProduct} from "../utilities/products-services"

function Detail() {

  const [eachproduct, seteachproduct] = useState({});
  
    const params = useParams()
    const gender = params.gender 
    const geteachProducts = async (e) => {
      const productdetails = await eachProduct(gender);
      console.log(productdetails);
      seteachproduct({
        list: productdetails.data.allProducts,
      });
    };
    useEffect(() => {
      geteachProducts();
    }, []);
  
    console.log(eachproduct.list);
  
    const productdetailList = eachproduct.list
      ? eachproduct.list.map((element) => {
          return (
            <div key={element._id}>
              <h2>{element.name}</h2>
              <h2>{element.description}</h2>
              <h2>{element.category}</h2>
              <h2>{element.price}</h2>
              <h2> {element.gender}</h2>
              <img src={`${element.image}`} />
            </div>
          );
        })
      : [];
  
    return <div>{productdetailList}</div>;
  }
export default Detail