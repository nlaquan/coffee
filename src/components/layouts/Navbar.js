import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed-top d-flex bg-white align-items-center box-shadow justify-content-between border-bottom px-4">
      <h5 className="my-0 mr-md-auto">Logo</h5>
      <nav className="navbar navbar-expand-lg navbar-light mr-md-3">
        <div>Avatar</div>
        <div>Cart</div>
      </nav>
    </div>
  );
};

export default Navbar;
