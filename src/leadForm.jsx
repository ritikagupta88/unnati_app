import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

export const LeadForm = () => {
  const [dob, setDob] = useState(null);
  return (
    <div
      className="lead-form container"
      style={{ paddingTop: "40px", paddingBottom: "40px" }}
    >
      {/* <h1
        className="fs-4 p-3 text-white rounded-top-3 shadow-sm mb-0 mx-sm-0 mx-3 text-center fw-bold"
        style={{ backgroundColor: "#055861" }}
      >
        CHECK YOUR LOAN ELIGIBILITY
      </h1> */}

      <Typography
        className="fs-4 p-3 text-white rounded-top-1 shadow-lg mb-0 mx-sm-0 mx-3 text-center "
        sx={{ backgroundColor: "#11aabbff" }}
        variant="h1"
      >
        CHECK YOUR LOAN ELIGIBILITY
      </Typography>
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSc8LkKC3fepOrafUFVtUk8v409jwmMRXUodZv6FHmxtkbnCfA/formResponse"
        method="POST"
        target="_self"
        className="border bg-white rounded-bottom-3 shadow-sm p-3 mx-sm-0 mx-3"
        style={{ maxWidth: "100%" }}
      >
        <div className="row">
          <div className="col-md-3">
            <TextField
              required
              type="text"
              id="outlined-required"
              label="Name as per Pancard"
              name="entry.1594329448"
              className="form-control p-2 mb-3 "
              slotProps={{
                inputLabel: {
                  sx: {
                    "& .MuiFormLabel-asterisk": {
                      color: "red",
                    },
                  },
                },
              }}
            />
          </div>
          <div className="col-md-3">
            <TextField
              id="outlined-required"
              label="Email"
              name="entry.2027968812"
              className="form-control mb-3 p-2 "
              required
              slotProps={{
                inputLabel: {
                  sx: {
                    "& .MuiFormLabel-asterisk": {
                      color: "red",
                    },
                  },
                },
              }}
            />
          </div>

          <div className="col-md-3">
            <TextField
              id="outlined-required"
              label="Phone No"
              type="tel"
              name="entry.689942532"
              pattern="[0-9]{10}"
              className="form-control p-2 mb-3 "
              required
              slotProps={{
                inputLabel: {
                  sx: {
                    "& .MuiFormLabel-asterisk": {
                      color: "red",
                    },
                  },
                },
              }}
            />
          </div>
          <div className="col-md-3">
            <TextField
              id="outlined-required"
              label="Pancard No."
              type="text"
              name="entry.1389181890"
              pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
              className="form-control p-2 mb-3 "
              required
              slotProps={{
                inputLabel: {
                  sx: {
                    "& .MuiFormLabel-asterisk": {
                      color: "red",
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <TextField
              id="outlined-required"
              label="Aadhar No."
              type="text"
              name="entry.826869237"
              pattern="[0-9]{12}"
              className="form-control p-2 mb-3 "
              required
              slotProps={{
                inputLabel: {
                  sx: {
                    "& .MuiFormLabel-asterisk": {
                      color: "red",
                    },
                  },
                },
              }}
            />
          </div>
          <div className="col-md-3">
            <TextField
              id="outlined-required"
              label="Loan Amount"
              type="number"
              name="entry.30947058"
              className="form-control p-2 mb-3 "
              required
              slotProps={{
                inputLabel: {
                  sx: {
                    "& .MuiFormLabel-asterisk": {
                      color: "red",
                    },
                  },
                },
              }}
            />
          </div>

          <div className="col-md-3">
            <TextField
              id="outlined-required"
              label="Monthly Salary"
              type="number"
              name="entry.61431079"
              className="form-control p-2 mb-3 "
              required
              slotProps={{
                inputLabel: {
                  sx: {
                    "& .MuiFormLabel-asterisk": {
                      color: "red",
                    },
                  },
                },
              }}
            />
          </div>
          {/* Date of Birth with MUI DatePicker */}
          <div className="col-md-3">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Birth"
                value={dob}
                onChange={(newValue) => setDob(newValue)}
                slotProps={{
                  textField: {
                    required: true,
                    className: "form-control p-2 mb-3",
                  },
                }}
                inputFormat="YYYY-MM-DD"
              />
            </LocalizationProvider>

            {/* Hidden input to submit date in correct format to Google Form */}
            <input
              type="hidden"
              name="entry.1940383625"
              value={dob ? dob.format("YYYY-MM-DD") : ""}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <select
              name="entry.440370727"
              className="form-control p-3 mb-3 "
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-md-3">
            <select
              name="entry.624365150"
              className="form-control p-3 mb-3 "
              required
            >
              <option value="">Select Purpose *</option>
              <option value="Personal Loan">Personal Loan</option>
              <option value="Home Loan">Home Loan</option>
              <option value="Car Loan">Car Loan</option>
              <option value="Loan Payment">Loan Payment</option>
              <option value="Wedding Loan">Wedding Loan</option>
              <option value="Medical Loan">Medical Loan</option>
              <option value="Education Loan">Education Loan</option>
              <option value="Travel Loan">Travel Loan</option>
              <option value="Business Loan">Business Loan</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="col-md-6">
            <textarea
              name="entry.617718779"
              placeholder="Enter your address *"
              className="form-control p-1 "
              required
            ></textarea>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-3">
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
