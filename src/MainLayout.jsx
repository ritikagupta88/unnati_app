import "./style.css";
import "./media.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";

function MainLayout({ children, childPaddingTop = "0" }) {
  return (
    <>
      {/* Navbar section */}
      <div className="container-fluid">
        <Navbar />
      </div>

      <div style={{ paddingTop: childPaddingTop }}>{children}</div>
      {/* {footer section} */}
      <div className="">
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
