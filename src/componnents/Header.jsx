import React from "react";
import style from "styled-components";

import { NavLink } from "react-router-dom";

import Container from "../StyledComponnents/Container";

const StyledHeader = style.header`
  background-color:#fff;
  color:var(--primaryGray);
  padding:1rem 0;

  position:sticky;
  top:0;

  .logo{
   font-weight:500;
   font-size:1.50rem;
   color:#f33;
  }

  nav ul {
   display: flex;
   gap: 1rem
  }
  a{
    padding:.25rem;
  }
  a:hover,
  a:focus{
    background-color:#333;
    color:#fff;
    border-radius:0.25rem;
  }
`;

const extraSltyls = `
  display: flex;
  justify-content:space-between;
  align-items:center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container extraSltyls={extraSltyls}>
        <div className="logo">Projet</div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/add_product">Add Product</NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
