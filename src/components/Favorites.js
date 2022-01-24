import Title from "./ui/Title";
import React, { useState, useEffect } from "react";
import Products from "api/products.json";
import ProductItem from "./ui/ProductItem";
export default function Favorites() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);
  return (
    <div>
      <Title>Favoriler</Title>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-8 2xl:grid-cols-8 gap-0.1 bg-white rounded-lg overflow-hidden">
        {products.length &&
          products.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
      </div>
    </div>
  );
}
