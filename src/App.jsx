import BirthSection from "./BirthSection";
import Cards from "./Cards";
import Consultation from "./Consultation";
import Header from "./Header";
import Hero from "./Hero";
import MainSection from "./MainSection";

export default function App() {
  return (
    <div className="min-h-screen " >
      <Header />
      <Hero />
      <Cards />
      <BirthSection />
      <MainSection />
      <Consultation />
    </div>
  )
}