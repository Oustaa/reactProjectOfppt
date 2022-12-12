import style from "styled-components";

export const Button = style.button`
  background-color:${({ bgColor }) =>
    bgColor
      ? Object.keys(bgColor).reduce(
          (prev, next, i) =>
            prev + bgColor[next] + (i !== 0 ? "%" : "") + (i !== 2 ? "," : ""),
          "hsl("
        ) + ")"
      : "#333"};
  padding:.25rem;
  border-radius:.25rem;
  color:${({ color }) => (color ? color : "#fff")};

  &:hover{
  background-color:${({ bgColor }) => {
    const updatedDta = { ...bgColor, l: bgColor.l - 5 };
    return updatedDta
      ? Object.keys(updatedDta).reduce(
          (prev, next, i) =>
            prev +
            updatedDta[next] +
            (i !== 0 ? "%" : "") +
            (i !== 2 ? "," : ""),
          "hsl("
        ) + ")"
      : "#333";
  }};
  color:#fff;
  }
`;
