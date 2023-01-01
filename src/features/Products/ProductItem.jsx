import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "./product-slice";
import style from "styled-components";

import { BiTrash, BiPencil } from "react-icons/bi";
import { Link } from "react-router-dom";

import { CSSTransition } from "react-transition-group";

import "./ProductItemAnimation.css";

const StyledProductItem = style.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  background-color:#444;
  padding:1rem;
  border-radius:.25rem;
  color:#fff;
  &+&{
    margin-top:1rem;
  }

  &:hover,
  &:focus-within{
    outline: 2px solid #f33333;
    cursor:pointer;
    transform:scale(1.01)
  }
  .Link:hover{
    transform:scale(1.05)
  }
  .productData{
    display:flex;
    align-items:center;
    gap:1rem;
  }
  .productData h2{
    font-weight:700;
  }
  .productData h3{
    font-weight:300;
    background-color:#ccc;
    color:#333;
    padding:0.25rem;
    border-radius:.25rem;
  }
  .actions{
    font-size:1.25rem;
    display:flex;
    gap:1rem;
  }
`;

const ProductItem = ({ label, price, id, category }) => {
  const dispatch = useDispatch();
  const deleteProductHandler = () => dispatch(deleteProduct({ id, category }));

  return (
    <CSSTransition in={true} timeout={300} appear={true}>
      <StyledProductItem>
        <div className='productData'>
          <h2>{label}</h2>
          <h3>{price}$</h3>
          <h3 className='Link'>
            <Link to={`/${category}/${id}`}>More info...</Link>
          </h3>
        </div>
        <div className='actions'>
          <button>
            <Link to={`edit_product/${category}/${id}`}>
              <BiPencil />
            </Link>
          </button>
          <button onClick={deleteProductHandler}>
            <BiTrash />
          </button>
        </div>
      </StyledProductItem>
    </CSSTransition>
  );
};

export default ProductItem;
