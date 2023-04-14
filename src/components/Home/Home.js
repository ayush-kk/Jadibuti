import NavbarWeb from "../navbar/NavbarWeb";
import Banner from "../banner/Banner"
import Jumbotron from "../jumbotron/Jumbotron"
import TopMedicines from "../topMedicines/TopMedicines"
import Testimony from "../testimony/Testimony"
import FooterWeb from "../footer/FooterWeb"

function Home(){
    return(
        <div>
        <NavbarWeb />
        <Banner/>
        <Jumbotron />
        <TopMedicines />
        <Testimony/>
        <FooterWeb/>
  
      </div>
    )
}
export default Home;