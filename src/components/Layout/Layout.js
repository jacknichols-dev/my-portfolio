import React from "react";
import Nav from "../Nav/Nav";

const Layout = (props) => {
  return (
    <>
      <Nav />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
