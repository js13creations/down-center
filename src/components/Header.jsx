import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <Link className="navbar-brand text-light bg-main-yellow p-1" to="/">
          Down Career
        </Link>
        <button
          className="navbar-toggler outline-none border-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {ROUTES.map((route) => (
              <li key={route.path} className="nav-item">
                <Link className="nav-link text-uppercase" to={route.path}>
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
