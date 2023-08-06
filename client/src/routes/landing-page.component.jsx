import Topbar from "../components/topbar/topbar.component";
import HeroBanner from "../components/hero-banner/hero-banner.component";
import Footer from "../components/footer/footer.component";
import Testimonials from "../components/testimonials/testimonails.component";
import Milestones from "../components/milestones/milestones.component";
import Propertysale from "../components/properties/properties-sale.component";
import Chooseus from "../components/testimonials/choose-us.component";

const LandingPage = () => {
  return (
    <div>
      <Topbar />
      <HeroBanner />
      <Milestones />
      <Propertysale />
      <Chooseus />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
