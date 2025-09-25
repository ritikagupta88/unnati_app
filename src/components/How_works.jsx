import working from "../images/working.png";
import checkElegibility from "../images/speed.svg";
import details from "../images/support.svg";
import submit from "../images/submitdoc.svg";
import Approval from "../images/approval.svg";
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

          <div className="col-md-5 col-12 mt-3">
            <img
              src={working}
              alt="img"
              className="img-fluid rounded-3 h-100"
            />
          </div>
        </div>
      </div>
    </>
  );
};
