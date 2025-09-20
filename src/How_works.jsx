import working from "./images/working.png";
import checkElegibility from "./images/speed.svg";
import details from "./images/support.svg";
import submit from "./images/submitdoc.svg";
import Approval from "./images/approval.svg";
import { HowItWorksCards } from "./HowItWorksCards";

export const Working = () => {
  const cardsConfig = [
    {
      imgsrc: details,
      title: "Enter your details",
      description:
        "Provide all necessary information in the form, including personal details, loan amount, and loan purpose",
    },
    {
      imgsrc: checkElegibility,
      title: "Eligibility Check",
      description:
        "Check your eligibility for a personal loan in just a few minutes with our quick and easy process.",
    },
    {
      imgsrc: submit,
      title: "Submit Documents",
      description:
        "Upload the necessary documents like PAN Card,Aadhar Card and neccessary documents to support your loan application and expedite the process.",
    },
    {
      imgsrc: Approval,
      title: "Get Disbursal & Approval",
      description:
        "Once your application is approved, you will receive the loan amount directly in your bank account.",
    },
  ];
  return (
    <>
      {/* <div className="container mt-4">
        <div className="row mobile-only-flex">
          <div
            className="col-md-1 rounded-2 mobile-22-width"
            style={{
              background:
                "linear-gradient(147deg, #b5bae8ff 14.12%, #cfc0e8ff 80.26%)",
              height: "60px",
              width: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          > */}
           <div className="how-it-works-section container pt-md-5 pt-4">
        <h2 className="text-center fw-bold mb-4">
          Steps To Get Your Short-Term Personal Loan Approval
        </h2>
        <div className="row">
          <div className="col-md-7 col-12 pe-4">
      {cardsConfig.map((card) => {
        return (
          <HowItWorksCards
            imgSrc={card?.imgsrc}
            title={card?.title}
            description={card?.description}
          ></HowItWorksCards>
        );
      })}
      </div>
      

      {/* <div className="how-it-works-section container pt-md-5 pt-4">
        <h2 className="text-center fw-bold mb-4">
          Steps To Get Your Short-Term Personal Loan Approval
        </h2>
        <div className="row">
          <div className="col-md-7 col-12 pe-4">
            <HowItWorksCards
              imgSrc={details}
              title="Enter Your Details"
              description="Provide all necessary information in the form, including
                    personal details, loan amount, and loan purpose."
            /> */}

      {/* <div className="container mt-4">
              <div className="row">
                <div
                  className="col-md-1 rounded-2 "
                  style={{
                    background:
                      "linear-gradient(147deg, #a6aef0ff 14.12%, #af94daff 80.26%)",
                    height: "60px",
                    width: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={checkElegibility} alt="img" className="img-fluid" />
                </div>
                <div className="col-md-11">
                  <h5 className="fw-semibold"> Eligibility Check</h5>
                  <p>
                    Check your eligibility for a personal loan in just a few
                    minutes with our quick and easy process.
                  </p>
                </div>
              </div>
            </div> */}
      {/* <div className="container mt-4">
              <div className="row g-4">
                <div
                  className="col-md-1 rounded-2 "
                  style={{
                    background:
                      "linear-gradient(147deg, #afb8f9ff 14.12%, #a89cbbff 80.26%)",
                    height: "60px",
                    width: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={submit} alt="img" className="img-fluid" />
                </div>
                <div className="col-md-11">
                  <h5 className="fw-semibold"> Submit Documents</h5>
                  <p>
                    Upload the necessary documents like PAN Card,Aadhar Card and
                    neccessary documents to support your loan application and
                    expedite the process.
                  </p>
                </div>
              </div>
            </div> */}
      {/* <div className="container mt-4">
              <div className="row g-4">
                <div
                  className="col-md-1 rounded-2 "
                  style={{
                    background:
                      "linear-gradient(147deg, #7f89b3ff 14.12%, #cfc0e8ff 80.26%)",
                    height: "60px",
                    width: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={Approval} alt="img" className="img-fluid" />
                </div>
                <div className="col-md-11">
                  <h5 className="fw-semibold"> Get Disbursal & Approval</h5>
                  <p>
                    Once your application is approved, you will receive the loan
                    amount directly in your bank account.
                  </p>
                </div>
              </div>
            </div> */}
      {/* </div> */}
      <div className="col-md-5 col-12 mt-3">
        <img src={working} alt="img" className="img-fluid rounded-3 h-100" />
      </div>
      </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};
