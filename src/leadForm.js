import { InputComponent } from "./InputComponent";
import { row1 } from "./constants";

export const LeadForm = () => {
  return (
    <div className="hero-form">
      <h1
        className="fs-5 p-4 text-white rounded-top-3 shadow-sm mb-0"
        style={{ backgroundColor: "rgb(21, 10, 182)" }}
      >
        APPLY NOW OR CHECK YOUR LOAN ELIGIBILITY TODAY
      </h1>
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSc8LkKC3fepOrafUFVtUk8v409jwmMRXUodZv6FHmxtkbnCfA/formResponse"
        method="POST"
        target="_self"
        className="border bg-white rounded-bottom-3 shadow-sm p-3"
      >
        <div className="row">
          {row1.map((inputObject) => {
            return (
              <InputComponent
                divClassName={inputObject.divClassName}
                type={inputObject.type}
                name={inputObject.name}
                placeholder={inputObject.placeholder}
                inputClassName={inputObject.inputClassName}
                required={inputObject.required}
              />
            );
          })}
        </div>

        <div className="row">
          <div className="col-md-6">
            <input
              type="tel"
              name="entry.689942532"
              pattern="[0-9]{10}"
              placeholder="Phone No."
              className="form-control p-2 mb-3 rounded-5"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="entry.1389181890"
              pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
              placeholder="Pancard No."
              className="form-control p-2 mb-3 rounded-5"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              name="entry.826869237"
              pattern="[0-9]{12}"
              placeholder="Aadhar No."
              className="form-control p-2 mb-3 rounded-5"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="number"
              name="entry.30947058"
              placeholder="Loan Amount"
              className="form-control p-2 mb-3 rounded-5"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <input
              type="number"
              name="entry.61431079"
              placeholder="Monthly Salary"
              className="form-control p-2 mb-3 rounded-5"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="date"
              name=""
              placeholder="date of birth"
              className="form-control p-2 mb-3 rounded-5"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <select
              name="entry.440370727"
              className="form-control p-2 mb-3 rounded-5"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-md-6">
            <select
              name="entry.624365150"
              className="form-control p-2 mb-3 rounded-5"
              required
            >
              <option value="">Select Purpose</option>
              <option value="Personal Loan">Personal Loan</option>
              <option value="Home Loan">Home Loan</option>
              <option value="Car Loan">Car Loan</option>
              <option value="Personal Loan">Loan Payment</option>
              <option value="Home Loan">Wedding Loan</option>
              <option value="Car Loan">Medical Loan</option>
              <option value="Personal Loan">Education Loan</option>
              <option value="Home Loan">Travel Loan</option>
              <option value="Car Loan">Business Loan</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <textarea
          name="entry.617718779"
          placeholder="Enter your address"
          className="form-control p-3 rounded-5"
          required
        ></textarea>

        <label className="form-check-label m-3">
          <input type="checkbox" name="terms" required /> I Agree to the Unnati
          <span className="text-primary"> "Terms and Conditions" </span>
          and <span className="text-primary">"Privacy Policy"</span>
        </label>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
