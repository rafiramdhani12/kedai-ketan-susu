import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <Link className="btn btn-ghost text-xl" to="/">
          kedai k&2
        </Link>
      </div>
    </>
  );
};

export default Navbar;
