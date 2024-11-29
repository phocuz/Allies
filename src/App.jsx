import BirthSection from "./BirthSection";
import Cards from "./Cards";
import Consultation from "./Consultation";
import CreateBirth from "./CreateBirth";
import Explore from "./Explore";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import MainSection from "./MainSection";
import Templates from "./Templates";

export default function App() {
  return (
    <div className="min-h-screen  bg-customWhite" >
      <Header />
      <Hero />
      <Cards />
      <BirthSection />
      <MainSection />
      <Consultation />
      <Templates />
      <Explore />
      <CreateBirth />
      <Footer />
    </div>
  )
}