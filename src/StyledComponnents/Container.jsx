import style from "styled-components";

const Container = style.div`
  width: calc(100% - 2rem);
  max-width: 1100px;
  margin-inline:auto;
  padding:1rem 0;
  ${({ extraSltyls }) => extraSltyls}  
`;

export default Container;
