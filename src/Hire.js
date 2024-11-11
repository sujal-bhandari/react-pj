import React,{useState} from "react";
import { Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from "react-router-dom";
import "./Adopt.css";
import "./Hire.css";

function Hire(){const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    service: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Here you can handle form submission logic
  };
    // useEffect(() => {
    //     // Handle scroll for navbar effect
    //     const handleScroll = () => {
    //       const navbar = document.querySelector('.navbar');
    //       if (navbar) {
    //         navbar.classList.toggle('scroll', window.scrollY > navbar.offsetHeight);
    //       }
    //     };
        
    //     window.addEventListener('scroll', handleScroll);
        
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);
    
      return (
        <div>
          {/* Navbar Section */}
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
    
          {/* Carousel Section */}
          <section className="header">
            <div>
              <Carousel id="carouselExampleInterval" interval={null}>
                <Carousel.Item>
                  <img src="carousel-2.jpg" className="d-block w-100" alt="Slide 1" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="carousel-1.jpg" className="d-block w-100" alt="Slide 2" />
                </Carousel.Item>
              </Carousel>
              <div className="Overlay"></div>
            </div>
            <div className="Content2">
              <h3>Best Pet Services</h3><br />
              <h1>Keep your Pet Happy</h1><br />
              <a href="#services"><button className="btn1">Services</button></a>
            </div>
          </section>
    
          {/* Booking Section */}
          {/* <section className="container-fluid bg-light" id="container">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="bg-primary py-5 px-4 px-sm-5">
                    <form className="py-5">
                      <div className="form-group">
                        <input type="text" className="form-control border-0 p-4" placeholder="Your Name" required />
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control border-0 p-4" placeholder="Your Email" required />
                      </div>
                      <div>
                        <button className="btn btn-dark btn-block border-0 py-3" type="submit">Book Now</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
                  <h4 className="text-secondary mb-3">Going for a Vacation?</h4>
                  <h1 className="display-4 mb-4">Book For <span className="text-primary" style={{ fontWeight: 'bold' }}>Your Pet</span></h1>
                  <p>Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore dolore takima ipsum lorem rebum</p>
                </div>
              </div>
            </div>
          </section> */}
           <div className="container-fluid bg-light" id="container">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="bg-primary py-5 px-4 px-sm-5">
              <form className="py-5" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control border-0 p-4"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control border-0 p-4"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control border-0 p-4"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    placeholder="Reservation Date"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="time"
                    className="form-control border-0 p-4"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    placeholder="Reservation Time"
                  />
                </div>
                <div className="form-group">
                  <select
                    className="custom-select border-0 px-4"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{ height: '47px' }}
                  >
                    <option value="">Select A Service</option>
                    <option value="Pet Grooming">Pet Grooming</option>
                    <option value="Pet Feeding">Pet Feeding</option>
                    <option value="Pet Boarding">Pet Boarding</option>
                    <option value="Pet Exercise">Pet Exercise</option>
                    <option value="Pet Training">Pet Training</option>
                    <option value="Pet Treatment">Pet Treatment</option>
                  </select>
                </div>
                <button className="btn btn-dark btn-block border-0 py-3" type="submit">
                  Book Now
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-7 py-5 py-lg-0 px-3 px-lg-5">
            <h4 className="text-secondary mb-3">Going for a Vacation?</h4>
            <h1 className="display-4 mb-4">
              Book For <span className="text-primary" style={{ fontWeight: 'bold' }}>Your Pet</span>
            </h1>
            <p>Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore dolore takima ipsum lorem rebum</p>

            <div className="row py-2">
              <div className="col-sm-6">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-2">
                    <img src="h1.png" className="img1" alt="Pet Boarding" />
                    <h5 className="text-truncate m-0">Pet Boarding</h5>
                  </div>
                  <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet</p>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-2">
                    <img src="f1.png" className="img2" alt="Pet Feeding" />
                    <h5 className="text-truncate m-0">Pet Feeding</h5>
                  </div>
                  <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet</p>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-2">
                    <img src="g1.png" className="img1" alt="Pet Grooming" />
                    <h5 className="text-truncate m-0">Pet Grooming</h5>
                  </div>
                  <p className="m-0">Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet</p>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-2">
                    <img src="t1.png" className="img2" alt="Pet Training" />
                    <h5 className="text-truncate m-0">Pet Training</h5>
                  </div>
                  <p className="m-0">Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
          {/* Services Section */}
          <section className="buy container" id="services">
            <div className="content">
              <h6><span>S</span>ervices</h6>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="box">
                  <img src="grooming.jpg" className="img-fluid" alt="Grooming" />
                  <h5>Pet Grooming</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <button className="btn1">Book Now</button>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="box">
                  <img src="petfeeding.jpg" className="img-fluid" alt="Feeding" />
                  <h5>Pet Feeding</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <button className="btn1">Book Now</button>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="box">
                  <img src="petboarding.jpg" className="img-fluid" alt="Feeding" />
                  <h5>Pet Boarding</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <button className="btn1">Book Now</button>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="box">
                  <img src="pettrain.jpg" className="img-fluid" alt="Feeding" />
                  <h5>Pet Training</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <button className="btn1">Book Now</button>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="box">
                  <img src="petexer.jpg" className="img-fluid" alt="Feeding" />
                  <h5>Pet Exercise</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <button className="btn1">Book Now</button>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="box">
                  <img src="treatment.png" className="img-fluid" alt="Feeding" />
                  <h5>Pet Treatment</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <button className="btn1">Book Now</button>
                </div>
              </div>
              {/* Add more services as needed */}
            </div>
            
          </section>


           {/* Second Header Section Start */}
           <section>
            <div className="second_header">
              <div>
                <div className="img">
                  <img src="b3.png" alt="" />
                </div>
                <div className="Overlay"></div>
              </div>
              <div className="Content">
              <h6 style={{color:"#fff"}}>"Our <span>Pets </span>are<br /> our
                    <span>Family"</span>
                </h6>
              </div>
            </div>
          </section>
          {/* Second Header Section End */}
          <section>
            <div className="container adopt">
              <div className="content">
                <h6><span>C</span>aretakers</h6>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="box">
                    <img src="ct2.jpg" className="img-fluid" alt="" />
                    <h5>Alex</h5>
                        <p>2 Years Experience <br /> consectetur adipisicing elit. Inventore.</p>
                    <button className="btn1">Hire Now</button>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="box">
                    <img src="ct1.jpg" className="img-fluid" alt="" />
                    <h5>Andrew</h5>
                        <p>3 Years Experience <br /> consectetur adipisicing elit. Inventore.</p>
                    <button className="btn1">Hire Now</button>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="box">
                    <img src="ct3.jpg" className="img-fluid" alt="" />
                    <h5>Elisa</h5>
                        <p>4 Years Experience <br /> consectetur adipisicing elit. Inventore.</p>
                    <button className="btn1">Hire Now</button>
                  </div>
                </div>
                {/* Repeat for other columns... */}
              </div>
            </div>
          </section>

          
    
          {/* Footer */}
          <footer>
            <a href="/">Contact Us: 9936173712<br />Email: abc@gmail.com</a>
          </footer>
        </div>
      );

}

export default Hire;