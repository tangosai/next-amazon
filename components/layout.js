import React from "react";

const Layout = ({ children, className = null }) => {
  return (
    <>
      <div className={className + " " + "max-w-screen-xl mx-auto px-5"}>
        {children}
      </div>
    </>
  );
};

export default Layout;
