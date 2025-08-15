import React, { useState } from 'react';
import './style.css';
import './media.css';

import { Modal, Button, Form } from "react-bootstrap";
function Mainpage(){
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
    return (
       <>
       {/* Navbar */}
      <header className="header">
       <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
          <a className="navbar-brand ms-5" href="#">
            <img src="/unnati_Logo.png" alt="Unnati Logo" className="img-fluid" style={{ width: "200px", height: "65px" }}/>
          </a>

          <button className="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#MobileMenu" aria-controls="MobileMenu" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#"> Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> Repay Loan</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> FAQ </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact </a>
              </li>
            </ul>
            <button className="btn-number rounded-5 ms-3" type="button" onClick={handleShow}>
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </div>
        </nav>
      </div>

      {/* Offcanvas menu */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="MobileMenu" aria-labelledby="MobileMenuLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="MobileMenuLabel">
            <img src="/unnati_Logo.png" alt="Unnati Logo" className="img-fluid" style={{ width: "150px", height: "60px" }}/>
          </h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link mb-3" href="#"> Home</a>  
            </li>
            <li className="nav-item">
              <a className="nav-link mb-3" href="#"> About Us </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mb-3" href="#"> Repay Loan </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mb-3" href="#"> FAQ</a>
            </li>
          </ul>
          <button
            className="btn-number rounded-5 ms-3" type="button" onClick={handleShow}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
    </header>

    {/* Login / Signup Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isLogin ? "Login" : "Sign Up"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLogin ? (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>
          ) : (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>
              <Button variant="success" type="submit" className="w-100">
                Sign Up
              </Button>
            </Form>
          )}
          <p className="mt-3 text-center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <Button
              variant="link"
              className="p-0"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </Button>
          </p>
        </Modal.Body>
      </Modal>


{/* Hero-section */}
<div className='hero-section'>
  <div className='container'>
    <div className='row'>
      <div className='col-lg-6 col-12'>
        <div className='hero-content'>
          <h1>Ensure a fast loan of up to 1 lakh</h1>
          <button className='btn-hero-content rounded-5'>Instant Approval,Hassle-free apllication,
            <br />Competitive Interest,No-Collateral</button>
        </div>
      </div>
    {/* form section */}
      
      <div className='col-lg-6 col-12'>
        <div className='hero-form'>
          <h1 className='fs-5 p-4 text-white rounded-top-3 shadow-sm mb-0' style={{ backgroundColor: 'rgb(21, 10, 182)' }}>APPLY NOW OR CHECK YOUR LOAN ELIGIBILITY TODAY</h1>
          <form action="submit.php" method="POST" className='border bg-white rounded-bottom-3 shadow-sm p-3'>

          <div className="row">
            <div className="col-md-6">
            <input type="text" name="name" placeholder='Name as per Pancard'
            className='form-control p-3 mb-3 rounded-5' required />
            </div>
            <div className="col-md-6">
            <input type="email" name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder='Email' className='form-control mb-3 p-3 rounded-5' required />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
            <input type="tel" name="phone" pattern="[0-9]{10}" placeholder='Phone No.'
            className='form-control p-3 mb-3 rounded-5' required />
            </div>
            <div className="col-md-6">
            <input type="text" name="pancard" pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
            placeholder='Pancard No.' className='form-control p-3 mb-3 rounded-5' required />
            </div>
          </div>

          <div className='row'>
           <div className='col-md-6'>
           <input type="text" name="aadhar" pattern="[0-9]{12}" placeholder='Aadhar No.' 
           className='form-control p-3 mb-3 rounded-5' required />
           </div>
           <div className='col-md-6'>
           <input type="number" name="loan_amount" placeholder='Loan Amount'
           className='form-control p-3 mb-3 rounded-5' required />
           </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
            <input type="number" name="salary" placeholder='Monthly Salary' className='form-control p-3 mb-3 rounded-5' required />
            </div>
            <div className='col-md-6'>
            <input type="date" name="dob" placeholder='DOB' className='form-control p-3 mb-3 rounded-5' required />
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
            <select name="gender" className='form-control p-3 mb-3 rounded-5' required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            </select>
            </div>
            <div className='col-md-6'>
            <select name="purpose" className='form-control p-3 mb-3 rounded-5' required>
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
          <textarea name="address" placeholder='Enter your address' 
            className='form-control p-3 rounded-5' required>
            </textarea>   

           <label className='form-check-label m-3'>
              <input type="checkbox" name="terms" required /> I Agree to the Unnati
              <span className='text-primary'> "Terms and Conditions" </span> and <span className='text-primary'>"Privacy Policy"</span>
            </label>
            <div className='d-flex justify-content-center'>
              <button type="submit" className='btn-submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

</>
    );
}

export default Mainpage;
