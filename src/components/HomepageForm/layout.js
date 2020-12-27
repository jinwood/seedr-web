import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <header></header>
      <div className="container">{children}</div>
      <footer></footer>
    </div>
  );
};

export default Layout;
