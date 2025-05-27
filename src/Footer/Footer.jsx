
import { useState } from "react";
// import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Footer/Footer.css";
import { FaFacebook , FaWhatsapp , FaTiktok  , FaInstagram } from "react-icons/fa";
import logo from "../Footer-img/log-remove.png";
import { Link } from "react-router-dom";
import logoMaron from "../assets/logoMaron.png";

export default function Footer() {
  
  return (
    <footer>
      <div className="container-fluid bg">
        <div className="row pt-3 g-2">
          <div className="col-12 col-sm-6 col-md-3 col-lg-2">
            <div className="d-flex flex-column align-items-center">
              <img
                src={logo}
                alt=""
                style={{ width: 150, height: 70, objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-4">
            <div className="d-flex flex-column align-items-center">
              <h6>INFORMATIONS LEGALES</h6>
              <ul>
                <li>
                  <Link to="/conditions-utilisation" style={{ color: "white" }}>
                    Conditions d'utilisation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/politique-de-confidentialite"
                    style={{ color: "white" }}
                  >
                    Politique de confidentialité
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3 col-lg-2">
            <div className="d-flex flex-column align-items-center">
              <h6>CONTACT</h6>
              <ul>
                <li>
                  <Link to="/Contact" style={{ color: "white" }}>
                    Nous contacter
                  </Link>
                </li>
                <li>
                  <Link to="/Localisation" style={{ color: "white" }}>
                    Localisation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-2">
            <div className="d-flex flex-column align-items-center">
              <h6>RETROUVEZ-NOUS SUR</h6>
              <div className="d-flex gap-3">
                <a href="https://chat.whatsapp.com/LvHkLHkFx8V6JgjuXSqXQ5 " target="_blank">
                  <FaWhatsapp/>
                </a>
                <a href="https://www.tiktok.com/@nom_utilisateur" target="_blank" >
                  <FaTiktok/>
                </a>
                <a href="https://www.facebook.com/nom_utilisateur" target="_blank">
                  <FaFacebook/>
                </a>
                <a href="https://www.instagram.com/nom_utilisateur" target="_blank" >
                  <FaInstagram/>
                </a>
              </div>
            </div>
          </div>
          <div
            className="newlester d-flex flex-column align-items-center"
            style={{ borderTop: "1px solid white" }}
          >
            <h5 className="pt-3 text-center">Tiens-toi à jour</h5>
            <p className="text-center">Abonnez-vous à notre newsletter</p>
            <div className="d-flex">
              <form>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="rounded-5 form-control"
                 
                />
                <button type="submit" className="rounded-5 border-0 px-2">
                  Abonnez-vous
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-left" />
    </footer>
  );
}