import icon1 from "./images/icon-1.png";
import icon2 from "./images/icon-2.png";
import icon3 from "./images/icon-3.png";
import icon4 from "./images/icon-4.png";
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
{
  /* <div className="col-12 text-center ">
                         <img src={icon1} alt="icon-1" className="img-fluid border border-dark rounded-circle my-3" style={{height:"60px",width:"60px"}}/>
                        </div>
                        <div className="col-12 p-4">
                        <h5 className="fw-bold">Instant cash Disbursal</h5>
                        <p className=""style={{fontSize:"14px"}}>Receive your funds within minutes without delays.</p>
                        </div> */
}
//  <div className="col-md-3 col-12 border border-dark ms-md-3 rounded-2 "style={{width:"23%"}}>

//                 </div>
//                 <div className="col-md-3 col-12 border border-dark ms-md-3 rounded-2"style={{width:"23"}}>

//                 </div>
//                 <div className="col-md-3 col-12 border border-dark ms-md-3 rounded-2"style={{width:"23%"}}>

//                 </div>
