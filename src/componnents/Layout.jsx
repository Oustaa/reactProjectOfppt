import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";
import MessageModal from "./MessageModal";

const Layout = () => {
  const { error } = useSelector((state) => state.products);
  const [show, setShow] = useState(!error);

  useEffect(() => {
    setShow(!error);
    if (error === false) setShow(true);
  }, [error]);

  return (
    <>
      <MessageModal
        show={show}
        status={"loading"}
        message={"Network Error"}
        setShow={setShow}
      />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
