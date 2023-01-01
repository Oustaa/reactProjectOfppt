import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { upDateProduct } from "./product-slice";

import PcInfo from "./MoreInfo/PcInfo";
import SmartPhonesInfo from "./MoreInfo/SmartPhonesInfo";

import SmallContainer from "../../StyledComponnents/SmallContainer";
import { Button, FormControll } from "../../StyledComponnents";

import style from "styled-components";

const StyledFormHeader = style.h1`
    font-size:1rem;
    font-weight:600;
`;

const UpdateProductForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id, category } = useParams();
  const { type } = useSelector((state) => state.products);

  const [status, setStatus] = useState("idle");

  const [inputsValue, setInputValue] = useState({
    label: "",
    price: "",
    category: "",
  });

  const [inputsValueValidation, setInputValueValidation] = useState({
    label: { validation: true, gotFocus: false },
    price: { validation: true, gotFocus: false },
    category: { validation: true, gotFocus: false },
  });

  let canAdd = false;
  if (inputsValue.category === "pc&laptops") {
    canAdd =
      inputsValue?.label !== "" &&
      inputsValue?.price !== "" &&
      inputsValue?.cpu !== "" &&
      inputsValue?.gpu !== "" &&
      inputsValue?.ram !== "";
  } else if (inputsValue.category === "smartphones") {
    canAdd =
      inputsValue?.label !== "" &&
      inputsValue?.price !== "" &&
      inputsValue?.screensize !== "" &&
      inputsValue?.ram !== "";
  }

  useEffect(() => {
    fetch(`http://localhost:1500/api/${category}/${id}`)
      .then((resp) => resp.json())
      .then((data) => setInputValue(data[0]));
  }, [category, id]);

  // handling input changes
  const inputChangeHandler = (e) => {
    if (e.target.name === "category") {
      setInputValue((prev) => {
        return {
          label: prev.label,
          price: prev.price,
          category: prev.category,
        };
      });
    }
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

  // Form Submit handler
  const formSubmetHandler = (e) => {
    e.preventDefault();
    if (!canAdd) return;

    try {
      dispatch(upDateProduct({ ...inputsValue, id }));
      setStatus("success");
    } catch (error) {
      setStatus("rejected");
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
            gotFocus: prev[name]?.gotFocus,
          },
        };
      });
    }
  };

  // setting a focused input to be focus
  const inputFocusHandler = (e) => {
    const name = e.target.name;
    setInputValueValidation((prev) => {
      return {
        ...prev,
        [name]: { validation: prev[name]?.validation, gotFocus: true },
      };
    });
  };

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
          {!inputsValueValidation.label.validation ? (
            <p className='error_message'>You cant enter an empty value!!</p>
          ) : null}
        </FormControll>
        <FormControll
          className={
            inputsValueValidation.price.gotFocus &&
            !inputsValueValidation.price.validation
              ? "invalid"
              : ""
          }
        >
          <label htmlFor='price'>price:</label>
          <input
            type='text'
            id='price'
            name='price'
            value={inputsValue?.price}
            onChange={inputChangeHandler}
            onFocus={inputFocusHandler}
            onBlur={inputBlurHandler}
          />
          {!inputsValueValidation.price.validation ? (
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
            <option value='pc&laptops'>Pc & Laptops</option>
            <option value='smartphones'>Smartphone</option>
          </select>
        </FormControll>
        {inputsValue.category === "pc&laptops" && (
          <PcInfo
            handelBlur={inputBlurHandler}
            handelFocus={inputFocusHandler}
            handleChange={inputChangeHandler}
            inputsValue={inputsValue}
            valueValidation={inputsValueValidation}
          />
        )}
        {inputsValue.category === "smartphones" && (
          <SmartPhonesInfo
            handelBlur={inputBlurHandler}
            handelFocus={inputFocusHandler}
            handleChange={inputChangeHandler}
            inputsValue={inputsValue}
            valueValidation={inputsValueValidation}
          />
        )}
        <Button
          style={{ marginTop: "1rem" }}
          bgColor={{ h: 0, s: 68, l: 55 }}
          color='#fff'
          type='submit'
          disabled={!canAdd}
        >
          {type === "updating" ? "Updating..." : "Update Product"}
        </Button>
      </form>
    </SmallContainer>
  );
};

export default UpdateProductForm;
