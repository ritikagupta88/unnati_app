import "./style.css";
import "./media.css";
import { LeadForm } from "./leadForm";

function Mainpage() {
  return (
    <>
      {/* Navbar */}
      <header className="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img
                  src="/unnati_Logo.png"
                  alt="Unnati Logo"
                  className="logo img-fluid"
                />
              </a>
              <button
                className="navbar-toggler"
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
                    <a className="nav-link mb-3" href="www.google.com">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mb-3" href="www.google.com">
                      About Us{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mb-3" href="www.google.com">
                      Repay Loan{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mb-3" href="www.google.com">
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mb-3" href="www.google.com">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <a
                  href="tel:+919540539345"
                  className="btn-number rounded-5 ms-3"
                >
                  +919540539345
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* Offcanvas menu */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="MobileMenu"
          aria-labelledby="MobileMenuLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="MobileMenuLabel">
              <a className="navbar-brand ms-2" href="www.google.com">
                <img
                  src="/unnati_Logo.png"
                  alt="Unnati Logo"
                  className="logo img-fluid"
                />
              </a>
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
                <a className="nav-link mb-3" href="www.google.com">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-3" href="www.google.com">
                  About Us{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-3" href="www.google.com">
                  Repay Loan{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-3" href="www.google.com">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-3" href="www.google.com">
                  Contact Us
                </a>
              </li>
            </ul>
            <a
                  href="tel:+919540539345"
                  className="btn-number rounded-5 ms-3"
                >
                  +919540539345
                </a>
          </div>
        </div>
      </header>

      {/* Hero-section */}
      <div className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12">
              <div className="hero-content text-center">
                <h1>
                  Ensure a fast loan <br /> of up to 1 lakh
                </h1>
              </div>

              <div className="btn-hero-content p-2 m-4 text-center rounded-3">
                Instant Approval
              </div>
              <div className="btn-hero-content p-2 m-4 text-center rounded-3">
                Hassle-free application
              </div>
              <div className="btn-hero-content p-2 m-4 text-center rounded-3">
                Competitive Interest
              </div>
              <div className="btn-hero-content p-2 m-4 text-center rounded-3">
                No-Collateral
              </div>
            </div>

            {/* form section */}
            <div className="col-lg-7 col-12 desktop-only">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-only">
        <LeadForm />
      </div>
      <div className="mx-5 pt-5 working-container">
        <h2 className="text-center fw-bold mb-3">How It Works</h2>
        <div className="row align-items-center justify-content-center">
          <div
            style={{ width: "20%" }}
            className="how-it-works-card col-lg-3 col-12 border rounded-2 p-2 text-center position-relative"
          >
            Apply for loan
          </div>
          <div className="text-center p-0 m-0" style={{ width: "50px" }}>
            <span style={{ fontSize: "2rem" }}>&rarr;</span>
          </div>
          <div
            style={{ width: "20%" }}
            className="how-it-works-card col-lg-3 col-12 border rounded-2 p-2 text-center position-relative"
          >
            Upload Documents
          </div>
          <div className="text-center p-0 m-0" style={{ width: "50px" }}>
            <span style={{ fontSize: "2rem" }}>&rarr;</span>
          </div>
          <div
            style={{ width: "20%" }}
            className="how-it-works-card col-lg-3 col-12 border rounded-2 p-2 text-center position-relative"
          >
            Wait for the Approval
          </div>
          <div className="text-center p-0 m-0" style={{ width: "50px" }}>
            <span style={{ fontSize: "2rem" }}>&rarr;</span>
          </div>
          <div
            style={{ width: "20%" }}
            className="how-it-works-card col-lg-3 col-12 border rounded-2 p-2 text-center position-relative"
          >
            Loan Disbursed to your Account
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainpage;
