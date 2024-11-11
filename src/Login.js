import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Adopt.css";
import { Link } from 'react-router-dom';
function Login(){
    return (
        <div style={{ backgroundColor: '#23282c',overflow:"hidden" }}>
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
          <br />
          {/* Navbar Section End */}
          
          <section>
            <br />
            <div className="container py-2 h-80">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                  <div className="card" style={{ borderRadius: '1rem', height: '550px' }}>
                    <div className="row g-0">
                      <div className="col-md-6 col-lg-5 d-none d-md-block">
                        <img 
                          src="l1.jpg"
                          alt="login form" 
                          className="img-fluid" 
                          style={{ borderRadius: '1rem 0 0 1rem', height: '550px' ,width:'400px'}} 
                        />
                      </div>
                      <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
                          <form>
                            <div className="d-flex align-items-center mb-3 pb-1">
                              <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                              <span className="h1 fw-bold mb-0">Pet Care</span>
                            </div>
                            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
    
                            <div className="form-outline mb-4">
                              <input type="email" id="form2Example17" className="form-control form-control-lg" />
                              <label className="form-label" htmlFor="form2Example17">Username</label>
                            </div>
    
                            <div className="form-outline mb-4">
                              <input type="password" id="form2Example27" className="form-control form-control-lg" />
                              <label className="form-label" htmlFor="form2Example27">Password</label>
                            </div>
    
                            <div className="pt-1 mb-4">
                              <Link to="/" style={{textDecoration:'none'}}>
                                <button className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                              </Link>
                            </div>
    
                            <a className="small text-muted" href="#!">Forgot password?</a>
                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                              Don't have an account? <Link to="/signup" style={{ color: '#393f81',textDecoration:'underline' }}>SignUp here</Link>
                            </p>
                          </form>
                        </div>
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
export default Login;