import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="header container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                src="/unnati_Logo.png"
                alt="Unnati Logo"
                className="logo img-fluid ms-2"
              />
            </Link>
            <button
              className="navbar-toggler me-3 border-dark px-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#MobileMenu"
              aria-controls="MobileMenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link btn btn-link"
                    style={{ textDecoration: "none" }}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{ textDecoration: "none" }}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{ textDecoration: "none" }}
                    to="/repay-loan"
                  >
                    Repay Loan
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{ textDecoration: "none" }}
                    to="/faq"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{ textDecoration: "none" }}
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              <a href="tel:+919214870973" className="btn-number rounded-5 ms-3">
                +919214870973
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="MobileMenu"
        aria-labelledby="MobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="MobileMenuLabel">
            <Link className="navbar-brand" to="/">
              <img
                src="/unnati_Logo.png"
                alt="Unnati Logo"
                className="logo img-fluid"
              />
            </Link>
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link mb-1 fs-6" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mb-1 fs-6" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mb-1 fs-6" to="/repay-loan">
                Repay Loan
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mb-1 fs-6" to="/faq">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mb-4 fs-6" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <a href="tel:+919214870973" className="btn-number rounded-5 ms-3">
            +919214870973
          </a>
        </div>
      </div>
    </>
  );
};
