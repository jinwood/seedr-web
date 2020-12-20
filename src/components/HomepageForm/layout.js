import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header></header>
      <div className="global-wrapper">{children}</div>;<footer></footer>
      <div className="left-wrapper"></div>
      <div className="right-wrapper"></div>
    </div>
  );
};

export default Layout;
