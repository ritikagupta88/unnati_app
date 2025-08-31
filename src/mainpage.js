import "./style.css";
import "./media.css";

function Mainpage() {
  return (
    <>
      {/* Navbar */}
      <header className="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
            <a className="navbar-brand ms-5" href="www.google.com">
              <img
                src="/unnati_Logo.png"
                alt="Unnati Logo"
                className="logo img-fluid"
              />
            </a>

            <button
              className="navbar-toggler me-3 px-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#MobileMenu"
              aria-controls="MobileMenu"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                  <a className="nav-link" href="www.google.com">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="www.google.com">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="www.google.com">
                    Repay Loan
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="www.google.com">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="www.google.com">
                    Contact
                  </a>
                </li>
              </ul>
              <button className="btn-number rounded-5 ms-3" type="button">
                <a href="tel:+919540539345">+919540539345</a>
              </button>
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
            <button className="btn-number rounded-5 ms-3" type="button">
              +919540539345
            </button>
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

            <div className="col-lg-7 col-12">
              <div className="hero-form">
                <h1
                  className="fs-5 p-4 text-white rounded-top-3 shadow-sm mb-0"
                  style={{ backgroundColor: "rgb(21, 10, 182)" }}
                >
                  APPLY NOW OR CHECK YOUR LOAN ELIGIBILITY TODAY
                </h1>
                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLSc8LkKC3fepOrafUFVtUk8v409jwmMRXUodZv6FHmxtkbnCfA/formResponse"
                  method="POST"
                  target="_self"
                  className="border bg-white rounded-bottom-3 shadow-sm p-3"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="entry.1594329448"
                        placeholder="Name as per Pancard"
                        className="form-control p-2 mb-3 rounded-5"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="entry.2027968812"
                        placeholder="Email"
                        className="form-control mb-3 p-2 rounded-5"
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="tel"
                        name="entry.689942532"
                        pattern="[0-9]{10}"
                        placeholder="Phone No."
                        className="form-control p-2 mb-3 rounded-5"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="entry.1389181890"
                        pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                        placeholder="Pancard No."
                        className="form-control p-2 mb-3 rounded-5"
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="entry.826869237"
                        pattern="[0-9]{12}"
                        placeholder="Aadhar No."
                        className="form-control p-2 mb-3 rounded-5"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="number"
                        name="entry.30947058"
                        placeholder="Loan Amount"
                        className="form-control p-2 mb-3 rounded-5"
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="number"
                        name="entry.61431079"
                        placeholder="Monthly Salary"
                        className="form-control p-2 mb-3 rounded-5"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="date"
                        name=""
                        placeholder="date of birth"
                        className="form-control p-2 mb-3 rounded-5"
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <select
                        name="entry.440370727"
                        className="form-control p-2 mb-3 rounded-5"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select
                        name="entry.624365150"
                        className="form-control p-2 mb-3 rounded-5"
                        required
                      >
                        <option value="">Select Purpose</option>
                        <option value="Personal Loan">Personal Loan</option>
                        <option value="Home Loan">Home Loan</option>
                        <option value="Car Loan">Car Loan</option>
                        <option value="Personal Loan">Loan Payment</option>
                        <option value="Home Loan">Wedding Loan</option>
                        <option value="Car Loan">Medical Loan</option>
                        <option value="Personal Loan">Education Loan</option>
                        <option value="Home Loan">Travel Loan</option>
                        <option value="Car Loan">Business Loan</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <textarea
                    name="entry.617718779"
                    placeholder="Enter your address"
                    className="form-control p-3 rounded-5"
                    required
                  ></textarea>

                  <label className="form-check-label m-3">
                    <input type="checkbox" name="terms" required /> I Agree to
                    the Unnati
                    <span className="text-primary">
                      {" "}
                      "Terms and Conditions"{" "}
                    </span>
                    and <span className="text-primary">"Privacy Policy"</span>
                  </label>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn-submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-5">
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
            Load Disbursed to your Account
          </div>
        </div>
        {/* For mobile, show arrows below each box */}
        <div className="d-lg-none mt-3">
          <div className="text-center" style={{ fontSize: "2rem" }}>
            &darr;
          </div>
          <div className="text-center" style={{ fontSize: "2rem" }}>
            &darr;
          </div>
          <div className="text-center" style={{ fontSize: "2rem" }}>
            &darr;
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainpage;
