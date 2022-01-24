import Campaigns from "components/Campaigns";
import Cards from "components/Cards";
import Categories from "components/Categories";
import Favorites from "components/Favorites";
import Footer from "components/Footer";
import Header from "components/Header";
import HeroSection from "components/HeroSection";
import MobileApp from "components/MobileApp";
import { useWindowWidth } from "@react-hook/window-size";
function App() {
  const windowWith = useWindowWidth();
  return (
    <div className="App">
      <Header />
      {windowWith <= 768 && <Campaigns />}
      <HeroSection />
      <Categories />
      {windowWith > 768 && <Campaigns />}
      <div className="container mx-auto grid gap-y-6 pt-8">
        <Favorites />
        <MobileApp />
        <Cards />
      </div>

      <Footer />
    </div>
  );
}

export default App;
