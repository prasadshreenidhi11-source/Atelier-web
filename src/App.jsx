
import Hero from "./components/Hero";
import FeaturedProperties from "./components/FeaturedProperties";
import AboutSection from "./components/AboutSection";
import InteriorSection from "./components/InteriorSection";
import WhyAtelier from "./components/WhyAtelier";
import SignatureProperty from "./components/SignatureProperty";
import Locations from "./components/Locations";
import JournalStories from "./components/JournalStories";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
function App() {
  return (
    <main>
      <Hero />
      <FeaturedProperties/>
      <AboutSection/>
      <InteriorSection/>
      <WhyAtelier/>
      <SignatureProperty/>
      <Locations/>
      <JournalStories/>
      <FinalCTA/>
      <Footer/>
    </main>
  );
}

export default App;
