import React from "react";

import { CSSTransition } from "react-transition-group";
import styles from "styled-components";

import { BsXCircleFill } from "react-icons/bs";

const DURATION = "5000";

const StyledMessageModal = styles.div`
  position: fixed;
  left: 1rem;
  bottom:1rem;
  background-color:#fff;
  border-radius:0.25rem;
  overflow: hidden;
  z-index:25;
  box-shadow:4px 5px 10px 0px rgb(0 0 0 / 50%);;
  &.modal-enter-active {
    transform:scale(.8);
    transition:transform 200ms ease-in ${+DURATION - 200}ms;
  }
  // Animating Procress bar
  &.modal-enter .outer {
    .inner{
      width:100%;
      transition:width ${+DURATION - 200}ms ease-in ;
    }
  }
  &.modal-enter-active .outer {
    .inner{
      width:0%;
      transition:width ${+DURATION - 200}ms ease-in;
    }
  }
  &.modal-enter-done .outer{
    .inner{
      width:0%;
    }
  }

  .header{
    padding:.5rem;
    color:#333;
    
    display:flex;
    align-items:center;
    gap:.5rem;
  }

  .icon{
    color: ${({ color }) => (color ? color : "#f33")};
    font-size:1.25rem;
  }

  .outer{
    width:100%;
    height:3px;
    
    .inner{
      width:100%;
      height:100%;
      background-color:#f33;
    }
  }
  `;

const MessageModal = ({ message, show, setShow }) => {
  return (
    <CSSTransition in={!show} timeout={+DURATION} classNames="modal">
      <StyledMessageModal>
        <div className="header">
          <div className="icon">
            <BsXCircleFill />
          </div>
          <p className="text">{message}</p>
        </div>
        <div className="outer">
          <div className="inner"></div>
        </div>
      </StyledMessageModal>
    </CSSTransition>
  );
};

export default MessageModal;
