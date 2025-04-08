import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import logoMaron from "../assets/logoMaron.png";
import { ToastContainer } from "react-toastify";
import "./inscrire.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";


function Inscrire() {
 
 
  return (
    <div>
      <div className="backCConnexion shadow d-flex justify-content-center my-5">
        <form className="form">
          <img src={logoMaron} className="img-marron" alt="" />
          <div className="color m-0 fw-bold">
            <h3 className="text-center">Créez votre compte</h3>
          </div>
          <div className="auth d-flex justify-content-center align-items-center">
            <input
              className="nom"
              type="text"
              style={{ backgroundColor: "transparent" }}
              placeholder="Prénom"
              required
              
            
            />
            <input
              className="nom number"
              type="text"
              placeholder="Nom"
              required
            
            />
          </div>
          <div className="auth d-flex justify-content-center align-items-center">
            <input className="nom" type="email" placeholder="Email" required/>
            <input className="nom number" type="number" placeholder="Téléphone" required/>
          </div>
          <div className="auth d-flex justify-content-center align-items-center pass">
            
            <input className="nom" type="password" placeholder="Mot de passe" required />
            <span  className="eyes oublie">
              <FaEyeSlash />
             {/* <FaEye /> */}
            </span>
            <input className="nom" type= "password" placeholder="Confirmer mot de passe" required />
            <span className="eyes oublie"> { <FaEyeSlash />} </span>
          </div>
          <div className="d-flex mb-5 justify-content-center ">
            <button type="submit" className="creer liens fs-5 fw-bold mt-5 connect border-0 align-items-center ">
              Créer un compte
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default Inscrire;
