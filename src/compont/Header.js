import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="hide-when-mobile">
        <Link style={{color:'white'}} to="/">
          <h1>مؤسسة أساس</h1>
        </Link>
        <ul className="flex">
          <li className="main-list">
            <NavLink style={{color:'white'}} className="main-link" to="/">
              نبذه عن الشركه
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink style={{color:'white'}} className="main-link" to="/TeamClickk">
              فريق الشركه
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
