import heroImage from "./images/hero-image.png";
import { HeroSectionCards } from "./HeroSectionCards";
export const HeroSection = () => {
  const cardsConfig = [
    {
      title: "Shop with Ease Loan",
      description: "Get the things you love today with our Shopping Loan.",
      button: "Read More",
    },
    {
      title: "Quick Emergency Loan",
      description: "Quick funds to support you in unexpected situations.",
      button: " Read More",
    },
    {
      title: "Bill Payment Loan",
      description: "Get the funds you need to pay your bills on time.",
      button: "Read More",
    },
    {
      title: "Travel Support Loan",
      description:
        "Travel stress-free with flexible loan options for vacations.",
      button: "Read More",
    },
    {
      title: "Home Repair Loan",
      description: "Give your house a new look with our Home Improvement Loan.",
      button: "Read More",
    },
    {
      title: "Household Expense Loan",
      description: "Get the funds you need to manage your household expenses.",
      button: "Read More",
    },
  ];
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
            <img
              src={heroImage}
              alt="img"
              className="hero-img img-fluid mt-4 h-100 border-0"
            />
          </div>
          <div className="col-md-7 col-12" style={{ marginTop: "5rem" }}>
            <div className="row">
              {cardsConfig.map((card, index) => {
                return (
                  <HeroSectionCards
                    key={index}
                    title={card?.title}
                    description={card?.description}
                    button={card?.button}
                  ></HeroSectionCards>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
