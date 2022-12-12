import React from "react";

import style from "styled-components";
import SmallContainer from "../StyledComponnents/SmallContainer";

const StyledErrorMessage = style.div`
 padding:5rem;
 
 h1{
  font-size:2rem;
  margin-bottom:1rem;
 }
`;

const ErrorPage = () => {
  return (
    <SmallContainer>
      <StyledErrorMessage>
        <h1>ERROR 404!</h1>
        <p>Sorry Page Not Found! You can Try Later</p>
      </StyledErrorMessage>
    </SmallContainer>
  );
};

export default ErrorPage;
