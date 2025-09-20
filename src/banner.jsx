import banner1 from "./images/banner-1.png";
import banner2 from "./images/banner-2.png";
import banner3 from "./images/banner-3.png";
import banner4 from "./images/banner-4.png";
import { BannerPage } from "./bannerPage";
export const Banner = () => {
  const buttonsConfig = [
    {
      key: "slide-1",
      type: "button",
      dataBsTarget: "#carouselExampleIndicators",
      dataBsSlideTo: 0,
      className: "active",
      ariaCurrent: true,
      ariaLabel: "Slide 1",
    },
    {
      key: "slide-2",
      type: "button",
      dataBsTarget: "#carouselExampleIndicators",
      dataBsSlideTo: 1,
      ariaLabel: "Slide 2",
      ariaCurrent: false,
      className: "",
    },
    {
      key: "slide-3",
      type: "button",
      dataBsTarget: "#carouselExampleIndicators",
      dataBsSlideTo: "2",
      ariaLabel: "Slide 3",
      ariaCurrent: false,
      className: "",
    },
    {
      key: "slide-4",
      type: "button",
      dataBsTarget: "#carouselExampleIndicators",
      dataBsSlideTo: "3",
      ariaLabel: "Slide 4",
      ariaCurrent: false,
      className: "",
    },
  ];

  return (
    <>
      <div className="banner container-fluid">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          
        >
          <div className="carousel-indicators">
            {buttonsConfig.map((button) => {
              return (
                <button
                  key={button?.key}
                  type={button?.type}
                  data-bs-target={button?.dataBsTarget}
                  data-bs-slide-to={button?.dataBsSlideTo}
                  className={button?.className}
                  aria-current={button?.ariaCurrent}
                  aria-label={button?.ariaLabel}
                ></button>
              );
            })}
          </div>

          <div className="carousel-inner">
             <BannerPage
              title="Gateway to an Exceptional Borrowing Experience"
              description="Step into a seamless and exceptional borrowing journey."
              button1Text="Contact Us"
              button1Function={() => {}}
              button2Text="Apply Now"
              button2Function={() => {}}
              bannerImageUrl={banner1}
              activeState={true}
            />
            <BannerPage
              title="Planning a Vacation-Get instant Fund & Enjoy"
              description="Plan your dream vacation with instant funds and stress-free travel."
              button1Text="Contact Us"
              button1Function={() => {}}
              button2Text="Apply Now"
              button2Function={() => {}}
              bannerImageUrl={banner4}
              activeState={false}
            />

            <BannerPage
              title=" Quick & Fast help in Medical Emergency"
              description="Get instant financial support when medical emergencies strike"
              button1Text="Contact Us"
              button1Function={() => {}}
              button2Text="Apply Now"
              button2Function={() => {}}
              bannerImageUrl={banner3}
              activeState={false}
            />
           
            <BannerPage
              title="Smart Financing for All Your Shopping Needs"
              description="Get instant funds and enjoy hassle-free shopping anytime"
              button1Text="Contact Us"
              button1Function={() => {}}
              button2Text="Apply Now"
              button2Function={() => {}}
              bannerImageUrl={banner2}
              activeState={false}
            />

            
          </div>
        </div>
      </div>
    </>
  );
};
