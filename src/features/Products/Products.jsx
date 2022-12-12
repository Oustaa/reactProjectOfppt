import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "./ProductItem";

import {
  orderProcuctsByPriceAsc,
  orderProcuctsByPriceDes,
} from "./product-slice";

import style from "styled-components";
import { Button } from "../../StyledComponnents/index";
import SmallContainer from "../../StyledComponnents/SmallContainer";

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
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  const [orderBy, setOrderBy] = useState("1");

  useEffect(() => {
    if (orderBy === "1") {
      dispatch(orderProcuctsByPriceAsc());
    } else if (orderBy === "2") {
      dispatch(orderProcuctsByPriceDes());
    }
  }, [orderBy, dispatch]);

  const selectChangeHandler = (e) => {
    console.log(e.target);
    setOrderBy(e.target.value);
  };

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
              <Link to="/add_product">Add New Product</Link>
            </Button>
          </>
        ) : (
          <>
            <StyledOrderBy>
              <h2>Order By: </h2>
              <select onChange={selectChangeHandler} value={orderBy}>
                <option value="1">Price (Asc)</option>
                <option value="2">Price (Des)</option>
              </select>
            </StyledOrderBy>
            {products.map((product) => (
              <ProductItem key={product.ProId} {...product} />
            ))}
          </>
        )}
      </SmallContainer>
    </>
  );
};

export default Products;
