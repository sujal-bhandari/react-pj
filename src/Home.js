import React from "react";
import "./Adopt.css";
import "./Home.css";
import { Link } from "react-router-dom";
function Home(){
return(<>
    <div className="overnow">
      {/* Navbar Section Start */}
      {/* <nav className="navbar navbar-expand-sm fixed-top">
        <a href="/" className="navbar-brand"><span>F</span>ilozoos</a>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/adopt" className="nav-link">Adopt</Link></li>
            <li className="nav-item"><Link to="/hire" className="nav-link">Services</Link></li>
            <li className="nav-item"><Link to="log.html" className="nav-link">Login</Link></li>
            <li className="nav-item"><Link to="apply.html" className="nav-link">Apply</Link></li>
          </ul>
        </div>
      </nav> */}
      {/* Navbar Section End */}

      {/* Carousel Section */}
      <section>
        <div className="header">
          <div>
            <div className="img"></div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img src="bg.jpg" className="d-block w-100" alt="..." style={{ height: '100%' }} />
                </div>
              </div>
            </div>
            <div className="Overlay"></div>
          </div>
          <div className="Content1">
            <h1>Grooming and Pet<br />Care</h1>
            <br />
            <p>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. Vitae</p>
            <Link to="/adopt">
              <button className="btn1">EXPLORE</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
</>
)
}

export default Home;