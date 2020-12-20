import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header></header>
      <div className="global-wrapper">{children}</div>;<footer></footer>
    </>
  );
};

export default Layout;
