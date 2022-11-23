import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Header(props) {
  const [active, setActive] = useState(false);

  return (
    <CustomHeader className="header">
      <div className="header__container">
        <Link to="/" className="header-logo">
          bickraft
        </Link>
        <div className="header__navigation">
          <nav className={`header-menu menu ${active ? "_active" : ""}`}>
            <ul className="menu__body">
              <CustomLink to="/bicicletas" className="menu__link">
                Bicicletas
              </CustomLink>
              <CustomLink to="/seguros" className="menu__link">
                Seguros
              </CustomLink>
              <CustomLink to="/contato" className="menu__link">
                Contato
              </CustomLink>
            </ul>
          </nav>
          <div
            className={`menu-icon ${active ? "_active" : ""}`}
            onClick={() => setActive((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </CustomHeader>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

function CustomHeader({ children, ...props }) {
  const resolvePath = useResolvedPath();
  const isActive = useMatch({ path: resolvePath.pathname });
  return (
    <header className={`header ${isActive ? "active" : ""}`}>{children}</header>
  );
}

export default Header;
