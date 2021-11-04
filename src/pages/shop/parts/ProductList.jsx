import Product from "../../../components/Product";

import { useState, useEffect, useCallback } from "react";

const ProductList = () => {
  let [productsList, setProductsList] = useState([]);

  const fetchData = useCallback(() => {
    fetch("./products.json")
      .then((response) => response.json())
      .then((data) => {
        setProductsList(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ul>
      {productsList.map((product) => (
        <Product product={product} key={product.id}></Product>
      ))}
    </ul>
  );
};

export default ProductList;
