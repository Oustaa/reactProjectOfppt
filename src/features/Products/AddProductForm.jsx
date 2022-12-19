import React, { useEffect, useRef, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct, upDateProduct } from "./product-slice";

import SmallContainer from "../../StyledComponnents/SmallContainer";
import { Button } from "../../StyledComponnents";

import style from "styled-components";

const StyledFormHeader = style.h1`
    font-size:1rem;
    font-weight:600;
`;

const FormControll = style.div`
  display:grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  text-align:left;
  margin-top:1rem;

  &.invalid{
    input{
      border:1px solid #e40606;
      background-color:#bf4040;;
    }
    label{
      color:#bf4040;
    }
  }


  input{
    background-color:#333;
    color:#fff;
    padding:.35rem;
    font-weight:100;
    border-radius:.25rem;
    border:1px solid #333;

    grid-column: 2/-1;

    &:focus,
    &:hover,
    &:focus-visible{
      outline:none;
    }
    &:read-only{
      background-color:#ccc;
      border-color:#ccc;
      color:#333;
    }
    &:auto-fill {
      background-color:red;
    } 
  }
`;

const AddProductForm = () => {
  const { id } = useParams();

  const { products, type } = useSelector((state) => state.products);

  const idInputRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputsValue, setInputValue] = useState({
    label: "",
    Price: "",
    ProId: "",
  });

  const [inputsValueValidation, setInputValueValidation] = useState({
    label: { validation: true, gotFocus: false },
    Price: { validation: true, gotFocus: false },
  });

  const canAdd = inputsValue?.label !== "" && inputsValue?.Price !== "";

  const inputChangeHandler = (e) => {
    setInputValue((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    setInputValueValidation((prev) => {
      const name = e.target.name;
      return {
        ...prev,
        [name]: { validation: true, gotFocus: true },
      };
    });
  };

  const formSubmetHandler = (e) => {
    e.preventDefault();
    if (!canAdd) return;
    if (!id) {
      dispatch(addNewProduct(inputsValue));
    } else {
      dispatch(upDateProduct(inputsValue));
    }
  };

  const inputBlurHandler = (e) => {
    if (e.target.name !== "ProId" && e.target.value === "") {
      setInputValueValidation((prev) => {
        const name = e.target.name;
        return {
          ...prev,
          [name]: {
            validation: false,
            gotFocus: prev[name].gotFocus,
          },
        };
      });
    }
  };

  const inputFocusHandler = (e) => {
    const name = e.target.name;
    if (name === "ProId") return;
    setInputValueValidation((prev) => {
      return {
        ...prev,
        [name]: { validation: prev[name].validation, gotFocus: true },
      };
    });
  };

  useEffect(() => {
    if (id !== undefined)
      fetch(`http://localhost:1500/api/products/${id}/exists`)
        .then((data) => data.json())
        .then((data) => {
          if (data.length === 0) navigate("/");
        })
        .catch((error) => {
          navigate("/");
        });
  }, [id, navigate]);

  useEffect(() => {
    setInputValue({
      label: "",
      Price: "",
      ProId: "",
    });
    idInputRef.current.readOnly = false;

    if (id !== undefined) {
      const productUpdated = products.find(
        (product) => product.ProId === Number(id)
      );
      setInputValue(productUpdated);
      idInputRef.current.readOnly = true;
    }
  }, [id, products]);

  // useEffect(() => {
  //   if (status === "success") navigate("/");
  // }, [status, navigate]);

  return (
    <SmallContainer>
      <form onSubmit={formSubmetHandler}>
        <StyledFormHeader>Add New Product</StyledFormHeader>
        <FormControll>
          <label htmlFor="ProId">Id:</label>
          <input
            type="text"
            id="ProId"
            name="ProId"
            ref={idInputRef}
            value={inputsValue?.ProId}
            onChange={inputChangeHandler}
            onFocus={inputFocusHandler}
          />
        </FormControll>
        <FormControll
          className={
            inputsValueValidation.label.gotFocus &&
            !inputsValueValidation.label.validation
              ? "invalid"
              : ""
          }
        >
          <label htmlFor="label">Label:</label>
          <input
            type="text"
            id="label"
            name="label"
            value={inputsValue?.label}
            onChange={inputChangeHandler}
            onFocus={inputFocusHandler}
            onBlur={inputBlurHandler}
          />
        </FormControll>
        <FormControll
          className={
            inputsValueValidation.Price.gotFocus &&
            !inputsValueValidation.Price.validation
              ? "invalid"
              : ""
          }
        >
          <label htmlFor="Price">Price:</label>
          <input
            type="text"
            id="Price"
            name="Price"
            value={inputsValue?.Price}
            onChange={inputChangeHandler}
            onFocus={inputFocusHandler}
            onBlur={inputBlurHandler}
          />
        </FormControll>
        <Button
          style={{ marginTop: "1rem" }}
          bgColor={{ h: 0, s: 68, l: 55 }}
          color="#fff"
          type="submit"
        >
          {id
            ? type === "updating"
              ? "Saving..."
              : "Save Changes"
            : type === "Adding"
            ? "Adding..."
            : "Add Product"}
        </Button>
      </form>
    </SmallContainer>
  );
};

export default AddProductForm;
