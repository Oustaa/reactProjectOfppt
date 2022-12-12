import style from "styled-components";

const SmallContainer = style.div`
 width: calc(100% - 2rem);
  max-width:800px;
  margin: 2rem auto;
  background-color:#fff;
  color:#333;
  text-align:center; 
  border-radius:.25rem;
  padding:1rem;
  
`;

export default SmallContainer;
