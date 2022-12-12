import style from "styled-components";

export const MessageModal = style.div`
  width:100%;
  background-color:#fff;
  padding:1rem;
  position:absolute;
  bottom:0;
  animation: showMessage .500s forwards cubic-bezier(0.28,-0.31, 0.6, 1.41);
`;
