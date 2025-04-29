import "./App.css";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import Home from "./services/pages/Home";
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Home />
    </div>
  );
}

export default App;
