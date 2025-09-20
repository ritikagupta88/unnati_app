import heroImage from "./images/hero-image.png";
export const HeroSection = () => {
  return (
    <>
     
        <div className="container text-center">
          <h1 className=" fw-bold mb-3">
            Quick & Reliable Short-Term Personal Loans
          </h1>
          <p>Explore our best offers across our loan plans.</p>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-12">
              <img src={heroImage} alt="img" className="hero-img img-fluid mt-4 h-100 border-0" />
            </div>
            <div className="col-md-7 col-12" style={{ marginTop: "5rem" }}>
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-4 mb-3">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body text-center">
                        <h5 className="card-title fw-bold">
                          Shop with Ease Loan
                        </h5>
                        <p className="card-text">
                          Get the things you love today with our Shopping Loan.
                        </p>
                        <button className="btn btn-outline-dark py-1" style={{fontSize:"12px"}}>
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-4 mb-3">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body text-center">
                        <h5 className="card-title fw-bold"> Quick Emergency Loan</h5>
                        <p className="card-text">
                          Quick funds to support you in unexpected situations.
                        </p>
                        <button className="btn btn-outline-dark py-1" style={{fontSize:"12px"}}>
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-4 mb-3">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body text-center">
                        <h5 className="card-title fw-bold">
                          Bill Payment Loan
                        </h5>
                        <p className="card-text">
                          Get the funds you need to pay your bills on time.
                        </p>
                        <button className="btn btn-outline-dark py-1" style={{fontSize:"12px"}}>
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-4  mb-3">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body text-center">
                        <h5 className="card-title fw-bold">
                          Travel Support Loan
                        </h5>
                        <p className="card-text">
                          Travel stress-free with flexible loan options for vacations.
                        </p>
                        <button className="btn btn-outline-dark py-1" style={{fontSize:"12px"}}>
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-4  mb-3">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body text-center">
                        <h5 className="card-title fw-bold">Home Repair Loan</h5>
                        <p className="card-text">
                          Give your house a new look with our Home Improvement
                          Loan.
                        </p>
                        <button className="btn btn-outline-dark py-1" style={{fontSize:"12px"}}>
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-4 mb-3">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body text-center">
                        <h5 className="card-title fw-bold">
                          Household Expense Loan
                        </h5>
                        <p className="card-text">
                          Get the funds you need to manage your household
                          expenses.
                        </p>
                        <button className="btn btn-outline-dark py-1" style={{fontSize:"12px"}}>
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};
