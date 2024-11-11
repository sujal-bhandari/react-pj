import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Adopt.css';
import { Link } from 'react-router-dom';
function Apply(){
    return (
        <div>
          {/* Navbar Section Start */}
          <nav className="navbar navbar-expand-sm scroll">
            <a href="/" className="navbar-brand">
              <span>F</span>ilozoos
            </a>
            <div>
              <ul className="navbar-nav">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/adopt" className="nav-link">Adopt</Link></li>
                <li className="nav-item"><Link to="/hire" className="nav-link">Services</Link></li>
                <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                <li className="nav-item"><Link to="/apply" className="nav-link">Apply</Link></li>
              </ul>
            </div>
          </nav>
          {/* Navbar Section End */}
    
          <section className="h-100 bg-dark">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                  <div className="card card-registration my-4">
                    <div className="row g-0">
                      <div className="col-xl-6 d-none d-xl-block">
                        <img
                          src="a1.jpg"
                          alt="Sample"
                          className="img-fluid"
                          style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem', height: '100%', width:'100%'}}
                        />
                      </div>
                      <div className="col-xl-6">
                        <form>
                          <div className="card-body p-md-5 text-black">
                            <h3 className="mb-5 text-uppercase">Work As A CareTaker<br />Apply Now</h3>
    
                            <div className="row">
                              <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                  <input type="text" id="form3Example1m" className="form-control form-control-lg" required />
                                  <label className="form-label" htmlFor="form3Example1m">First name</label>
                                </div>
                              </div>
                              <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                  <input type="text" id="form3Example1n" className="form-control form-control-lg" required />
                                  <label className="form-label" htmlFor="form3Example1n">Last name</label>
                                </div>
                              </div>
                            </div>
    
                            <div className="form-outline mb-4">
                              <input type="text" id="form3Example8" className="form-control form-control-lg" required />
                              <label className="form-label" htmlFor="form3Example8">Address</label>
                            </div>
    
                            <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                              <h6 className="mb-0 me-4">Gender: </h6>
    
                              <div className="form-check form-check-inline mb-0 me-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" value="option1" />
                                <label className="form-check-label" htmlFor="femaleGender">Female</label>
                              </div>
    
                              <div className="form-check form-check-inline mb-0 me-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" value="option2" />
                                <label className="form-check-label" htmlFor="maleGender">Male</label>
                              </div>
    
                              <div className="form-check form-check-inline mb-0">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" value="option3" />
                                <label className="form-check-label" htmlFor="otherGender">Other</label>
                              </div>
                            </div>
    
                            <div className="row">
                              <div className="col-md-6 mb-4">
                                <select className="select form-control form-control-lg">
                                  <option value="1">State</option>
                                  <option value="2">Punjab</option>
                                  <option value="3">Delhi</option>
                                  <option value="4">UP</option>
                                </select>
                              </div>
                              <div className="col-md-6 mb-4">
                                <select className="select form-control form-control-lg">
                                  <option value="1">Animal</option>
                                  <option value="2">Dog</option>
                                  <option value="3">Cat</option>
                                  <option value="4">Rabbit</option>
                                </select>
                              </div>
                            </div>
    
                            <div className="form-outline mb-4">
                              <input type="text" id="form3Example9" className="form-control form-control-lg" />
                              <label className="form-label" htmlFor="form3Example9">DOB</label>
                            </div>
    
                            <div className="form-outline mb-4">
                              <input type="text" id="form3Example97" className="form-control form-control-lg" required />
                              <label className="form-label" htmlFor="form3Example97">Email ID</label>
                            </div>
    
                            <div className="form-outline mb-4">
                              <input type="text" id="form3Example97" className="form-control form-control-lg" />
                              <label className="form-label" htmlFor="form3Example97">Any Allergies</label>
                            </div>
    
                            <div className="d-flex justify-content-end pt-3">
                              <a href="index.html">
                                <button type="button" className="btn btn-warning btn-lg ms-2">Apply now</button>
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
}
export default Apply;