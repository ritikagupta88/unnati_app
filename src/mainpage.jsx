import "./style.css";
import "./media.css";
import { LeadForm } from "./leadForm";
import { Navbar } from "./navbar";
import { Working } from "./How_works";
import { HeroSection } from "./hero-section";
import { Banner } from "./banner";
import { Footer } from "./Footer";
import 'bootstrap-icons/font/bootstrap-icons.css';


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
      <div className="">
        <Footer />
      </div>
    </>
  );
}

export default Mainpage;
