import * as productsAPI from "./products-api";

export async function allProducts() {
  const response = await productsAPI.allProducts();
  return response;
}

export async function eachProduct(gender) {
  const response = await productsAPI.eachProduct(gender);
  console.log(response);
  return response;
}

