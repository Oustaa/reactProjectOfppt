import style from "styled-components";

export const Button = style.button`
  background-color:${({ bgColor }) =>
    bgColor
      ? Object.keys(bgColor).reduce(
          (prev, next, i) =>
            prev + bgColor[next] + (i !== 0 ? "%" : "") + (i !== 2 ? "," : ""),
          "hsl(",
        ) + ")"
      : "#333"};
  padding:.25rem;
  border-radius:.25rem;
  color:${({ color }) => (color ? color : "#fff")};

  &:hover{
  background-color:${({ bgColor }) => {
    const updatedDta = { ...bgColor, l: bgColor?.l - 5 };
    return updatedDta
      ? Object.keys(updatedDta).reduce(
          (prev, next, i) =>
            prev +
            updatedDta[next] +
            (i !== 0 ? "%" : "") +
            (i !== 2 ? "," : ""),
          "hsl(",
        ) + ")"
      : "#333";
  }};
  color:#fff;
  }
`;

export const FormControll = style.div`
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

export const RadioBtn = style.div`
  display:flex;
  gap:.5rem;
  align-items:center;
`;
