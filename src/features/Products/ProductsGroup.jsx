import React from "react";
import styles from "styled-components";
import ProductItem from "./ProductItem";

const StylesProductsGroup = styles.div`
  margin-bottom:1rem;
  
  &>h2{
    text-align:left;
    margin-bottom:.5rem;
    font-size:1.2rem;
    font-weight:500;
    text-transform: uppercase;
  }
`;
const ProductsGroup = ({ label, categoyProducts }) => {
  return (
    <StylesProductsGroup>
      <h2>{label}</h2>
      {categoyProducts.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </StylesProductsGroup>
  );
};

export default ProductsGroup;
