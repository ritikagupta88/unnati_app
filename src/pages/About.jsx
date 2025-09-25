import MainLayout from "../MainLayout";
import "../about.css";

const About = () => {
  return (
    <MainLayout childPaddingTop="5%">
      <div className="about-page container">
        <h1>About Us</h1>

        <p>
          Welcome to **Unnati**, your gateway to accessible credit and loan
          solutions. We aim to bridge the gap between users and financial
          resources by offering easy, transparent, and intuitive services.
        </p>

        <section className="our-mission my-4">
          <h2>Our Mission</h2>
          <p>
            To empower underserved individuals and businesses with financial
            tools and support, enabling them to grow, prosper, and build a more
            secure future.
          </p>
        </section>

        <section className="our-vision my-4">
          <h2>Our Vision</h2>
          <p>
            To become the most trusted, user-centric platform for credit access
            — where financial inclusion is not just a buzzword, but reality for
            many.
          </p>
        </section>

        <section className="what-we-do my-4">
          <h2>What We Do</h2>
          <ul>
            <li>
              Provide convenient credit/loan facilities to users via a
              digital-first interface.
            </li>
            <li>Offer transparent terms and simplified repayment plans.</li>
            <li>Ensure security, privacy, and trust in all transactions.</li>
          </ul>
        </section>

        <section className="why-choose-us my-4">
          <h2>Why Choose Unnati?</h2>
          <ul>
            <li>Easy digital onboarding & approval.</li>
            <li>No hidden charges, clear & fair terms.</li>
            <li>Support and guidance whenever you need it.</li>
          </ul>
        </section>

        <section className="team my-4">
          <h2>Our Team</h2>
          <p>
            Behind Unnati is a group of passionate technologists, financial
            experts, and advocates for inclusion. We believe that access to
            credit should be simple, fair, and available to all.
          </p>
        </section>

        <section className="contact-us my-4">
          <h2>Get in Touch</h2>
          <p>
            Questions, feedback, or ideas? We’d love to hear from you.
            <p className="mt-2">
              <a
                className="text-white text-decoration-none"
                href="mailto:support@unnatipay.in"
              >
                <i className="bi bi-envelope-fill icon-pop"></i>
                {"   "}
                &nbsp;&nbsp;&nbsp;support@unnatipay.in
              </a>
            </p>
            <a
              className="text-white text-decoration-none"
              href="tel:+919214870973"
            >
              <i className="bi bi-telephone-fill icon-shake"></i>{" "}
              &nbsp;&nbsp;&nbsp;+91 92148 70973
            </a>
          </p>
        </section>
      </div>
    </MainLayout>
  );
};

export default About;
