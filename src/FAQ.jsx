import {FaqSections} from "./FaqSection";
export const FaqSection = () =>{
    const faqConfig = [
        {
          id:"collapseOne",
          title:"Accordion Item #1",
          description:"It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go though the transition does limit overflow.",
          isOpen: true,
        },
         {
          id:"collapseTwo",
          title:"Accordion Item #2",
          description:"It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go though the transition does limit overflow.",
          isOpen: false,
        },
         {
          id:"collapseThree",
          title:"Accordion Item #3",
          description:"It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go though the transition does limit overflow.",
          isOpen: false,
        },
    ];
    return(
        <>
           
            <div className="container my-4 text-center">
                <h1 className="fw-bold mb-4">Frequently Asked Questions</h1>

                <div class="accordion" id="accordionExample">
 
  {faqConfig.map((card) =>{
    return(
        <FaqSections
            id={card?.id}
            title={card?.title}
            description={card?.description}
            isOpen={card?.isOpen}
        ></FaqSections>
    );
  })}
  </div>
            </div>
        </>
    );
};