import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import style from "styled-components";
import { Button } from "../../StyledComponnents/index";
import SmallContainer from "../../StyledComponnents/SmallContainer";
import ProductsGroup from "./ProductsGroup";

const StyledMessage = style.h2`
  text-align: center;
  color:#333;
  font-size:2rem;
  margin-bottom:1rem;
`;

const StyledErrorMessage = style.h2`
  text-align: center;
  color:#333;
  font-size:2rem;
  padding-block:5rem;
`;

const StyledOrderBy = style.div`
  display:flex;
  align-items:center;
  margin-bottom:1rem;

  h2{
    color:#333;
    font-weight:500;
    margin-right:0.5rem;
  }

  select{
    background-color:#333;
    color:#fff;
    border-radius:0.25rem;
    padding:0.25rem;
  }
`;

const Products = () => {
  const { products, status, error } = useSelector((state) => state.products);

  if (status === "rejected") {
    return (
      <SmallContainer>
        <StyledErrorMessage>Error: {error}</StyledErrorMessage>
      </SmallContainer>
    );
  }
  if (status === "loading") {
    return (
      <SmallContainer>
        <StyledErrorMessage>Loading...</StyledErrorMessage>
      </SmallContainer>
    );
  }

  return (
    <>
      <SmallContainer>
        {products.length === 0 && status === "success" ? (
          <>
            <StyledMessage>No Product Found</StyledMessage>
            <Button bgColor={{ h: 0, s: 68, l: 55 }}>
              <Link to='/add_product'>Add New Product</Link>
            </Button>
          </>
        ) : (
          <>
            {Object.keys(products).map((key) => {
              return (
                <ProductsGroup
                  key={key}
                  label={key}
                  categoyProducts={products[key]}
                />
              );
            })}
          </>
        )}
      </SmallContainer>
    </>
  );
};

export default Products;
