import "./style.css";
import "./media.css";
import { LeadForm } from "./leadForm";
import { Navbar } from "./navbar";
import { Working } from "./How_works";
import { HeroSection } from "./hero-section";
import { Banner } from "./banner";

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
      <div
        className="container-fluid my-3"
        style={{ backgroundColor: "#cfe3e7ff" }}
      >
        <LeadForm />
      </div>
    </>
  );
}

export default Mainpage;
