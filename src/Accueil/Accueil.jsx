import Carroussel from "./Carroussel";
// import Presentation from "../Accueil/Presentation";
//import SectionAppreciation from "../Accueil/SectionAppreciation"
import AppreciationCard from "../Accueil/AppreciationCard"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Portfolio from "./Portfolio";
export default function Accueil() {
  return (
    <div>
      <Navbar/>
      <Carroussel />
      {/* <Presentation /> */}
      {/**<SectionAppreciation/> */}
      <Portfolio/>
      <AppreciationCard/>
      <Footer/>
    </div>
  );
}
