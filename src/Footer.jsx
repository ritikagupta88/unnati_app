import "./footer.css";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 col-12 mb-4">
            <h5 className="fw-bold">Unnati Credit Services</h5>
            <p className="pe-5"style={{fontSize:"12px"}}>
              It is a trusted financial solutions provider dedicated to helping individuals meet their short-term and long-term financial needs. We specialize in offering quick, reliable, and transparent loan services that are designed to provide immediate financial relief without unnecessary hassles.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-md-4 col-12 mb-4 ps-5">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled"style={{fontSize:"14px"}}>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Loans
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 col-12 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p>Email: support@unnatipay.in</p>
            <p>
              <a
                className="text-white text-decoration-none"
                href="tel:+919214870973"
              >
                <i className="bi bi-telephone-fill icon-shake"></i> +91 92148
                70973
              </a>
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="text-white fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-white fs-5">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="bg-white" />

        <div className="text-center mt-3">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} UnnatiPay. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
