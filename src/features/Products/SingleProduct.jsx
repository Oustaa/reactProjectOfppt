import React from "react";

import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import SmallContainer from "../../StyledComponnents/SmallContainer";
import styles from "styled-components";

const StyledSinglProduct = styles.div`
  display:flex; 
  gap:1rem;

  *{
    font-weight:500;
  }
  .img{
    height:300px;
    width:400px;
    background-color:#ccc;
    border-radius:0.25rem;
    display:flex; 
    align-items:center;
    justify-content:center;
    font-weight:500;
  }
  
  .info{
    text-align:left;
    &>*{
      margin-bottom:0.5rem;
    }
    .extra_details{
      margin-top:1rem;
    }
    h1{
      font-weight:700;
      font-size:1.2rem;
    }
    ul{
      border-top:1px solid #333;
      padding-top:0.5rem;
      li+li{
        margin-top:.5rem;
      }
      li span {
        font-weight:400;
      }
    }
  }
`;

const SmartPhoneInfo = ({
  screensize,
  memory,
  ram,
  builtInvoiceAssistant,
  voiceAssistant,
}) => (
  <>
    <h2 className='extra_details'>Extra details:</h2>
    <ul>
      <li>
        <span>Screen Size: </span> {screensize} inch
      </li>
      <li>
        <span>Memory: </span> {memory} Go
      </li>
      <li>
        <span>Ram: </span> {ram} Go
      </li>
      {voiceAssistant === 1 && (
        <li>
          <span>Built In Voice Assistant: </span> {builtInvoiceAssistant}
        </li>
      )}
    </ul>
  </>
);

const PcInfo = ({ cpu, gpu, ram, "keyboard&mouse": isIncloded }) => (
  <>
    <h2 className='extra_details'>Extra details:</h2>
    <ul>
      <li>
        <span>Cpu: </span> {cpu}
      </li>
      <li>
        <span>Gpu: </span> {gpu}
      </li>
      <li>
        <span>Ram: </span> {ram} Go
      </li>
      <li>
        <span>keyboard & mouse: </span>
        {isIncloded === 1 ? "Are Incloded" : " Are Not incloded"}
      </li>
    </ul>
  </>
);

const SingleProduct = () => {
  const { id, category } = useParams();
  const { products } = useSelector((state) => state.products);
  const product = products[category]?.find((product) => +product.id === +id);

  return (
    <SmallContainer>
      <StyledSinglProduct>
        <div className='img'>{product.label} Image</div>
        <div className='info'>
          <h1>{product.label}</h1>
          <h2>{product.price}$</h2>
          {product.category === "smartphones" && (
            <SmartPhoneInfo {...product} />
          )}
          {product.category === "pc&laptops" && <PcInfo {...product} />}
        </div>
      </StyledSinglProduct>
    </SmallContainer>
  );
};

export default SingleProduct;
