import "../NavBar/Navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg border p-3">
      <div class="container-fluid">
        <div className="navbar-brand">
          <NavLink to="/">Produto Master</NavLink>
        </div>
        <div id="navbarNav">
          <ul className="navbar-nav">
            <div className="nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  Produtos
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
