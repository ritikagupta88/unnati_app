import "./style.css";
import "./media.css";
import { LeadForm } from "./leadForm";
import { Navbar } from "./navbar";
import { Working } from "./How_works";
import { HeroSection } from "./hero-section";
import { Banner } from "./banner";
import { Footer } from "./Footer";
import { FaqSection } from "./FAQ";
import { WhyChooseUs } from "./whyChooseUS";
import "bootstrap-icons/font/bootstrap-icons.css";

function Mainpage() {
  return (
    <>
      {/* Navbar section */}
      <div className="container-fluid">
        <Navbar />
      </div>

      {/* banner section */}
      <Banner />

      {/* hero section */}
      <div className=" hero-section container-fluid">
        <HeroSection />
      </div>

      {/* How it works section */}
      <div
        className="container-fluid pb-4"
        style={{ backgroundColor: "#cfe3e7ff" }}
      >
        <Working />
      </div>

      {/* form section */}
      <div className="container-fluid" style={{ backgroundColor: "#cfe3e7ff" }}>
        <LeadForm />
      </div>

      {/* {Faq Section} */}
      <div className="container-fluid">
        <FaqSection />
      </div>

      {/* {why choose us section} */}
      <div className="container-fluid mb-1" style={{ backgroundColor: "#cfe3e7ff" }}>
        <WhyChooseUs />
      </div>

      {/* {footer section} */}
      <div className="">
        <Footer />
      </div>
    </>
  );
}

export default Mainpage;
