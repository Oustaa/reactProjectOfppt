import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

// import { MessageModal } from "../StyledComponnents/MessageModal";

const Layout = () => {
  // const [show, setShow] = useState(false);

  // const toggleMessage = () => {
  //   setShow((prev) => !prev);
  // };

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <button onClick={toggleMessage}>Toggle</button> */}
      {/* <MessageModal className={show ? "hide" : "show"} /> */}
    </>
  );
};

export default Layout;
