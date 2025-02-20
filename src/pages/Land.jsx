import styles from "./style"
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../components"
import Plan from "../components/plan/Plan"
import Test from "../components/Test"
import SearchCardHome from "../components/SearchCardHome/SearchCardHome"
import NavBar from '../components/Navbar/NavBar'
import RecentSearchPopup from '../components/Recent-Card/RecentSearchPopup'
import Brands from "../components/Brands/Brands"

const Land = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Navbar /> */}
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <SearchCardHome/>
        <Stats />
        <Brands/>
        <Business />
        <Billing />
        {/* <Testimonials /> */}
        <Test/>
        <Footer />
      </div>
    </div>

    <RecentSearchPopup />
  </div>
)

export default Land