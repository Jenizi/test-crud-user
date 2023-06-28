import React from "react";

const Nav: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            REGISTRATION SYSTEM
          </a>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto"></ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
