import React,{useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./Adopt.css";
function Navbar(){
    useEffect(() => {
        // Scroll event listener to handle navbar styling on scroll
        const handleScroll = () => {
          const navbar = document.querySelector('.navbar');
          if (navbar) {
            navbar.classList.toggle('scroll', window.scrollY > navbar.offsetHeight);
          }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        // Cleanup on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      return (
        <div>
          {/* Navbar Section Start */}
          <nav className="navbar navbar-expand-sm fixed-top">
            <a href="/" className="navbar-brand"><span>F</span>ilozoos</a>
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
          </div>
      )
    }
    export default Navbar;