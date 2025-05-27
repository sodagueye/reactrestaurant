
import { FaHome, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { MdDashboard, MdOutlineRestaurantMenu } from "react-icons/md";
import { PiWarningCircleLight } from "react-icons/pi";
import logoMaron from "../assets/logoMaron.png";
 import { NavLink } from "react-router-dom";
import "./Navbar.css";
  

const Navbar = () => {

  return (
    <>
    <nav className="navbar navbar-expand-lg mb-5 fixed-top w-100 bg-white shadow">
        <div className="container-fluid">
          <div className="col-12 col-md-2 w-25">
            <p>
              <img src={logoMaron } alt="logo" className="w-25" style={{ width: "80px" }} />
            </p> 
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item d-flex align-items-center me-2">
                <p className="fs-5 mt-2 icon-nav"><FaHome /></p>
                <span className="ms-2 fw-bold"><NavLink to="/accueil">ACCUEIL</NavLink></span>
              </li>
              <li className="nav-item d-flex align-items-center ms-3">
                <p className="fs-5 mt-2 icon-nav"><MdOutlineRestaurantMenu /></p>
                <span className="ms-1 fw-bold"><NavLink to="/menu" >MENU</NavLink></span>
              </li>
              <li className="nav-item d-flex align-items-center ms-3">
                <p className="fs-4 mt-2 icon-nav"><PiWarningCircleLight /></p>
                <span className="ms-1 fw-bold"><NavLink to="/about">A PROPOS</NavLink></span>
              </li>
              <li className="nav-item d-flex align-items-center ms-3">
                <p className="fs-5 mt-2 icon-nav"><MdDashboard /></p>
                <span className="ms-1 fw-bold"><NavLink to="/reservation">RESERVATION</NavLink></span>
              </li>
              <li className="nav-item d-flex align-items-center ms-3">
                <p className="fs-5 mt-2 icon-nav"><FaUser /></p>
                <span className="ms-1 fw-bold"><NavLink to="/">Connexion</NavLink></span>
              </li>
              <li className="nav-item d-flex align-items-center ms-3">
                <p className="fs-5 mt-2 icon-nav"><FaShoppingCart /></p>
                <span className="ms-1 fw-bold"><NavLink>PANIER</NavLink></span>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
