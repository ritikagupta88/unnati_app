import icon1 from "../images/icon-1.png";
import icon2 from "../images/icon-2.png";
import icon3 from "../images/icon-3.png";
import icon4 from "../images/icon-4.png";
import { WhyChooseUsCards } from "./whyChooseUsCard";

export const WhyChooseUs = () => {
  const cardsConfig = [
    {
      imgSrc: icon1 ,
      title: "Instant cash Disbursal",
      description: "Receive your funds within minutes without delays.",
    },
    {
      imgSrc:  icon2 ,
      title: "Instant cash Disbursal",
      description: "Receive your funds within minutes without delays.",
    },
    {
      imgSrc:  icon3 ,
      title: "Instant cash Disbursal",
      description: "Receive your funds within minutes without delays.",
    },
    {
      imgSrc: icon4 ,
      title: "Instant cash Disbursal",
      description: "Receive your funds within minutes without delays.",
    },
  ];
  return (
    <>
      <div className="container py-4">
        <h1 className="text-center fw-bold mb-4">Why Choose Us</h1>
        <div className="row">
         
               
              {cardsConfig.map((cards) => {
                 return(
                <WhyChooseUsCards
                  imgSrc={cards?.imgSrc}
                  title={cards?.title}
                  description={cards.description}
                ></WhyChooseUsCards>
              );
              })}
            </div>
          </div>
        
     
    </>
  );
};

