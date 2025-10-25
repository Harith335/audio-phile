import { HeroSection } from "./components/HeroSection";
import { Cards } from "./components/Cards";
import { Navbar } from "./components/Navbar";
import { Types } from "./components/Types";
import { Review } from "./components/Review";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className=" mx-auto  min-h-screen">
      <Navbar />
      <HeroSection />
      <section className="w-[1100px] mx-auto  min-h-screen">
        <Cards />
        <Types />
        <Review />
      </section>
      <Footer />
    </div>
  );
}

export default App;
