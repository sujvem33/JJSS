import * as productsAPI from "./products-api";

export async function allProducts() {
  const response = await productsAPI.allProducts();
  return response;

}

