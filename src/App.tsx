import { HeroSection } from "./components/HeroSection";
import { Cards } from "./components/Cards";
import { Navbar } from "./components/Navbar";
import { Types } from "./components/Types";
import { Review } from "./components/Review";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden bg-white">
      <Navbar />
      <HeroSection />
      <section className="max-w-[1100px] mx-auto grid gap-20 my-20">
        <Cards />
        <Types />
        <Review />
      </section>
      <Footer />
    </div>
  );
}

export default App;
