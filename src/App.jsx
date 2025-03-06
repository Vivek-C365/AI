import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import Work from "./components/Work";
import NeonForm from "./components/Form";
import ScrollVelocity from "./animations/ScrollVelocity";
import ClickSpark from "./animations/ClickSpark";
import Learnmore from "./components/learnmore";

function App() {
  return (
    <Router>
      <div className="spark-container">
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <ScrollVelocity
                    texts={["Smart Learning", "AI-powered Assistant"]}
                    velocity={100}
                    className="custom-scroll-text text-[#9e6bff]"
                  />
                  <FeaturesSection />
                  <Work />
                  <NeonForm />
                </>
              }
            />
            <Route path="/learnmore" element={<Learnmore />} />
          </Routes>
        </ClickSpark>
      </div>
    </Router>
  );
}

export default App;
