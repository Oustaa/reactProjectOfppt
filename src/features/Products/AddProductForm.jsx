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
    input,select{
      border:1px solid #e40606 !important;
      background-color:#bf4040 !important;
    }
    label{
      color:#bf4040;
    }
  }

  p{
    grid-column:2/6;
    margin-top:.25rem;
    font-size:0.8rem;
    color:#bf4040;
  }

  input,select{
    background-color:#333 !important;
    color:#fff !important;
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
    &:auto-fill {
      background-color:red;
    } 
  }
`;

const AddProductForm = () => {
  const { id } = useParams();

  const { products, type } = useSelector((state) => state.products);

  const [status, setStatus] = useState("idle");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputsValue, setInputValue] = useState({
    label: "",
    Price: "",
    category: "",
  });

  const [inputsValueValidation, setInputValueValidation] = useState({
    label: { validation: true, gotFocus: false },
    Price: { validation: true, gotFocus: false },
    category: { validation: true, gotFocus: false },
  });

  const canAdd = inputsValue?.label !== "" && inputsValue?.Price !== "";

  // handling input changes
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
      try {
        dispatch(addNewProduct(inputsValue));
        setStatus("success");
      } catch (error) {
        setStatus("rejected");
      }
    } else {
      try {
        dispatch(upDateProduct(inputsValue));
        setStatus("success");
      } catch (error) {
        setStatus("rejected");
      }
    }
  };

  // validating an input after it lose focus
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

  // setting a focused input to be focus
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

  // testing if a product exists or not if not rederect to home page
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

  // setting inputs value if we want to update
  useEffect(() => {
    setInputValue({
      label: "",
      Price: "",
      ProId: "",
    });

    if (id !== undefined) {
      const productUpdated = products.find(
        (product) => product.ProId === Number(id),
      );
      setInputValue(productUpdated);
    }
  }, [id, products]);

  // rederect to home page if updating or adding was success
  useEffect(() => {
    if (status === "success") navigate("/");
  }, [status, navigate]);

  return (
    <SmallContainer>
      <form onSubmit={formSubmetHandler}>
        <StyledFormHeader>Add New Product</StyledFormHeader>

        <FormControll
          className={
            inputsValueValidation.label.gotFocus &&
            !inputsValueValidation.label.validation
              ? "invalid"
              : ""
          }
        >
          <label htmlFor='label'>Label:</label>
          <input
            type='text'
            id='label'
            name='label'
            value={inputsValue?.label}
            onChange={inputChangeHandler}
            onFocus={inputFocusHandler}
            onBlur={inputBlurHandler}
          />
          {!inputsValueValidation.Price.validation ? (
            <p className='error_message'>You cant enter an empty value!!</p>
          ) : null}
        </FormControll>
        <FormControll
          className={
            inputsValueValidation.Price.gotFocus &&
            !inputsValueValidation.Price.validation
              ? "invalid"
              : ""
          }
        >
          <label htmlFor='Price'>Price:</label>
          <input
            type='text'
            id='Price'
            name='Price'
            value={inputsValue?.Price}
            onChange={inputChangeHandler}
            onFocus={inputFocusHandler}
            onBlur={inputBlurHandler}
          />
          {!inputsValueValidation.Price.validation ? (
            <p className='error_message'>You cant enter an empty value!!</p>
          ) : null}
        </FormControll>
        <FormControll
          className={
            inputsValueValidation.category.gotFocus &&
            !inputsValueValidation.category.validation
              ? "invalid"
              : ""
          }
        >
          <label htmlFor='category'>Category:</label>
          <select
            type='text'
            id='category'
            name='category'
            value={inputsValue?.category}
            onChange={inputChangeHandler}
            onFocus={inputFocusHandler}
            onBlur={inputBlurHandler}
          >
            <option value=''>--Select A Catigorie--</option>
          </select>
        </FormControll>
        <Button
          style={{ marginTop: "1rem" }}
          bgColor={{ h: 0, s: 68, l: 55 }}
          color='#fff'
          type='submit'
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
