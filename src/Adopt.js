import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from "react-router-dom";
import "./Adopt.css";
function Adopt(){
    // useEffect(() => {
    //     // Scroll event listener to handle navbar styling on scroll
    //     const handleScroll = () => {
    //       const navbar = document.querySelector('.navbar');
    //       if (navbar) {
    //         navbar.classList.toggle('scroll', window.scrollY > navbar.offsetHeight);
    //       }
    //     };
        
    //     window.addEventListener('scroll', handleScroll);
        
    //     // Cleanup on component unmount
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);
    
      return (
        <div>
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
    
        <section>
            <div className="header">
          <div>
            <div className="img">
              <Carousel>
                <Carousel.Item interval={10000}>
                  <img src="bg1.jpg" className="d-block w-100" alt="..." />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img src="bg2.jpg" className="d-block w-100" alt="..." />
                </Carousel.Item>
              </Carousel>

              <div className="Overlay"></div>
            </div>
          </div>
          <div className="Content">
            <input type="text" className="font-weight-bold" placeholder="Search your Pet" />
          </div>
        </div>
      </section>
    
          {/* Adopt Section Start */}
        <section>
            <div className="container adopt">
              <div className="content">
                <h6><span>A</span>dopt Now</h6>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="box">
                    <img src="c1.jpg" className="img-fluid" alt="" />
                    <h5>Catiii</h5>
                    <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Inventore.</p>
                    <button className="btn1">Adopt Now</button>
                  </div>
                </div>
                <div className="col-sm-4 mid">
                  <div className="box">
                    <img src="r1.jpg" className="img-fluid" alt="" />
                    <h5>Rabii</h5>
                    <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Inventore.</p>
                    <button className="btn1">Adopt Now</button>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="box">
                    <img src="d1.jpg" className="img-fluid" alt="" />
                    <h5>Dogsii</h5>
                    <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Inventore.</p>
                    <button className="btn1">Adopt Now</button>
                  </div>
                </div>
                {/* Repeat for other columns... */}
              </div>
            </div>
          </section>
          {/* Adopt Section End */}
    
          {/* Second Header Section Start */}
          <section>
            <div className="second_header">
              <div>
                <div className="img">
                  <img src="bg1.jpg" alt="" />
                </div>
                <div className="Overlay"></div>
              </div>
              <div className="Content">
                <h6>Life Without <br /> <span>Pets</span> is not Life!
                  <br /><span>it's Waste.</span>
                </h6>
              </div>
            </div>
          </section>
          {/* Second Header Section End */}
    
          {/* Buy Now Section Start */}
          <section>
            <div className="buy container">
              <div className="content">
                <h6><span>B</span>uy Now</h6>
              </div>
              <div className="row">
                {/* Repeat similar structure for each item */}
                <div className="col-sm-4">
                  <div className="box">
                    <img src="buy1.jpg" className="img-fluid" alt="" />
                    <h5>Munchkin Cat</h5>
                    <p>Dwarf Cat  <br /> Not Just a Trend</p>
                    <button className="btn1">Buy Now</button>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="box">
                    <img src="buy2.jpg" className="img-fluid" alt="" />
                    <h5>Shiba Inus</h5>
                    <p>Japanese Dog Breed is  <br /> More than a Cute Face</p>
                    <button className="btn1">Buy Now</button>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="box">
                    <img src="buy3.jpg" className="img-fluid" alt="" />
                    <h5>Pembroke Welsh Corgi</h5>
                    <p><br />A Royal Favourite.</p>
                    <button className="btn1">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Buy Now Section End */}
    
          {/* Lost Pet Section Start */}
          <section>
            <div className="buy lost container">
              <div className="content">
                <h6><span>L</span>ost Pets</h6>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-4">
                  <div className="box">
                    <img src="lost1avif.avif" className="img-fluid" alt="" />
                    <h5>Billie</h5>
                    <p>Missing for 5 days <br /> If seen somewhere please contact</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="box">
                    <img src="lost2.png" className="img-fluid" alt="" />
                    <h5>Tigger</h5>
                    <p>Missing for two weeks.<br />If you see her please contact.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Lost Pet Section End */}
    
          {/* Footer Section Start */}
          <footer>
            <a href="/">Contact Us: 9936173712<br />Email: abc@gmail.com</a>
          </footer>
          {/* Footer Section End */}
        </div>
      );
}
export default Adopt;