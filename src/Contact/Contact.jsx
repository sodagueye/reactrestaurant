import "../Contact/Contact.css";
import { FaPhone, FaMobile } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="container contact pt-5">
        <div className="moins">
          <div className="row">
            <div className="col-12 col-md-6 one ">
              <div className="container-fluid">
                <div className="row pt-5">
                  <div className="col-6">
                    <div className="d-flex flex-column align-items-center bg-white p-2 card">
                      <FaLocationDot className="icons" />
                      <h6>Siege</h6>
                      <p>Yeumbeul ,Golf sud</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex flex-column align-items-center bg-white p-2 card">
                      <FaPhone className="icons" />
                      <h6>Telephone</h6>
                      <p>77-5-43-67-89</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid mt-3">
                <div className="row">
                  <div className="col-6">
                    <div className="d-flex flex-column align-items-center bg-white p-2 card">
                      <FaMobile className="icons" />
                      <h6>Fax</h6>
                      <p>33-3-43-56-78</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex flex-column align-items-center bg-white p-2 card">
                      <MdOutlineMail className="icons" />
                      <h6>Email</h6>
                      <p>yayesoda@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 text-white py-4 px-3 pt-5" style={{ backgroundColor: "#91725d" }}>
              <div>
                <h2 className="text-center mb-3">Nous Contacter</h2>
                <form>
                  <div className="d-flex justify-content-between gap-2">
                    <input type="text" placeholder="Prenom" className="form-control" />
                    <input type="text" placeholder="nom" className="form-control" />
                  </div>
                  <input type="email" placeholder="Votre Email" className="form-control mt-4 mb-2" />
                  <textarea name="message" id="message" placeholder="Votre message" className="form-control"></textarea>
                  <div className="d-flex justify-content-center mt-3">
                    <button type="submit" className="p-2 border-0 rounded">Soumettre</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <Footer />
    </>
  );
}
